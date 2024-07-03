navigator.serviceWorker.ready.then(registration => {
  registration.pushManager.getSubscription().then(console.log);
  swRegistration = registration;
});

function subscribe() {
  if (!isSupported) alert('Not supported');
  Notification.requestPermission().then(async permission => {
    message.innerHTML = permission;
    if (permission === 'granted') {
      const existing = await swRegistration.pushManager.getSubscription();
      if (existing) {
        message.innerHTML = existing.endpoint;
        return;
      }
      swRegistration.pushManager.subscribe({ userVisibleOnly: true })
        .then(({ endpoint }) => {
          message.innerHTML = endpoint;
          new Notification('Successfully subscribed!')
        })
        .catch(err => (message.innerHTML = err));
    }
  });
}
