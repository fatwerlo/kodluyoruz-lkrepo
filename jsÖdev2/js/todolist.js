
const myList = document.querySelector('ul');


myList.addEventListener('click', (ev) => {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
});


function newElement() {
  const inputValue = document.getElementById('task').value;

  
  if (!inputValue || inputValue.replace(/^\s+|\s+$/g, "").length === 0) {
    $('.error').toast('show');
    
    document.getElementById('task').value = '';
    return;
  }

  
  const li = document.createElement('li');
  li.textContent = inputValue;
  myList.appendChild(li);

  
  const span = document.createElement('SPAN');
  span.className = 'close';
  span.textContent = '\u00D7';
  li.appendChild(span);

  
  span.onclick = () => {
    li.style.display = 'none';
  };

  
  document.getElementById('task').value = '';
}