function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; 

  const hoursFormatted = hours.toString().padStart(2, '0');

  document.getElementById('clock').innerHTML =
    `${hoursFormatted}<span class="blink">:</span>${minutes}<span class="blink">:</span>${seconds} <span id="ampm">${ampm}</span>`;

  const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  document.getElementById('date').innerText = now.toLocaleDateString(undefined, dateOptions);
}

setInterval(updateClock, 1000);
updateClock();
