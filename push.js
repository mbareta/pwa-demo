function subscribe() {
  if (!isSupported) return alert('Not supported');
  Notification.requestPermission().then(async permission => {
    message.innerHTML = permission;
    if (permission !== 'granted') return;
    const existing = await swRegistration.pushManager.getSubscription();
    if (existing) {
      message.innerHTML = existing.endpoint;
      return;
    }
    return swRegistration.pushManager.subscribe()
      .then(({ endpoint }) => {
        message.innerHTML = endpoint;
        new Notification('Successfully subscribed!')
      })
      .catch(err => (message.innerHTML = err));
  });
}
