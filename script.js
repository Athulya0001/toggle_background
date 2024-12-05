document.getElementById("colorChange").addEventListener("click",function(){
    let currentColor=document.body.style.backgroundColor;

    if(currentColor==="yellow"){
        document.body.style.backgroundColor="red";
    }else if(currentColor==="red"){
        document.body.style.backgroundColor="green";
    }
});

document.getElementById("reset").addEventListener("click",function(){
    document.body.style.backgroundColor="yellow";
});