'use strict';

const url = 'https://fcm.googleapis.com/fcm/send/fBbWD-02W3A:APA91bF_tdYTYUuMRR8ovN4QkuGyrDXcyx92v9fL2xTKEKvJ_ElC9JaGYxIAI7wrsAOvfrofseATOqA3081fSZcrt0NlKqjW1rWb1SQuUQhxH2XSWkS2SfRjaM7tvrjh_W8UR3irsCqY';
const headers = { TTL: 86400, Topic: 'new_notification' };

return fetch(url, { headers, method: 'POST' }).then(console.log);
