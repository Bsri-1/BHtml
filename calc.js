let fnum="";
let snum="";
let operator="";

function appendnumber(num){
    if(operator==""){
        fnum+=num;
        document.getElementById("txt").value=fnum;
    }
    else{
        snum+=num;
        document.getElementById("txt").value=fnum+""+operator+""+snum;
    }
} 

function setOperator(op){
    operator=op;
    document.getElementById("txt").value=fnum+""+operator; 
}
let result="";
function calculateresult(){
    switch(operator){
        case "+":
            result=parseInt(fnum)+parseInt(snum);
            break;

        case "-":
            result=parseInt(fnum)-parseInt(snum);
            break;

        case "*":
            result=parseInt(fnum)*parseInt(snum);
            break;

        case "/":
            result=parseInt(fnum)/(parseInt(snum));
            break;
    }
    document.getElementById("txt").value=result;
}

function clearscr(){
    fnum="";
    snum="";
    operator="";
    result="";
    document.getElementById("txt").value="";
}
