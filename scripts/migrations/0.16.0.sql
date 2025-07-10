DO $$
BEGIN
    -- Add the new columns to the table
    ALTER TABLE eshop.spots
      ADD COLUMN inventory_context BIGINT NULL,
      ADD COLUMN resource BIGINT NULL,
      ADD COLUMN resource_slot BIGINT NULL,
      ADD COLUMN state TEXT NULL;

    -- Add the foreign key constraints for the new columns
    ALTER TABLE eshop.spots
      ADD CONSTRAINT spots_inventory_context_fkey FOREIGN KEY (inventory_context) REFERENCES public.inventory_contexts (id) ON DELETE SET NULL,
      ADD CONSTRAINT spots_resource_fkey FOREIGN KEY (resource) REFERENCES public.resources (id) ON DELETE SET NULL,
      ADD CONSTRAINT spots_resource_slot_fkey FOREIGN KEY (resource_slot) REFERENCES public.resource_slots (id) ON DELETE SET NULL;

END;
$$;