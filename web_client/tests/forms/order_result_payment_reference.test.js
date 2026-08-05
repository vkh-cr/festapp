import test from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { OrderResult } from '../../src/components/forms/order_result.js';

test('order result renders RF reference as text, not HTML', () => {
  const dom = new JSDOM('<div id="host"></div>', { url: 'http://localhost/' });
  global.document = dom.window.document;
  const host = document.querySelector('#host');
  const dangerous = 'RF18<script>bad()</script>';
  OrderResult.render(host, true, {
    payment_qr: {
      reference_kind: 'RF', reference: dangerous,
      account_number: 'DE71110220330123456789', amount: 1, currency_code: 'EUR',
    },
  }, { communicationTone: 'formal', visibleFields: [] }, () => {});
  assert.equal(host.querySelectorAll('script').length, 0);
  assert.equal(host.querySelectorAll('.result-payment-value')[1]?.textContent, dangerous);
});
