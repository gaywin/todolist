

//get reference to form

const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');

addForm.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addForm.add.value
  console.log(todo)
})