let input = document.getElementById('input')
let addBtn = document.getElementById('addBtn')
let span = document.querySelectorAll('span')
let lis = document.querySelectorAll('li')

let ul = document.getElementById('ul')
let li = document.createElement('li')



addBtn.addEventListener('click', addNew)

ul.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked')
    ;
  } saveData()
});
ul.addEventListener('dblclick', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('delete')
      saveData()
    }
});

ul.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'SPAN') {
    ev.target.parentElement.remove()
    ;
    saveData()
  }
});

function addNew() {
    if(input.value === ''){
        alert('You have to put something there')
    }else{
        let addNew = document.createElement("li");
        addNew.innerHTML = input.value
        ul.appendChild(addNew);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        addNew.appendChild(span)
        
         saveData()
    }
};


function saveData(){
    localStorage.setItem('data', ul.innerHTML)
}
function showData(){
     ul.innerHTML = localStorage.getItem('data')
}
showData()


