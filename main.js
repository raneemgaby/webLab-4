import { fetchTasks } from './api.js';
import { Task, TaskManager } from './taskManager.js';

const taskManager = new TaskManager();
const loadTasksBtn = document.getElementById('loadTasksBtn');
const statusMessage = document.getElementById('statusMessage');
const taskList = document.getElementById('taskList');

async function loadTasks(){                            //
    try{
        statusMessage.textContent='loading tasks...';
        const fetch =await fetchTasks();               //waiting for the tasks to be fetched from the api.js file
        const jsonString=JSON.stringify(fetch);
        const parsedData=JSON.parse(jsonString);
        const taskInstances=parsedData.map(item=>new Task (item.id,item.title,item.completed));
        taskManager.setTasks(taskInstances);
        statusMessage.textContent='';
        render();
    }
    catch(error){
        console.error("Error happend!couldn't fetch the task.",error);
    }
}

function render(){
    taskList.replaceChildren();          //clear the task list safely before rendering current state,to prevent duplicates and complex structure 
    taskManager.tasks.forEach(tasks=>{   //to add new tasks a loop is required to add each new added task to newly createed container(div) and assign it the task class properities
        const tasksAdded=document.createElement('div');
        tasksAdded.className='task';     //a class to contain the newly-added tasks
        if(tasks.completed){             //toggle the task if done
            tasksAdded.classList.add('completed');       //add a completed class for the completed tasks
        }

        const titleSpan=document.createElement('span');                //displaying the task title
        titleSpan.textContent=tasks.title;

        const toggleBtn=document.createElement('button');
        toggleBtn.textContent=tasks.completed?'Mark incomplete':'toggle complete';
        toggleBtn.addEventListener('click',()=>{                      //toggling a task using the taskManager class
            taskManager.toggleTask(tasks.id);
            render();
        });

        const deleteBtn=document.createElement('Button');            //deleting a task using the taskManager class
        deleteBtn.textContent='Delete';
        deleteBtn.addEventListener('click',()=>{
            taskManager.removeTask(tasks.id);
            render();
        });

        //adding the newly created task and it's properities to the newly ceated container for the new tasks
        tasksAdded.appendChild(titleSpan);                  
        tasksAdded.appendChild(toggleBtn);
        tasksAdded.appendChild(deleteBtn);

        //add the whole new newly-created-tasks container to the task list
        taskList.appendChild(tasksAdded);

    });
}
loadTasksBtn.addEventListener('click',loadTasks)                //to connect the button to javaScript code to fetch and display tasks



