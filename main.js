const timer = document.getElementById("timer");
const time = document.getElementById("time");
const input = document.getElementById("input");
const start = document.getElementById("start");
let   count = 0 ;

//startボタンを押したらtimeの中に経過時間が表示される

start.addEventListener('click' , function(){
    const set_id = setInterval(function(){
        count ++ ;
        time.innerText = count ;
        if(count ==input.value){
            clearInterval(set_id)
        }
    },1000) 
    
}
)


