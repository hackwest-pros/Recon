const [nil1, nil2, cidr] = process.argv;

const underscore = s => s.replace(/[^a-z0-9]+/ig, '_');

console.log(
`nmap -P0 -n -v -T4 --min-hostgroup 255 `+
`--open -oX nmap-top-${underscore(cidr)}.xml ${cidr}`);
