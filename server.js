'use strict';

const url = process.argv[process.argv.length - 1];
const headers = { TTL: 86400, Topic: 'new_notification' };

return fetch(url, { headers, method: 'POST' }).then(console.log);
