let a2hsPrompt;

window.addEventListener('beforeinstallprompt', e => {
  console.log('A2HS', e);
  a2hsPrompt = e;
});

function a2hs() {
  if (!a2hsPrompt) return alert('Not allowed or not supported.');
  a2hsPrompt.prompt();
  a2hsPrompt.userChoice.then(res => {
    const hasAccepted = res.outcome === 'accepted';
    console.log(`User ${hasAccepted ? 'y' : 'n'} accepted the A2HS prompt`);
  });
}
