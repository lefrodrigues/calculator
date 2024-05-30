const teclasNum=[...document.querySelectorAll(".num")]
const teclasOp=[...document.querySelectorAll(".op")]
const teclaRes=document.querySelector(".res")
const display=document.querySelector(".display")
const t=document.getElementById("tcopy")
const tlimpar=document.getElementById("tlimpar")
const tigual=document.getElementById("tigual")
const calc_aba=document.getElementById("calc_aba")
const calc=document.getElementById("calc")


let sinal=false
let decimal=false


teclasNum.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal=false
      
          if(evt.target.innerHTML==","){
            if(!decimal){
               decimal=true
               if(display.innerHTML=="0"){
                display.innerHTML="0,"
               }else{
               display.innerHTML+=evt.target.innerHTML
               }
            }   
          }else{
            if(display.innerHTML=="0"){
                display.innerHTML=""
            }
            display.innerHTML+=evt.target.innerHTML
        }
    })
})

teclasOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
       if(!sinal){
          sinal=true
          if(display.innerHTML=="0"){
            display.innerHTML=""
          }
          if(evt.target.innerHTML=="x"){
            display.innerHTML+="*"
          }else{
            display.innerHTML+=evt.target.innerHTML

          }
       }
    })
})

tlimpar.addEventListener("click", (evt)=>{
    sinal=false
    decimal=false
    display.innerHTML="0"
})

tigual.addEventListener("click", (evt)=>{
    sinal=false
    decimal=false
    const res=eval(display.innerHTML)
    display.innerHTML=res
})

tcopy.addEventListener("click", (evt)=>{
  navigator.clipboard.writeText(display.innerHTML)
})

calc_aba.addEventListener("click", (evt)=>{
  calc.classList.toggle("calc_exibir")
})
