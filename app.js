var counter = 0;


const value = document.querySelector(".value");

const inc_btn = document.getElementById("increase-btn");
const reset_btn = document.getElementById("reset-btn");
const dec_btn = document.getElementById("decrease-btn");

inc_btn.addEventListener("click",function(){
    if(counter==-1){
        counter = 0;
        value.textContent=counter;
        value.style.color="#000000";
    }
    else if(counter>=0){
        counter += 1;
        value.textContent=counter;
        value.style.color="#098D11";
    }
    else{
        counter += 1;
        value.textContent=counter;
        value.style.color="#FF0000";
    }
    
});
reset_btn.addEventListener("click",function(){
    counter = 0;
    value.textContent=counter;
    value.style.color="#000000";
});
dec_btn.addEventListener("click",function(){
    if(counter==1){
        counter = 0;
        value.textContent=counter;
        value.style.color="#000000";
        
    }else if(counter<=0){
        counter -= 1;
        value.textContent=counter;
        value.style.color="#FF0000";
    }else{
        counter -= 1;
        value.textContent=counter;
        value.style.color="#098D11";

    }
});

