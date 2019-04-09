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
    $('#patirtis').show(500);
    $('#igudziai').hide(500);
    $('#issilavinimas').hide(500);
    $('#kalbos').hide(500);
    $('#motyvacinis').hide(500);
}
function igudziai() {
    $('#patirtis').hide(500);
    $('#igudziai').show(500);
    $('#issilavinimas').hide(500);
    $('#kalbos').hide(500);
    $('#motyvacinis').hide(500);
}
function issilavinimas() {
    $('#patirtis').hide(500);
    $('#igudziai').hide(500);
    $('#issilavinimas').show(500);
    $('#kalbos').hide(500);
    $('#motyvacinis').hide(500);
}
function kalbos() {
    $('#patirtis').hide(500);
    $('#igudziai').hide(500);
    $('#issilavinimas').hide(500);
    $('#kalbos').show(500);
    $('#motyvacinis').hide(500);
}
function motyvacinis() {
    $('#patirtis').hide(500);
    $('#igudziai').hide(500);
    $('#issilavinimas').hide(500);
    $('#kalbos').hide(500);
    $('#motyvacinis').show(500);
}


