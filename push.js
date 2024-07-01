navigator.serviceWorker.ready.then(registration => {
  registration.pushManager.getSubscription().then(console.log);
  serviceWorkerRegistration = registration;
});

function subscribe() {
  if (!isSupported) alert('Not supported');
  Notification.requestPermission().then(permission => {
    if (permission === 'granted') {
      serviceWorkerRegistration.pushManager.subscribe({
        // applicationServerKey: 'secret',
        userVisibleOnly: true
       }).then(console.log);
    }
  });
}
