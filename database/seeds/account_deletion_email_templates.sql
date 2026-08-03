INSERT INTO public.email_templates(html,subject,organization,code,title)
SELECT
  '<p>Obdrželi jsme žádost o smazání účtu v {{appName}}.</p><p><a href="{{confirmationUrl}}">Zkontrolovat a potvrdit smazání účtu</a></p><p>Odkaz platí do {{expiresAt}}. Pouhé otevření odkazu účet nesmaže. Nikomu jej nepřeposílejte.</p>',
  'Potvrďte smazání účtu CSM Ostrava', 9, 'ACCOUNT_DELETION_CONFIRM', 'Smazání účtu – potvrzení'
WHERE EXISTS (SELECT 1 FROM public.organizations WHERE id=9)
  AND NOT EXISTS (SELECT 1 FROM public.email_templates WHERE organization=9 AND code='ACCOUNT_DELETION_CONFIRM');

INSERT INTO public.email_templates(html,subject,organization,code,title)
SELECT
  '<p>Váš účet v {{appName}} byl smazán. Soukromá účastnická data a propojená push identita byly odstraněny; právně vyžadované záznamy mohou zůstat pouze bez přímé identity.</p>',
  'Účet CSM Ostrava byl smazán', 9, 'ACCOUNT_DELETION_COMPLETE', 'Smazání účtu – dokončeno'
WHERE EXISTS (SELECT 1 FROM public.organizations WHERE id=9)
  AND NOT EXISTS (SELECT 1 FROM public.email_templates WHERE organization=9 AND code='ACCOUNT_DELETION_COMPLETE');
