function bigger() {
    var textFieldVar = document.getElementById("textarea");
    textFieldVar.style.fontSize = "12pt";
    var idVar = setInterval(function(){
        var size = textFieldVar.style.fontSize;
        size = parseInt(size) + 2;
        textFieldVar.style.fontSize = size+"pt";
        if(size>=24) {
            clearInterval(idVar);
        }
    }, 500);
}

function bling() {
    var box = document.getElementById("bling");
    if(box.checked) {
        document.getElementById("textarea").style.fontWeight = "bold";
        document.getElementById("textarea").style.color = "green";
        document.getElementById("textarea").style.textDecoration = "underline";
    } else {
        document.getElementById("textarea").style.fontWeight = "normal";
        document.getElementById("textarea").style.color = "black";
        document.getElementById("textarea").style.textDecoration = "none";
    }
}