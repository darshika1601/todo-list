function addTask() {
    const input = document.getElementById('inputask');
    const taskText = input.value.trim();
  
    if (taskText !== "") {
      const li = document.createElement('li');
      li.textContent = taskText;
  
      // Create delete button
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = '❌';
      deleteBtn.style.marginLeft = '10px';
      deleteBtn.onclick = function () {
        li.remove(); // removes the task
      };
  
      li.appendChild(deleteBtn); // add button to list item
  
      const taskList = document.getElementById('task');
      taskList.appendChild(li);
  
      input.value = "";
    }
  }
  
  