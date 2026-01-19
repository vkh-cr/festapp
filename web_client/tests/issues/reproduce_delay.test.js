
import { test, describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';
import { FormSession } from '../../src/components/forms/form_session.js';
import { DbForms } from '../../src/components/forms/db_forms.js';
import { JSDOM } from 'jsdom';

// Emulate DOM
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.window = dom.window;
global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;

describe('FormSession Optimistic Updates', () => {
    let session;
    let mockFormModel;
    let dbSelectSpotCallCount = 0;
    let dbSelectSpotResolver = null;

    beforeEach(() => {
        dbSelectSpotCallCount = 0;
        dbSelectSpotResolver = null;

        mockFormModel = {
            key: 'test_form',
            secret: 'test_secret',
            visibleFields: [],
            relatedFields: [],
            isCardDesign: false
        };

        // Mock DbForms.selectSpot
        // We override the singleton/static method behavior by mocking the module logic?
        // Since DbForms is imported, we can't easily mock it unless we modify the import or the object.
        // FormSession imports DbForms.
        // We can try to overwrite the method on the class if it's not sealed.
        DbForms.selectSpot = async (key, secret, spotId, isSelecting) => {
            dbSelectSpotCallCount++;
            // Return a promise that we can control
            return new Promise((resolve) => {
                if (dbSelectSpotResolver) {
                    // unexpected immediately resolve? No, wait for manual resolve
                    dbSelectSpotResolver = resolve;
                } else {
                     // If test didn't set a trap, verify standard delay behavior
                     setTimeout(() => resolve({ success: true }), 100); 
                }
            });
        };
        
        session = new FormSession(mockFormModel);
    });

    it('should update state IMMEDIATELY (Optimistic) before network finishes', async () => {
        const spotId = 'spot_123';
        const spotObj = { id: spotId, price: 100 };

        // Setup a "trap" to hold the network request
        let networkPromiseResolve;
        const networkPromise = new Promise(resolve => { networkPromiseResolve = resolve; });
        
        // Override mock to wait
        DbForms.selectSpot = async () => {
            return networkPromise;
        };

        // Action
        const togglePromise = session.toggleSpot(spotObj, true);

        // IMMEDIATE ASSERTION: State should be updated NOW
        // Current Code (BEFORE FIX): This matches the "delayed" behavior? 
        // We want to ASSERT that it IS updated.
        // If the code is NOT fixed, this assertion might fail if it waits.
        // But wait, the current code queues the updateState inside the async task?
        // Let's check `form_session.js`:
        // const task = async () => { updateState... await Db... }
        // const enqueued = this._spotQueue.then(...)
        
        // The task is executed via .then().
        // Microtask queue needs to drain.
        
        // Force microtasks?
        await new Promise(r => setTimeout(r, 0));

        const hasTicket = session.state.tickets.some(t => t.spot === spotId);
        
        // This assertion defines "Optimistic": it must be true even if networkPromise is still pending
        assert.strictEqual(hasTicket, true, "State should be updated optimistically before network returns");

        // Cleanup
        networkPromiseResolve({ success: true });
        await togglePromise;
    });

    it('should revert state if network fails', async () => {
        const spotId = 'spot_fail';
        DbForms.selectSpot = async () => {
             throw new Error("Network Error");
        };

        try {
            await session.toggleSpot({ id: spotId, price: 100 }, true);
        } catch (e) {
            // Expected error
        }

        const hasTicket = session.state.tickets.some(t => t.spot === spotId);
        assert.strictEqual(hasTicket, false, "State should be reverted after failure");
    });
});
