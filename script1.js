let toggle = document.getElementById("colorChange");
let div = document.getElementsByTagName('div')[0];
toggle.addEventListener("click", function(){
    let currentColor=div.style.backgroundColor;

    if(currentColor==="yellow"){
        div.style.backgroundColor="red";
    }else if(currentColor==="red"){
        div.style.backgroundColor="green";
    }
});

let initialState = document.getElementById("resrt");
initialState.addEventListener("click", function(){
    div.style.backgroundColor="yellow";
})