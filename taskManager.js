//Task CLASS
export class Task{
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

//managerTask CLASS
export class TaskManager{
    constructor(tasks){this.tasks=[];}

    setTasks(tasks){
        this.tasks=[...tasks];
    }
    addTask(task){
        this.tasks=[...this.tasks,task];
    }
    removeTask(taskId){
        this.tasks=this.tasks.filter(t=>t.id!==taskId);
    }
    toggleTask(taskId){
        this.task=this.tasks.map(t=>t.id===taskId? t.toggle():t);
    }
} 
