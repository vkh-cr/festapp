CREATE OR REPLACE FUNCTION public.update_payment_info_variable_symbol(
  p_payment_info_id bigint,
  p_variable_symbol bigint
)
  RETURNS void
  LANGUAGE sql
AS $$
  UPDATE eshop.payment_info
     SET variable_symbol = p_variable_symbol
   WHERE id = p_payment_info_id;
$$;
