let add = document.getElementById('Inc');
let remove = document.getElementById('Dec');

let int = document.getElementById('number');
let buffer = 0;

add.addEventListener('click',function(){
    buffer +=1;
    int.innerHTML = buffer;

})

remove.addEventListener('click',function(){
    buffer -=1;
    int.innerHTML = buffer;
})

