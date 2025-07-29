function addRepeatButton() {
  const video = document.querySelector('video');
  if (!video || document.getElementById('repeatButton')) return;

  const button = document.createElement('button');
  button.id = 'repeatButton';
  button.innerText = '🔁 Repeat: OFF';
  button.style.position = 'fixed';
  button.style.top = '20px';
  button.style.right = '20px';
  button.style.zIndex = 10000;
  button.style.backgroundColor = '#000';
  button.style.color = '#fff';
  button.style.padding = '10px';
  button.style.border = '2px solid #fff';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';

  let repeat = false;
  button.onclick = () => {
    repeat = !repeat;
    video.loop = repeat;
    button.innerText = repeat ? '🔁 Repeat: ON' : '🔁 Repeat: OFF';
  };

  document.body.appendChild(button);
}

const observer = new MutationObserver(() => {
  if (window.location.href.includes('watch?v=')) {
    addRepeatButton();
  }
});

observer.observe(document.body, { childList: true, subtree: true });
