# CSV user import

Editors can import participants from the Users administration using the CSV
import dialog. The first row is a header; column order does not matter. The
dialog's **Expected file format** section lists and copies the currently
supported headers.

The required columns are:

- `E-mailová adresa`
- `Jméno:`
- `Příjmení:`

E-mail is the participant identifier. Reimporting a row with the same e-mail
updates that occasion user instead of creating a duplicate.

## Group column

`Skupina:` is optional. `Skupina` without the colon is accepted as well.
When the column is present, its value is authoritative for the participant's
standard group on the current occasion:

- A non-empty value assigns the participant to the named group.
- A missing group is created automatically.
- Reimporting the participant with another value removes the previous standard
  group membership and moves the participant to the new group.
- An empty value removes the participant from their standard group.
- Omitting the entire `Skupina:` column leaves existing membership unchanged.

An imported participant can belong to only one standard group. Typed groups,
such as game groups, are not changed by the CSV import. Group synchronization
is performed atomically by `public.import_user_group_assignments`, so a failed
group-synchronization call does not leave membership half-updated.

## Example

```csv
E-mailová adresa,Jméno:,Příjmení:,Poznámka:,Skupina:
bujnmi@gmail.com,Bujn,Mi,Imported from CSV,Testovací skupina CSV
```
