    const addTodo = document.querySelector('#addTodo');
    const todo = document.querySelector('#todo');


    let count = 0;
    addTodo.addEventListener('click',()=>{
        if(todo.value.trim() != ''){

            count++;

            const todoList = document.createElement('div');
            todoList.classList.add('mb-[30px]', 'w-[700px]', 'flex', 'flex-row', 'justify-between', 'text-[#fff]', 'text-[25px]');
            todoList.id = `todolist${count}`;

            const checkBox = document.createElement('input');
            checkBox.setAttribute('type','checkbox');
            checkBox.className = 'w-[18px]';
            checkBox.id = `checkBox_${count}`;
            checkBox.addEventListener('click',checkedTodo);
            todoList.appendChild(checkBox);
            
            const todoDetails = document.createElement('input');
            todoDetails.classList.add('w-[400px]', 'bg-[#000]', 'focus:outline-none');
            todoDetails.id = `todo${count}`;
            todoDetails.value = todo.value.trim();
            todoDetails.readOnly = true;
            todoList.appendChild(todoDetails);
            
            const action = document.createElement('div');
            action.classList.add('w-[107px]', 'action');
            action.id = `action${count}`;
            
            const editbtn = document.createElement('button');
            editbtn.classList.add('editBtn', 'w-[50px]', 'p-[5px]', 'bg-[#26890d]', 'rounded-l-full');
            editbtn.id = `editBtn_${count}`;
            editbtn.addEventListener('click',getEditElement)
            const editIcon = document.createElement('i');
            editIcon.classList.add('fa', 'fa-edit');

            editbtn.appendChild(editIcon);
            
            
            const removebtn = document.createElement('button');
            removebtn.classList.add('removeBtn', 'w-[50px]', 'p-[5px]', 'bg-[#26890d]', 'rounded-r-full', 'float-right');
            removebtn.id = `remove_${count}`;
            removebtn.addEventListener('click',removeElements);
            const removeIcon = document.createElement('i');
            removeIcon.classList.add('fa', 'fa-trash-o');
            removebtn.appendChild(removeIcon);
            
            action.appendChild(editbtn);
            action.appendChild(removebtn);
            
            todoList.appendChild(action);

        

            document.querySelector('#todoAddSection').after(todoList)
            todo.value = '';
            todo.focus();
        }

    })


    function getEditElement(e){
            
        let editidstr = e.currentTarget.id.split('_');
        let uniqueId = editidstr[1];
        const editTodo = document.querySelector('#todo'+uniqueId);
        editTodo.readOnly = false;
        editTodo.focus();
        editTodo.classList.add('focus:outline-none');
        let btnSec = document.querySelector('#action'+uniqueId);
    
        btnSec.style.display = 'none'
        let updateBtn = document.createElement('button');
        updateBtn.classList.add('updateBtn', 'w-[100px]', 'p-[5px]', 'bg-[#E07C24]', 'rounded-full', 'text-[16px]');
        updateBtn.id = uniqueId;
        updateBtn.textContent = 'UPDATE';
        updateBtn.addEventListener('click',(e)=>{
            const currentBtn = e.currentTarget;
            currentBtn.remove();
            editTodo.readOnly = true;
            btnSec.style.display = 'block'
        })
    btnSec.after(updateBtn);
    }


    function removeElements(e){
        const ridstr = e.currentTarget.id.split('_');
        const rUniqueId = ridstr[1];
        
        if(confirm('Are you sure?')){
            document.querySelector('#todolist'+rUniqueId).remove();
        }
    }

    function checkedTodo(e){
        console.log(this.checked)
        const checkstr = e.currentTarget.id.split('_');
        const checkId = checkstr[1];
        const strikeThroughTodo = document.querySelector('#todo'+checkId);
        let btnSec = document.querySelector('#action'+checkId);
        if(this.checked){
            strikeThroughTodo.classList.add('line-through', 'decoration-[#E21717]');
            btnSec.style.display = 'none'
        }else{
            strikeThroughTodo.classList.remove('line-through', 'decoration-[#E21717]')
            btnSec.style.display = 'block'
        }
        
    }

