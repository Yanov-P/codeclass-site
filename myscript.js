let button = document.getElementById("myButton")
let modal = document.getElementById("modal")

button.onclick = function(){
    button.style.marginLeft = "100px"
    button.style.background = "red"

    button.style.borderRadius = "50px"

    setTimeout(() => {
        modal.style.display = "flex"
    }, 1000);
    setTimeout(() => {
        modal.style.opacity = 1
    }, 1100);
}

modal.onclick = function(event){
    
    button.style.borderRadius = ""
    
    if(event.target == modal){

        button.style.marginLeft = ""
        button.style.background = ""

        modal.style.opacity = 0

        setTimeout(() => {
            modal.style.display = "none"
        }, 1000);

    }
}




