if ("serviceWorker" in navigator) {
  navigator.serviceWorker.addEventListener('message', event => {
    console.log(event.data);
  });

  document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      swRegistration.active.postMessage(`Button ${button} clicked.`);
    });
  })
}
