const help = `
hlsd <options>

options:
========
--help
--version
--tls
--host <host>
--port <number>
--req-headers <filepath>
--origin <header>
--referer <header>
--useragent <header>
--header <name=value>
--req-options <filepath>
--req-insecure
--req-secure-honor-server-cipher-order
--req-secure-ciphers <string>
--req-secure-protocol <string>
--req-secure-curve <string>
--hooks <filepath>
--prefetch
--max-segments <number>
--cache-timeout <number>
--cache-key <number>
-v <number>
--acl-whitelist <ip_address_list>
--http-proxy <http[s]://[user:pass@]hostname:port>
--tls-cert <filepath>
--tls-key <filepath>
--tls-pass <filepath>
`

module.exports = help
