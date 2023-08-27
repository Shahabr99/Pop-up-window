const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const closebtn = document.querySelector('.closebtn')

button.addEventListener('click', () => {
  popup.style.display = 'block';
});

closebtn.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', () => {
  popup.style.display = 'none';
})