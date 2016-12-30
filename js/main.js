window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    // Sample code
    var mainPage = document.querySelector('#main');

    mainPage.addEventListener("click", function() {
        var contentText = document.querySelector('#content-text');

        contentText.innerHTML = (contentText.innerHTML === "Basic") ? "Tizen" : "Basic";
    });
};
var init2 = function() {
    this.ParserT = ParserT;

    console.log("init() called");
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
    if (ParserT.init()) {
        ParserT.dataReceivedCallback = function() {
            var i;
            for (i = 0; i < DataT.getNomCount(); i++) {
                // alert(Data.getImages());
//+ DataT.getNom(i)
                $("#datasT")
                        .append(
                                "<fieldset class='fieldClass'><legend><div id='titre' ><h2>"
                                        
                                        + "</h2></div></legend><br><img id='image2' src="
                                        + DataT.getImages(i)
                                        + "></img><br><div id  ='contenu'>"
                                        + DataT.getPrenom(i)
                                        + "</div><br><fieldset>");
            }
        };
        ParserT.fetchDatas();
    } else {
        alert("Failed to initialise");
    }

};

$(document).bind('pageinit', init2);