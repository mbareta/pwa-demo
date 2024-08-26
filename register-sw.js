if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register('sw.js').then(
    registration => {
      console.log('Service worker successfully registered.', registration);
    },
    error => {
      console.error('Service worker registration failed.', error);
    }
  );
  navigator.serviceWorker.ready
    .then(registration => (swRegistration = registration));
} else {
  alert('This browser does not support service worker.')
}
