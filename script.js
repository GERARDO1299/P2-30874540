const display= document.querySelector("#display");
const display= document.querySelectorAll("button");


buttons.forEach((btn) => {
    btn.addEventlistener("click",() => {
      if (btn.id === "=")(
         display.value = eval(display.value) ; 
      )  else if (btn === "ac"){
        display.value "";
      } else if (btn.id == "de"){
        display.value = display.value.slice(0, -1);
      } else{
        display.value += btn.id
      }  
    })
});