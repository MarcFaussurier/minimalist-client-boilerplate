
files.forEach(element => {
    var dotted = element.split(".");
    var file;

    // create js html link if one
    if (dotted[dotted.length - 1] === "js") {
        var file = document.createElement('script');
        file.setAttribute("type","text/javascript");
        file.setAttribute("src", element)

    } 

    // create css html link if one
    else if (dotted[dotted.length - 1] === "css") {
        var file = document.createElement("link");
        file.setAttribute("rel", "stylesheet");
        file.setAttribute("type", "text/css");
        file.setAttribute("href", element);
    }

    // append element to the dom if one
    if (typeof file !== "undefined") {
        document.getElementsByTagName("head")[0].appendChild(file);
    }
});