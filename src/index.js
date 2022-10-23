document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let task = document.querySelector('#new-task-description').value
    
    if (task === ""){
      return alert("Add a task before clicking create a task button");
    }
    
    tasksToAdd(task)
    form.reset();
    
  })

  function tasksToAdd(todo){
    let deleteBtn = document.createElement('button')
    let li = document.createElement('li');
    li.textContent = todo;
    deleteBtn.innerText = ' x';
    li.append(deleteBtn);
    document.querySelector('#list').appendChild(li);

    function deleteFunction(e){
      e.target.parentNode.remove();
    }

    deleteBtn.addEventListener('click', deleteFunction);
  } 

});

