class Task{
    constructor(id,title,completed){
        Object.defineProperty(this,'id',{
            value:id,
            writable:false,
            configurable:false,
        });
        this.title=title;
        this.completed=completed;
    }
    toggle(){
        return (new Task,comleted=true);
    }
}

class TaskManager{
   Task=[tasks];

    setTasks(tasks){
        this.tasks=[...tasks];
    }
    addTask(task){
        tasks=[...tasks,task];
    }
    removeTask(taskId){
        tasks.filter(t=>{t.id===taskId?taskId.removeTask():taskId});
    }
    toggleTask(taskId){
        tasks.filter(t=>{t.id===taskId?t.complete=true:t.complete=false});
    }
} 