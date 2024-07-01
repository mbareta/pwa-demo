'use strict';

const url = 'https://updates.push.services.mozilla.com/wpush/v1/gAAAAABmgpj2zfEooNqPTe9UHX9n45WJDuBoHM5dN2IIU489xXoRQ_PdG9rcWl5vcbkGmi6y2FRAxXPgdQoWSJ-cLByBhskemn3o121iRhxHL8xWJjnJX4NOL_r7iQC8MaPO3en9aYrY';
const headers = {
  TTL: 86400, Topic: 'new_notification'
};

return fetch(url, {
  headers,
  method: 'POST'
}).then(console.log)
