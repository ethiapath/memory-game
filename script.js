let list = document.getElementById('list');


const addArrToList = arr => {
  let end = arr.length;
  for (let i = 0; i < end; i++) {
    let mesg = arr[i];
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(mesg))
    list.appendChild(li);
  }
}

addArrToList([
  'bob',
  'Rob',
  'John doe'
]);
