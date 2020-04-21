function fnLogin()
{
    var idRef=document.getElementById('txtId');
    var passRef=document.getElementById('txtPwd');

    var id=idRef.value;
    var pwd=passRef.value;
    dataObj={
        "id":id,
        "pwd":pwd
    }
    var httpObj = new XMLHttpRequest();
    httpObj.open('post','http://localhost:2020/users/login');
    httpObj.setRequestHeader('Content-Type','application/json');
    httpObj.send(JSON.stringify(dataObj));
    httpObj.onload =function(){
       var res = httpObj.responseText;
       res=JSON.parse(res);
       if(res.length){
           
           alert('login successful');
           document.getElementById('block').innerHTML = "Login Successfully";
           idRef.value='';
           passRef.value='';
         
       }
    }
    httpObj.onerror = function(){
        document.getElementById('block').innerHTML = "please check your userid and password";
        debugger;
        
    }
}