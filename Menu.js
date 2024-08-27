var select = document.getElementById("select")
var selecttext = document.getElementById("selecttext")
var arrow = document.getElementById("arrow")
var list = document.getElementById("menu")
var options = document.getElementsByClassName("options")


select.onclick = function(){
    list.classList.toggle("hide")
    arrow.classList.toggle("rotate")
}

for(option of options){
    option.onclick = function(){
        selecttext.innerHTML = this.textContent
        list.classList.toggle("hide")
        arrow.classList.toggle("rotate")
    }
    
}

