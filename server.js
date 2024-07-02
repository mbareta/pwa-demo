'use strict';

const url = 'https://updates.push.services.mozilla.com/wpush/v1/gAAAAABmg8YV2FNv93tBbHtfMIYh7W_NVZKsclUtqQ5c9uClja76QrxPSs9FSEJQKS8TC9FX0mW4JQ_kModdoOvpXpZveqEO5DDH4rGBLUwTgjrx15pnQCxiHR6X_-VowZT_hfxEmOi1';
const headers = {
  TTL: 86400, Topic: 'new_notification'
};

return fetch(url, {
  headers,
  method: 'POST'
}).then(console.log)
