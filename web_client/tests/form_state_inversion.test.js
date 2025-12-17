
import { test, describe, it, before, beforeEach } from 'node:test';
import assert from 'node:assert';
import { FormSession } from '../src/components/forms/form_session.js';
import { JSDOM } from 'jsdom';

// Setup global JSDOM
const dom = new JSDOM('<!DOCTYPE html><html><body><form id="test-form"></form></body></html>', {
    url: 'http://localhost/',
});
global.window = dom.window;
global.document = dom.window.document;
global.HTMLElement = dom.window.HTMLElement;

describe('FormSession State Inversion', () => {
    let session;
    let mockFormModel;

    beforeEach(() => {
        document.body.innerHTML = '<form id="test-form"></form>';
        
        mockFormModel = {
            key: 'test_form',
            secret: 'test_secret',
            visibleFields: [
                { 
                    id: 'ticket_1', 
                    type: 'ticket', 
                    subFields: [
                        { id: 'sub_spot', type: 'spot', isRequired: true, options: [] },
                        { id: 'sub_prod', type: 'product_type', options: [{id: 'prod_1', price: 50}] } 
                    ]
                }
            ],
            relatedFields: [
                { type: 'ticket', data: { max_tickets: 10 } }
            ]
        };

        session = new FormSession(mockFormModel);
    });

    it('should sync payload immediately when adding a ticket via state', () => {
        // structural sync check
        assert.strictEqual(session.payload.ticket.length, 0);

        session.addTicket({
            spot: 101, // ID
            spotPrice: 200
        });

        assert.strictEqual(session.payload.ticket.length, 1);
        assert.strictEqual(session.payload.ticket[0].spot, 101);
        assert.strictEqual(session.payload.ticket[0].spotPrice, 200);
        
        // Check Price immediately
        assert.strictEqual(session.state.totalPrice, 200);
        assert.strictEqual(session.state.totalItems, 1);
    });

    it('should sync payload immediately when removing a ticket via state', async () => {
        session.addTicket({ spot: 101, spotPrice: 200 });
        session.addTicket({ spot: 102, spotPrice: 300 });

        assert.strictEqual(session.payload.ticket.length, 2);
        assert.strictEqual(session.state.totalPrice, 500);

        // Remove first one
        await session.removeTicket(0);

        assert.strictEqual(session.payload.ticket.length, 1);
        assert.strictEqual(session.payload.ticket[0].spot, 102); // Remaining should be 102
        
        // Check Price immediately
        assert.strictEqual(session.state.totalPrice, 300);
    });

    it('should update ticket fields via updateTicket', () => {
        session.addTicket(); // Empty ticket

        // Update sub_prod
        const valueObj = { product_type: 'prod_1', _subFieldId: 'sub_prod', price: 50 };
        session.updateTicket(0, 'sub_prod', valueObj);

        assert.strictEqual(session.payload.ticket[0].fields.length, 1);
        assert.strictEqual(session.payload.ticket[0].fields[0].product_type, 'prod_1');
        
        // Check Price (assuming update doesn't clear spotPrice if it was just fields)
        // With product price 50
        assert.strictEqual(session.state.totalPrice, 50);
    });
    
    it.skip('should handle State Inversion correctly (DOM reflection)', () => {
        // This test verifies that we don't need DOM scraping for basic operations anymore
        // We simulate "Add Ticket" purely via State.
        
        session.addTicket();
        assert.strictEqual(session.payload.ticket.length, 1);
        
        // Even if DOM is empty (as it is now), payload is correct.
        const form = document.getElementById('test-form');
        assert.strictEqual(form.innerHTML, ''); // Empty DOM
        
        // If we were scraping, payload would be empty. 
        // But we are using State Source of Truth.
        // refreshPayload WOULD scrape and overwrite?
        // Let's verify refreshPayload behavior:
        
        // session.refreshPayload(form); 
        // If refreshPayload scrapes DOM, it would clear tickets because DOM is empty!
        // This confirms we must be careful about mixing Source of Truth.
        // But our strategy is "Sync Payload FROM State".
        // refreshPayload calls _syncPayloadFromState() which uses STATE.
        
        session.refreshPayload(form);
        assert.strictEqual(session.payload.ticket.length, 1, "Refresh should respect State for tickets");
    });
});
