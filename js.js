let count =document.getElementById("counter")
let munice=0

function save(){
    munice = munice -1
    count.innerText=munice
}
function incrementCount(){
    munice = munice +1
    count.innerText = munice
}
function addText(value){
    let screeng = document.getElementById("screen")
    let change = screeng.textContent
    let newChange = change +" "+ value; 
    screeng.textContent = newChange;
}

