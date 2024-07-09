document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => navigator.vibrate(150));
})
