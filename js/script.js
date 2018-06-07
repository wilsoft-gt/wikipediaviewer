function seach(){
    document.getElementById("searchtools").classList.remove("margintop");
    var tosearch = document.getElementById("toseach").value;
    var languaje = document.getElementById("languajes").value;
    document.getElementById("jsontext").innerHTML = "<div></div>";
    $.getJSON("https://"+languaje+".wikipedia.org//w/api.php?action=opensearch&format=json&search=" + encodeURI(tosearch) + "&origin=*&limit=25", function (json) {
        var jsonlenght = Object.keys(json).length;
        var keyslenght = Object.keys(json[1]).length;
        console.log(JSON.stringify(json))
        var html = "";
        for (var i = 1; i < keyslenght; i++){
            html = "<div class='item'>";
            for (var j = 1; j < jsonlenght; j++){
                switch (j) {
                    case 1:
                        html += "<strong>" + json[j][i] + "</strong><br>";
                        break;
                    case 2:
                        html += json[j][i] + "<br>";
                        break;
                    case 3:
                        html = "<a href='" + json[j][i] + "' target='_blank'>" + html;
                        break;
                }
            }
            html += "</div></a><br>";
            document.getElementById("jsontext").innerHTML += html;
        }
    });
}

function evaluar(event) {
    if (event.keyCode == 13){
        seach();
    }
}

function clearSearch() {
    if (document.getElementById("searchtools").classList.contains("margintop")){

    } else {

        document.getElementById("jsontext").innerHTML = "";
        document.getElementById("searchtools").classList.add("margintop");
        document.getElementById("toseach").value = "";
    }

}