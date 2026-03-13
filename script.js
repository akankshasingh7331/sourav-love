function checkPassword(){

let pass=document.getElementById("password").value

if(pass==="sourav"){
document.getElementById("passwordPage").style.display="none"
document.getElementById("mainContent").style.display="block"
}

else{
alert("Wrong password 😏")
}

}

function correct(){
document.getElementById("result").innerHTML="Correct answer 😌❤️"
}

function wrong(){
document.getElementById("result").innerHTML="Wrong answer 😏 try again"
}

function love(){
document.getElementById("loveAnswer").innerHTML="I knew it ❤️"
}

function showLove(){
document.getElementById("secret").style.display="block"
}

function openLetter(){
document.getElementById("letter").style.display="block"
}

function closeLetter(){
document.getElementById("letter").style.display="none"
}


setInterval(function(){

let heart=document.createElement("div")

heart.className="heart"

heart.innerHTML="❤️"

heart.style.left=Math.random()*100+"vw"

document.body.appendChild(heart)

setTimeout(()=>heart.remove(),5000)

},500)