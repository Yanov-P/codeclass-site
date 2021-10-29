let title = document.getElementById("myTitle")
let button = document.getElementById("myButton")
let logo = document.getElementById("myLogo")

button.onclick = function(){
    title.style.color = "red"
}

title.onclick = function(){
    title.style.color = "black"
}

logo.onmouseenter = function(){
    logo.style.fontSize = "60px"
} 

logo.onmouseleave = function(){
    logo.style.fontSize = ""
}




