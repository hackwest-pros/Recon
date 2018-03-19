const [nil1, nil2, cidr] = process.argv;

const underscore = s => s.replace(/[^a-z0-9]+/ig, '_');

console.log(
	`nmap -sS -p22,445 -Pn -T4 -n -v -r `+
	`--min-hostgroup 255 --min-rtt-timeout 1ms `+
	`--max-rtt-timeout 240ms --max-retries 0 `+
	`--max-scan-delay 0 `+
	`--open -oX nmap-${underscore(cidr)}.xml ${cidr} | grep -v "giving up"`);
