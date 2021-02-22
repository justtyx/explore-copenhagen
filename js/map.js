// Get DOM Elements
const modal = document.querySelector('#my-modal');
//const modalBtn = document.querySelector('#valby');
const closeBtn = document.querySelector('.close');

// Events
//modalBtn.addEventListener('click', openModal);
document.querySelector('#bronshoj').addEventListener('click', openModal);
document.querySelector('#valby').addEventListener('click', openModal);
document.querySelector('#vanlose').addEventListener('click', openModal);
document.querySelector('#frederiksberg').addEventListener('click', openModal);
document.querySelector('#bispebjerg').addEventListener('click', openModal);
document.querySelector('#norrebro').addEventListener('click', openModal);
document.querySelector('#osterbro').addEventListener('click', openModal);
document.querySelector('#vesterbro').addEventListener('click', openModal);
document.querySelector('#amager').addEventListener('click', openModal);
document.querySelector('#indre-by').addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
