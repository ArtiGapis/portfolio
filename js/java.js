// alert('eik tu sikti mamuk');

// center.onmouseenter = function(){
//     this.classList.add('col-lg-5');
// };
//
// center.onmouseleave = function(){
//     setTimeout(function(){
//         this.classList.remove('col-lg-5');
//     }.bind(this),1000)
// };

function patirtis() {
    var x = document.getElementById("patirtis");
    var y = document.getElementById("igudziai");
    var z = document.getElementById("issilavinimas");
    var t = document.getElementById("kalbos");
    var u = document.getElementById("motyvacinis");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
        t.style.display = "none";
        u.style.display = "none";

    } else {
        y.style.display = "none";
        z.style.display = "none";
        t.style.display = "none";
        u.style.display = "none";
    }
}
function igudziai() {
    var x = document.getElementById("patirtis");
    var y = document.getElementById("igudziai");
    var z = document.getElementById("issilavinimas");
    var t = document.getElementById("kalbos");
    var u = document.getElementById("motyvacinis");
    if (y.style.display === "none") {
        x.style.display = "none";
        y.style.display = "block";
        z.style.display = "none";
        t.style.display = "none";
        u.style.display = "none";

    } else {
        x.style.display = "none";
        z.style.display = "none";
        t.style.display = "none";
        u.style.display = "none";
    }
}
function issilavinimas() {
    var x = document.getElementById("patirtis");
    var y = document.getElementById("igudziai");
    var z = document.getElementById("issilavinimas");
    var t = document.getElementById("kalbos");
    var u = document.getElementById("motyvacinis");
    if (z.style.display === "none") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
        t.style.display = "none";
        u.style.display = "none";

    } else {
        x.style.display = "none";
        y.style.display = "none";
        t.style.display = "none";
        u.style.display = "none";
    }
}
function kalbos() {
    var x = document.getElementById("patirtis");
    var y = document.getElementById("igudziai");
    var z = document.getElementById("issilavinimas");
    var t = document.getElementById("kalbos");
    var u = document.getElementById("motyvacinis");
    if (t.style.display === "none") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        t.style.display = "block";
        u.style.display = "none";

    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        u.style.display = "none";
    }
}
function motyvacinis() {
    var x = document.getElementById("patirtis");
    var y = document.getElementById("igudziai");
    var z = document.getElementById("issilavinimas");
    var t = document.getElementById("kalbos");
    var u = document.getElementById("motyvacinis");
    if (u.style.display === "none") {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        t.style.display = "none";
        u.style.display = "block";

    } else {
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";
        t.style.display = "none";
    }
}
