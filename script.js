let list = document.getElementById('list');


const appendArrToTarget = (arr, target) => {
  let end = arr.length;
  for (let i = 0; i < end; i++) {
    let mesg = arr[i];
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(mesg))
    target.appendChild(li);
  }
}
appendArrToTarget(['thing1', 'thing2'], list);