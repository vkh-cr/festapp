import sys
import os
from supabase import create_client, Client
import pandas as pd
import numpy as np

url = "https://jyghacisbuntbrshhhey.supabase.co"
key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5Z2hhY2lzYnVudGJyc2hoaGV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIxMjAyMjksImV4cCI6MTk5NzY5NjIyOX0.SLVxu1YRl2iBYRqk2LTm541E0lwBiP4FBebN8PS0Rqg'
Client = create_client(url, key)


response = Client.table('migrated_users').select("*").execute()

print(response)


sheet = pd.read_csv(sys.argv[1])

s = sheet

# když je prázdné číslo registrace, tak se řádek nepočítá
s = s[~np.isnan(s["Číslo registrace"])]



migrate_columns = [
	("email","E-mail"),
	#("registration_number","Číslo registrace"),
	("name","Jméno"),
	("surname","Příjmení"),
	("sex","Pohlaví"),
	("accommodation_type","Varianta ubytování"),
	("phone","Telefon"),
	("phone2","Telefon v případě ohrožení"),
	("role","Role")
]

def w(x):
	if str(x) == "nan":
		return None
	return str(x)

for _,r in s.iterrows():
	print(r)

	ins = { sup_col: w(r[sheet_col]) for sup_col,sheet_col in migrate_columns }

	ins["registration_number"] = int(r["Číslo registrace"])
	print(ins)
	data, count = Client.table('migrated_users').insert(ins).execute()
