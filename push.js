navigator.serviceWorker.ready.then(registration => {
  registration.pushManager.getSubscription().then(console.log);
  serviceWorkerRegistration = registration;
});

function subscribe() {
  if (!isSupported) alert('Not supported');
  Notification.requestPermission().then(permission => {
    message.innerHTML = permission;
    if (permission === 'granted') {
      serviceWorkerRegistration.pushManager.subscribe({
        userVisibleOnly: true
       }).then(({ endpoint }) => {
        message.innerHTML = endpoint;
        new Notification('Successfully subscribed!')
       }).catch(err => {
        message.innerHTML = err;
       });
    }
  });
}
