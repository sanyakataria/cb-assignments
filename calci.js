    // const inp=document.getElementById('inp')
    // const main=document.getElementById('main')
    // // main.onclick=function(event){
    // //    inp.value+=event.target.innerText
    // // }
    // main.addEventListener('click',function(event){
    //     inp.value+=event.target.innerText

    // }

    //function that display value 
    function dis(val) 
    { 
        document.getElementById("inp").value+=val 
    } 
      
    //function that evaluates the digit and return result 
    function solve() 
    { 
        let x = document.getElementById("inp").value 
        let y = eval(x) 
        document.getElementById("inp").value = y 
    } 
      
    //function that clear the display 
    function clr() 
    { 
        document.getElementById("clr").value = "" 
    } 