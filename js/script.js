`use strict`

const butttonsnumbers = document.querySelectorAll(`.nunber`),
      display = document.querySelector(`.calculator_display`),
      cleaner = document.querySelector(`.cleaner`),
      plus = document.querySelector(`.plus`),
      equals = document.querySelector(`.equals`),
      minus = document.querySelector(`.minus`),
      multiply = document.querySelector(`.multiply`),
      split = document.querySelector(`.split`);
let result = 0,
    flag = 0;
display.textContent = `0`;

cleaner.addEventListener(`click`,()=>{
    flag = 0;
    displ =0;
    display.textContent = `${displ}`;
    result = 0;
    numberinput(0,0);
});


function numberinput(first=0,flag){
    console.log(first,flag);
    let displ = 0;
    butttonsnumbers.forEach((item,index) => {
        item.addEventListener(`click`, () =>{
            if(displ == 0) {
                if((index+1) === 10) {
                    displ = 0;
                    display.textContent = `${displ}`;
                }else{
                    displ = index+1;
                    display.textContent = `${displ}`;
                }
            }else{
                if((index+1) === 10) {
                    displ = `${displ}`+ 0;
                    display.textContent = `${displ}`;
                }else{
                    displ = `${displ}`+ (index+1);
                    display.textContent = `${displ}`;
                }
            }       
        });
    });
   
    plus.addEventListener(`click`,()=>{
        if(flag
            ){
            numberinput(calculation(flag,first,displ),1); 
        }else{
        numberinput(displ,1);}
        console.log(flag);
    });
    minus.addEventListener(`click`,()=>{
        if(flag){
            numberinput(calculation(flag,first,displ),2); 
        }else{
        numberinput(displ,2);}
    });
    multiply.addEventListener(`click`,()=>{
        if(flag){
            numberinput(calculation(flag,first,displ),3); 
        }else{
        numberinput(displ,3);}
    });
    split.addEventListener(`click`,()=>{
        if(flag){
            numberinput(calculation(flag,first,displ),4); 
        }else{
        numberinput(displ,4);}
    });      
    equals.addEventListener(`click`,()=>{
        result = calculation(flag,first,displ); 
        if((result+``).length > 43) {
            result = `Ваши запросы слишком амбициозны`;
        }
        display.textContent = `${result}`;
    });
}

function calculation(flag,first,displ) {
    if(flag === 1){
        result = +first+(+displ);
    }
    if(flag === 2){
        
        result = +first-(+displ);
    }
    if(flag === 3){
       
        result = +first*(+displ);
    }
    if(flag === 4){
       
        if(+displ==0){
            result = `На ноль делить глупо`;
        }else{
            result = +first / (+displ);
        }            
    }
   
    return result; 
}

numberinput();