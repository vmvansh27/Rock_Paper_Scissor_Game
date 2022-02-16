var choices = ["rock", "paper", "scissor"];

var comp = 0;
var user = 0;
 
function checker(input){
    var randNo = Math.floor(Math.random()*3);
    var randChoice=choices[randNo];

    document.getElementById("comp_choice").
    innerHTML="Computer choose "+randChoice.toUpperCase();

    document.getElementById("user_choice").innerHTML="You Choose "+input.toUpperCase();
    
    var result_ref=document.getElementById("result");

    var result = winCheck(input,randChoice);
    result_ref.innerHTML= result;

    if(result==='You Win')
        result_ref.style.cssText = "background-color: #cefdce; color:#689f38";
    else if(result==='You Lose')
        result_ref.style.cssText = "background-color: #ffdde0; color:#d32f2f";
    else
        result_ref.style.cssText = "background-color: #e5e5e5; color:#808080";


    scoreIncreaser();
}

function winCheck(userInp,compInp){
    if(userInp === compInp){
        return "Draw";
    } else if(userInp =='paper' && compInp=='rock'){
        user++;
        return 'You Win';
    } else if(userInp =='scissor' && compInp=='paper'){
        user++;
        return 'You Win';
    } else if(userInp =='rock' && compInp=='scissor'){
        user++;
        return 'You Win';
    } else if(userInp =='rock' && compInp=='paper'){
        comp++;
        return 'You Lose';
    } else if(userInp =='paper' && compInp=='scissor'){
        comp++;
        return 'You Lose';
    } else if(userInp =='scissor' && compInp=='rock'){
        comp++;
        return 'You Lose';
    }
    
}

function scoreIncreaser(){
    document.getElementById("computer_score").innerHTML=comp;
    document.getElementById("iser_score").innerHTML=user;
}