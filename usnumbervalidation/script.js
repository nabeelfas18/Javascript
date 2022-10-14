function phonenumber()
{
    
  var a=  document.getElementById("phone").value;
  if(a.length==3||a.length==7)
  {
    
  document.getElementById("phone").value=a+"-";
  }

}