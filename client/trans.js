function  fnGetCustInfo(){
    var acnoRef=document.getElementById('acno');
var acno=acnoRef.value;

var reqObj={
    "acno":acno
}
var httpObj = new XMLHttpRequest();
httpObj.open('post','http://localhost:2020/users/get-cust-info');
httpObj.setRequestHeader('Content-Type','application/json');
httpObj.send(JSON.stringify(reqObj));
httpObj.onload =function(){
   var res = httpObj.responseText;
   
   var divRef=document.getElementById('trans-content');
   res=JSON.parse(res);
  if(res.length>0)
  {
      var custInfo=res[0];
      document.getElementById('cust-name').innerText=custInfo.name;
      divRef.classList.remove('disp-none');

  }else{
      divRef.classList.add('disp-none');
      alert('check ur account');
  }
}

}
