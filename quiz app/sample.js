i=0
score=0
function res(result){
    if(result=='prime'){
        var ele = document.getElementsByName('prime');
        if(ele[2].checked){
            score+=1
            console.log(score)
        }
        var idd=document.getElementById('q1');
        idd.style.display="none";
        var id2=document.getElementById('q2');
        id2.style.visibility="visible"
    }
    if(result=='prim'){
    var ele = document.getElementsByName('prim');
    if(ele[1].checked){
        score+=1
    }
    var idd2=document.getElementById('q2');
        idd2.style.display="none";
    var id3=document.getElementById('q3');
    id3.style.visibility="visible"
}
if(result=='pri'){
   var ele = document.getElementsByName('pri');
      if(ele[0].checked){
          score+=1
}
var idd=document.getElementById('q3');
        idd.style.display="none";
var id4=document.getElementById('q4');
        id4.style.visibility="visible"
}
if(result=='pr'){
    var ele = document.getElementsByName('pr');
    if(ele[1].checked){
        score+=1
    }
    var idd=document.getElementById('q4');
        idd.style.display="none";
    var id5=document.getElementById('q5');
        id5.style.visibility="visible"
}

if(result=='p'){
    var ele = document.getElementsByName('p');
    if(ele[2].checked){
        score+=1
    }
    displayy();
    }
    
}
function displayy(){
    var idd=document.getElementById('q5');
    idd.style.display="none";
    let e1=document.getElementById('starting');
    e1.style.display="none";
    let e2=document.getElementById("ending")
    e2.style.visibility="visible"
    let e=document.getElementById('score');
    e.innerHTML= "You have completed your quiz and your score is "+score;
    let but=document.getElementById("reload")
    but.style.visibility="visible";
    
}
