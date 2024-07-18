let m = 0;
function assign(){
    let input = document.querySelectorAll("input");
    let d = document.querySelectorAll(".d");
     
    for(let i = 0 ; i < 20 ; i=i+2){
        if(input[i+1].value !== "" && input[i].checked){
            d[m].innerHTML = input[i+1].value;
            input[i+1].value = "";
            input[i].checked = false;
            m++;
        }
    }
   
        for(let i = 0 ; i < 20 ; i=i+2){

            if(input[i+1].value === "" && input[i].checked === false){
        

                for(let j = i ; j < 20 ; j=j+2){
                    if(input[j+1].value !== ""){
                        input[i+1].value = input[j+1].value;
                        input[j+1].value = "";
                        break;
                    }
                }
                
            }  
        
    }
}

function resetnd(){
    let input = document.querySelectorAll("input");
    for(let i = 0 ; i < 20 ; i=i+2){
        
            input[i].checked = false;
            input[i+1].value = "";
    
        }
        
    }


function resetd(){
    let d = document.querySelectorAll(".d");
    for(let i = 0 ; i < 10 ; i++){
        d[i].innerHTML = "";
    }m = 0 ; 
    
}