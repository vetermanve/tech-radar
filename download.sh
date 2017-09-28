#!/bin/bash

MONTH=`date +%m`
YEAR=`date +%Y`
FILE="data/${YEAR}_${MONTH}.tsv"

curl "https://docs.google.com/spreadsheets/d/1-oJMCFKpMIqPKbx7GZ0Vc-wj5NyE8OblKwi0F2Qh_V4/export?gid=0&format=tsv" -o "$FILE"

#remove first row
tail -n +2 "$FILE" > "$FILE.tmp" && mv "$FILE.tmp" "$FILE"
