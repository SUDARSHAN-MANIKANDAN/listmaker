function assign(){
    let input = document.querySelectorAll("input");
    let d = document.querySelectorAll(".d");
    let m = 0 ; 
    for(let i = 0 ; i < 10 ; i=i+2){
        if(input[i+1].value !== null && input[i].checked){
            d[m].innerHTML = input[i+1].value;
            input[i+1].value = "";
            input[i].checked = false;
            m++;
        }
        
    }
}
function resetnd(){
    let input = document.querySelectorAll("input");
    for(let i = 0 ; i < 10 ; i=i+2){
        
            input[i].checked = false;
            input[i+1].value = "";
    
        }
        
    }


function resetd(){
    let d = document.querySelectorAll(".d");
    for(let i = 0 ; i < 5 ; i++){
        d[i].innerHTML = "";
    }
}