function markAsDone(todos, index = 0, acc = []) {
  if (index >= todos.length) return acc;
  acc.push('done - ' + todos[index]);
  return markAsDone(todos, index + 1, acc);
}

document.getElementById('result').innerHTML = markAsDone(['one', 'two', 'three']).join(' ');