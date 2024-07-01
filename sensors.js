document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function() {
    navigator.vibrate(300);
  });
})
