const result =document.getElementById('result');

function cleardata(){
    result.value="";
}

function display(value){
    result.value +=value;   
}

function calculate(){
    if (result.value==""){
        result.value="0";
    }
    else{
        var p = result.value;
    q= eval(p);
    result.value=q;
    }

}