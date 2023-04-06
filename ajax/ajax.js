function loaddata() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("demo").innerHTML=this.responseText
        }
    }

    xhttp.open('GET',"readme.txt",true);
    xhttp.send();
}