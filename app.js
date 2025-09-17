// Simple starter JS
const form = document.getElementById('processForm');
const algorithmSelect = document.getElementById('algorithm');
const quantumInput = document.getElementById('quantum');
const quantumLabel = document.getElementById('quantumLabel');

algorithmSelect.addEventListener('change', () => {
  if (algorithmSelect.value === 'rr') {
    quantumInput.style.display = 'inline';
    quantumLabel.style.display = 'inline';
  } else {
    quantumInput.style.display = 'none';
    quantumLabel.style.display = 'none';
  }
});

// This array stores all processes entered
let processes = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const pid = document.getElementById('pid').value;
  const arrival = parseInt(document.getElementById('arrival').value);
  const burst = parseInt(document.getElementById('burst').value);

  processes.push({ pid, arrival, burst });
  alert('Process added!');
  form.reset();
});

// You can implement your CPU scheduling algorithms here
document.getElementById('runBtn').addEventListener('click', () => {
  const algorithm = algorithmSelect.value;
  console.log('Running', algorithm, 'with processes', processes);
  // call your scheduling functions and update the table
});
