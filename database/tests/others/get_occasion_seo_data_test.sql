-- Test: get_occasion_seo_data
-- Description: Verifies that the RPC correctly retrieves SEO data (title, description, image, org_title)
--              and handles missing slugs gracefully.

BEGIN;

-- 1. Setup Data
-- Create a dummy organization
INSERT INTO organizations (id, title)
VALUES (99999, 'SEO Test Org');

-- Create a dummy occasion linked to that org
INSERT INTO occasions (id, organization, title, link, description, data, start_time, end_time)
VALUES (
    99999, 
    99999, 
    'SEO Test Event', 
    'seo-test-event-slug', 
    'Best event ever', 
    '{"image": "https://example.com/poster.jpg"}'::jsonb,
    NOW(),
    NOW() + interval '1 day'
);

-- 2. Test Success Case
DO $$
DECLARE
    v_result JSON;
BEGIN
    v_result := get_occasion_seo_data('seo-test-event-slug');
    
    PERFORM assert_equals(
        (v_result->>'title'), 
        'SEO Test Event', 
        'Title should match'
    );
    
    PERFORM assert_equals(
        (v_result->>'org_title'), 
        'SEO Test Org', 
        'Org Title should match'
    );
    
    PERFORM assert_equals(
        (v_result->>'image'), 
        'https://example.com/poster.jpg', 
        'Image URL should match'
    );
END $$;

-- 3. Test Missing Slug
DO $$
DECLARE
    v_result JSON;
BEGIN
    v_result := get_occasion_seo_data('non-existent-slug');
    
    IF v_result IS NOT NULL THEN
        RAISE EXCEPTION 'Expected NULL result for missing slug, got: %', v_result;
    END IF;
END $$;

ROLLBACK;
