import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { transformImageUrl, THUMBNAIL_WIDTH, MEDIUM_WIDTH, FULL_WIDTH } from '../../src/utils/image_url_helper.js';

describe('transformImageUrl', () => {
    it('transforms img.festapp.net URL with default width and format', () => {
        const input = 'https://img.festapp.net/images/42/photo.jpg';
        const result = transformImageUrl(input);
        assert.strictEqual(
            result,
            'https://img.festapp.net/images/42/photo.jpg?w=300&f=auto'
        );
    });

    it('transforms with custom width (600)', () => {
        const input = 'https://img.festapp.net/images/42/photo.jpg';
        const result = transformImageUrl(input, { width: 600 });
        assert.strictEqual(
            result,
            'https://img.festapp.net/images/42/photo.jpg?w=600&f=auto'
        );
    });

    it('includes quality parameter when provided', () => {
        const input = 'https://img.festapp.net/images/42/photo.jpg';
        const result = transformImageUrl(input, { width: 300, quality: 80 });
        assert.strictEqual(
            result,
            'https://img.festapp.net/images/42/photo.jpg?w=300&f=auto&q=80'
        );
    });

    it('passes through non-img.festapp.net URLs unchanged', () => {
        const input = 'https://other-domain.com/image.jpg';
        const result = transformImageUrl(input);
        assert.strictEqual(result, input);
    });

    it('passes through Supabase Storage URLs unchanged', () => {
        const input = 'https://xyz.supabase.co/storage/v1/object/public/public-files/images/photo.jpg';
        const result = transformImageUrl(input);
        assert.strictEqual(result, input);
    });

    it('handles malformed URLs gracefully (returns original)', () => {
        const input = 'not-a-url';
        const result = transformImageUrl(input);
        assert.strictEqual(result, input);
    });

    it('handles empty string gracefully', () => {
        const result = transformImageUrl('');
        assert.strictEqual(result, '');
    });

    it('exports correct width constants', () => {
        assert.strictEqual(THUMBNAIL_WIDTH, 300);
        assert.strictEqual(MEDIUM_WIDTH, 600);
        assert.strictEqual(FULL_WIDTH, 1200);
    });
});
