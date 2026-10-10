export function fetchTasks(){
    return new Promise((resolve)=>{                      //to return a promise,no reject cause a real implementation might reject on a simulated failure,caiught by try catch 
    setTimeout(() => {
        resolve([
  { id: 1, title: "Study JavaScript", completed: false },
  { id: 2, title: "Practice DOM", completed: true },
  { id: 3, title: "Read Async Patterns", completed: false }
]);
    }, 1500);
})}
   