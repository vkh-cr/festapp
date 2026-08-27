# Deletion ledger

| Legacy path | Earliest removal gate | Required evidence | Status |
|---|---|---|---|
| Cloud `default` runtime | canonical retention complete | encrypted final export and zero traffic | retained |
| Cloud `a` runtime | canonical retention complete | encrypted final export and zero traffic | retained |
| `a.api.festapp.net` | all `a` tenants canonical | DNS and gateway reachability scan | not created |
| Source journal/RPC/grants | final marker and stabilization | schema and privilege diff | not created |
| Target ingest/receipts | journal removal and audit export | schema and reachability scan | not created |
| Forwarder and secrets | zero lag and contraction approval | service and secret inventory | not created |
| Runtime staging/maps | encrypted evidence archived | schema diff | not created |
| Inter-project sync rows/maps/cron | external-source reachability decided | DB/cron inventory | retained |
| Cloud refs/Management API paths | self-hosted deploy proven | repo/config scan | retained |
| Old JWT/API/service keys | adoption and rotation complete | revoke test | retained |

Cloud project deletion is never implied by another gate. It requires explicit
destructive approval after retention.
