#!/usr/bin/env bash
for FILE in $(ls *.xml); do
  BASENAME=$(basename $FILE .xml)
  echo "==> ${FILE}..."
  xml2json "${FILE}" > "${BASENAME}.json"
  cat "${BASENAME}.json" | jq --raw-output '(.nmaprun.host | arrays) // [.nmaprun.host] | map(select(.status.state == "up")) | map(.address.addr) | .[]' > "${BASENAME}.txt"
done
