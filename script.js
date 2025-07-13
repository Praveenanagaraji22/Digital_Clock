let is24 = false;

function updateClock() {
  const now = new Date();
  let h = now.getHours(), m = now.getMinutes(), s = now.getSeconds();
  let ampm = '';

  if (!is24) {
    ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
  }

  const time = [
    h.toString().padStart(2, '0'),
    m.toString().padStart(2, '0'),
    s.toString().padStart(2, '0')
  ].join('<span class="blink">:</span>');

  document.getElementById('clock').innerHTML = time + (is24 ? '' : ` <span id="ampm">${ampm}</span>`);
  document.getElementById('date').innerText = now.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

document.getElementById('switchbtn').onclick = () => {
  is24 = !is24;
  switchbtn.textContent = is24 ? 'Switch to 12-Hour' : 'Switch to 24-Hour';
  updateClock();
};

setInterval(updateClock, 1000);
updateClock();

