import { JSDOM } from 'jsdom';

// Set up DOM globals for sanitizeHtml
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
global.DOMParser = dom.window.DOMParser;
global.Node = dom.window.Node;

import { sanitizeHtml, SafeHtml } from '../../src/utils/html.js';

let passed = 0;
let failed = 0;

function assert(condition, message) {
    if (condition) {
        console.log(`  PASS: ${message}`);
        passed++;
    } else {
        console.error(`  FAIL: ${message}`);
        failed++;
    }
}

console.log('sanitizeHtml tests:');

// Test 1: Returns SafeHtml instance
{
    const result = sanitizeHtml('<p>Hello</p>');
    assert(result instanceof SafeHtml, 'returns SafeHtml instance');
}

// Test 2: Preserves safe tags
{
    const result = sanitizeHtml('<p>Hello <b>world</b></p>');
    assert(result.toString().includes('<p>'), 'preserves <p> tag');
    assert(result.toString().includes('<b>'), 'preserves <b> tag');
}

// Test 3: Strips script tags
{
    const result = sanitizeHtml('<p>Hello</p><script>alert("xss")</script>');
    assert(!result.toString().includes('<script'), 'strips script tags');
    assert(!result.toString().includes('alert'), 'strips script content');
}

// Test 4: Strips iframe tags
{
    const result = sanitizeHtml('<p>Hello</p><iframe src="evil.com"></iframe>');
    assert(!result.toString().includes('<iframe'), 'strips iframe tags');
}

// Test 5: Strips on* event handlers
{
    const result = sanitizeHtml('<div onclick="alert(1)" onmouseover="alert(2)">Click</div>');
    assert(!result.toString().includes('onclick'), 'strips onclick');
    assert(!result.toString().includes('onmouseover'), 'strips onmouseover');
    assert(result.toString().includes('<div>'), 'preserves div element');
}

// Test 6: Strips javascript: hrefs
{
    const result = sanitizeHtml('<a href="javascript:alert(1)">Click</a>');
    assert(!result.toString().includes('javascript:'), 'strips javascript: href');
}

// Test 7: Preserves safe attributes
{
    const result = sanitizeHtml('<a href="https://example.com" class="link">Link</a>');
    assert(result.toString().includes('href="https://example.com"'), 'preserves href');
    assert(result.toString().includes('class="link"'), 'preserves class');
}

// Test 8: Preserves img with allowed attributes
{
    const result = sanitizeHtml('<img src="photo.jpg" alt="Photo" width="100">');
    assert(result.toString().includes('src="photo.jpg"'), 'preserves img src');
    assert(result.toString().includes('alt="Photo"'), 'preserves img alt');
}

// Test 9: Strips form and input elements
{
    const result = sanitizeHtml('<form action="/steal"><input type="text"></form>');
    assert(!result.toString().includes('<form'), 'strips form tags');
    assert(!result.toString().includes('<input'), 'strips input tags');
}

// Test 10: Handles null/empty input
{
    const result = sanitizeHtml(null);
    assert(result.toString() === '', 'handles null input');

    const result2 = sanitizeHtml('');
    assert(result2.toString() === '', 'handles empty string');
}

// Test 11: Preserves heading tags
{
    const result = sanitizeHtml('<h1>Title</h1><h2>Subtitle</h2>');
    assert(result.toString().includes('<h1>'), 'preserves h1');
    assert(result.toString().includes('<h2>'), 'preserves h2');
}

// Test 12: Preserves table structure
{
    const result = sanitizeHtml('<table><tr><td>Cell</td></tr></table>');
    assert(result.toString().includes('<table>'), 'preserves table');
    assert(result.toString().includes('<tr>'), 'preserves tr');
    assert(result.toString().includes('<td>'), 'preserves td');
}

// Test 13: Strips object/embed elements
{
    const result = sanitizeHtml('<object data="flash.swf"></object><embed src="flash.swf">');
    assert(!result.toString().includes('<object'), 'strips object tags');
    assert(!result.toString().includes('<embed'), 'strips embed tags');
}

// Test 14: Strips disallowed attributes
{
    const result = sanitizeHtml('<div id="secret" data-token="abc123">Content</div>');
    assert(!result.toString().includes('id='), 'strips id attribute');
    assert(!result.toString().includes('data-token'), 'strips data- attributes');
    assert(result.toString().includes('Content'), 'preserves text content');
}

// Summary
console.log(`\nResults: ${passed} passed, ${failed} failed`);
if (failed > 0) {
    process.exit(1);
}
