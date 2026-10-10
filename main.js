import { fetchTasks } from './api.js';
import { Task, TaskManager } from './taskManager.js';

const taskManager = new TaskManager();
const loadTasksBtn = document.getElementById('loadTasksBtn');
const statusMessage = document.getElementById('statusMessage');
const taskList = document.getElementById('taskList');

async function loadTasks(){
    try{
        const fetch =await fetchTasks();
        todoList.addListener('click',e=>{
            if(e.target.classList.contains('delete_btn')){
                e.target.closest('todo_task').remove();
                render();
            }
            if(e.target.classList.contains('toggle_btn')){
                e.target.closest('todo_task').classList.toggle('complete');
                render();
            }
        });
    }catch(error){
        console.error("Error happend!couldn't fetch the task.");
    }
}

function render(){
    const getTask=document.getElementById('div');
    let title=getTask.id;
    let complete=getTask.toggle();
    let delete=getTask.removeTask();

}

