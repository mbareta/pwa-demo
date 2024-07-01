const isSupported = 'Notification' in window;
const isEnabled = isSupported && Notification.permission === 'granted';

function notifyMe() {
  if (!isSupported) alert('Not supported!');
  if (isEnabled) {
    new Notification('Hi there! I think I saw you already...');
  } else if (Notification.permission !== 'denied') {
    return Notification.requestPermission().then(permission => {
      if (permission === 'granted') new Notification('Hi there!');
    });
  }
}
