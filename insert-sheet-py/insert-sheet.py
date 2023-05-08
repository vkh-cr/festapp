import sys
import os
from supabase import create_client, Client
import pandas as pd
import numpy as np


if len(sys.argv) <= 1:
	csvpath = '/Users/miakh/Downloads/DevCopyRegistraceMain - Data master.csv'
else:
	csvpath = sys.argv[1]

if not os.path.isfile(csvpath):
	print(f"Usage: 1) python3 {sys.argv[0]} csv_path , or 2) python3 {sys.argv[0]} . Then the csv must be on path {csvpath} .",file=sys.stderr)
	sys.exit(1)


# we assume that the user is identifiable by this column in the sheet. It
# must not be duplicated or empty
SHEET_PRIMARY_KEY = "E-mail"

# in supabase, this column is named this way
SUPA_PRIMARY_KEY = "email"

print("using the csv file at ",csvpath,file=sys.stderr)


# accessing supabase
url = "https://jyghacisbuntbrshhhey.supabase.co"
key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5Z2hhY2lzYnVudGJyc2hoaGV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIxMjAyMjksImV4cCI6MTk5NzY5NjIyOX0.SLVxu1YRl2iBYRqk2LTm541E0lwBiP4FBebN8PS0Rqg'
Client = create_client(url, key)

# retrieving all migrated users from supabase. They will be in data object
(_, data), _ = Client.table('migrated_users').select("*").execute()

# we store all the primary keys in this set. Later we detect which users are
# in supabase but not in the sheet, and we delete them.
supa_users = set(r[SUPA_PRIMARY_KEY] for r in data)

sheet = pd.read_csv(csvpath, dtype=str)
s = sheet

# filtering out the sheet rows where primary key column is empty
s = s[~pd.isnull(s[SHEET_PRIMARY_KEY])]
#print("tady",s[SHEET_PRIMARY_KEY])

# List of pairs ("supabase column name", "Sheet column name") to migrate.
# Only text columns are in this list, not registration_number
# because it's the only int. We migrate it other way
migrate_columns = [
	("id","Id"),
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

# supabase needs None for empty values. This function retypes it
def retype_str(value):
	if str(value) == "nan":
		return None
	return value

# insert or update all the sheet users to supabase
for _,r in s.iterrows():
	print(r)  # debug print
	# str columns migration
	ins = { sup_col: retype_str(r[sheet_col]) for sup_col,sheet_col in migrate_columns }

	# int column migration: retype to int
	reg = int(r["Číslo registrace"])
	ins["registration_number"] = reg

	# removing from set of migrated users
	primary = ins[SUPA_PRIMARY_KEY]
	if primary in supa_users:
		supa_users.remove(primary)
	data, count = Client.table('migrated_users').upsert(ins).execute()

# delete those who are left in reg_id, it means deleted in spreadsheet, but
# left in the database
print()
print("Deleting users:")
while supa_users:
	d = supa_users.pop()
	res = Client.table('migrated_users').delete().match({SUPA_PRIMARY_KEY:d}).execute()
	print(res)
