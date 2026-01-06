let count = 0;

function markAsDone(todos) {
    //return transform(0, todos, []);
    todos[count] = 'done - ' + todos[count];
    count++;

    if(count < todos.length){

        return markAsDone(todos);
    }else{
        return todos;
    }
}
document.getElementById('result').innerHTML = markAsDone('one', 'two', 'three');