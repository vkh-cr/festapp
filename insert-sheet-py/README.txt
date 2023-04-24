Je nutné mít nainstalované:

- python3 >= 3.8 , protože supabase pro Python je jen pro >= 3.8

Doporučené (ale jde to i jinak, bez toho)
- virtualenv (nainstaluje se např. `pip install -U virtualenv`)
- vytvoř virtuální prostředí Pythonu pro tenhle skript, do téhle složky,
  pojmenuj ho p8:

virtualenv -p [cesta k binárce pythonu >= 3.8] p3  

- aktivace:
source p3/bin/activate

Instalace pythonovských knihoven:

pip install pandas supabase


Použití:

1) stáhni sheet "Data master" z Google sheets jako csv


2) pusť skript, první argument je cesta k tomu csv (tahle je defaultní)

python3 insert-sheet.py "DevCopyRegistraceMain - Data master.csv"



Pozn.:
- "registration_number" aka "Číslo registrace" je unikátní. Situace, kdy
  není, je nedefinovaná, ale v současné dev verzi sheetu takový případ je.
