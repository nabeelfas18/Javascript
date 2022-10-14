function hi(){
    
    var checkclass=document.querySelectorAll(".fruit");
    var checkid=document.querySelector("#check");
    if(checkid.checked==true)
    {
        checkclass.forEach((element )=> {
            element.checked=true;
        });
    }
        
    
    else{
        checkclass.forEach(element => {
            element.checked=false;
        });
        
        
    }
}