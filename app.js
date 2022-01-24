

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo => {

  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
    `;

  list.innerHTML += html;

};

addForm.addEventListener('submit', e => {

  e.preventDefault();

  // removes spaces from input value
  const todo = addForm.add.value.trim();

  // check if something is typed in textbox
  if(todo.length) {
    generateTemplate(todo);

    // reset input fields in form after submit
    addForm.reset();
  }
 
});

// delete todos
list.addEventListener('click', e => {

   if(e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
   }
   
});

