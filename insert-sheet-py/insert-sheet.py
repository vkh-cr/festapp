import sys
import os
from supabase import create_client, Client
import pandas as pd
import numpy as np

url = "https://jyghacisbuntbrshhhey.supabase.co"
key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5Z2hhY2lzYnVudGJyc2hoaGV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIxMjAyMjksImV4cCI6MTk5NzY5NjIyOX0.SLVxu1YRl2iBYRqk2LTm541E0lwBiP4FBebN8PS0Rqg'
Client = create_client(url, key)


(_, data), count = Client.table('migrated_users').select("*").execute()

reg_id = {}
for r in data:
	i = r["id"]
	reg = r['registration_number']
	if reg in reg_id:
		print(f"WARNING: registration_number {reg} is duplicated!!!",file=sys.stderr)
#		sys.exit(1)
	reg_id[reg] = i

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

def w(value, col):
	if str(value) == "nan":
		return None
	if "phone" in col: # má to být text, ale končilo na .0 jako float
		return str(value).replace(".0","")
	return str(value)

for _,r in s.iterrows():
	print(r)

	ins = { sup_col: w(r[sheet_col], sup_col) for sup_col,sheet_col in migrate_columns }
	reg = int(r["Číslo registrace"])
	ins["registration_number"] = reg
	if reg in reg_id:
		ins["id"] = reg_id[reg]
		del reg_id[reg]  
	data, count = Client.table('migrated_users').upsert(ins).execute()

# delete those who are left in reg_id, it means deleted in spreadsheet, but
# left in the database

to_delete = list(reg_id.values())
if to_delete:
	while to_delete:
		d = to_delete.pop()
		res = Client.table('migrated_users').delete().match({"id":d}).execute()
		print(res)
