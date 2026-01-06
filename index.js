let count = 0;

function markAsDone(todos) {
    //return transform(0, todos, []);
    count++;
    
    if(count < todos.length){
    todos[count] = 'done - ' + todos[count];
        return markAsDone(todos);
    }else{
        return todos;
    }
}
document.getElementById('result').innerHTML = markAsDone('one', 'two', 'three');