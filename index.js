function markAsDone(todos) {
    return transform(0, todos, []);
}

function transform(index, todos, modifiedTodos){
    if(index < todos.length){
        index++
        todos[index].unshift('done - ');
        return transform(index, todos, modifiedTodos)
    }else{
        return modifiedTodos
    }
}

document.getElementById('result').innerHTML = markAsDone('one', 'two', 'three');5