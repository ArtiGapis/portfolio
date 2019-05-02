
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

    $('#animate_1').hide(500);
    $('#animate_2').hide(500);
    $('#animate_3').hide(500);
    $('#animate_4').hide(500);
    $('#animate_5').hide(500);
    $('#animate_6').hide(500);
    $('#animate_7').hide(500);
    $('#animate_8').hide(500);
    $('#animate_9').hide(500);

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



function makeEaseOut(timing) {
    return function(timeFraction) {
        return 1 - timing(1 - timeFraction);
    }
}

function bounce(timeFraction) {
    for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
    }
}

let bounceEaseOut = makeEaseOut(bounce);

birds_anime.onclick = function() {
    animate({
        duration: 3000,
        timing: bounceEaseOut,
        draw: async function (progress) {
            $('#animate_1').show(500);
            animate_1.style.height = progress * 40 + 'px';
            animate_1.style.width = progress * 200 + 'px';
            animate_1.style.top = progress * 250 + 'px';
            animate_1.style.fontSize = progress * 20 + 'px';

            await new Promise(resolve => setTimeout(resolve, 3000));
            $('#animate_2').show(500);
            animate_2.style.height = progress * 40 + 'px';
            animate_2.style.width = progress * 200 + 'px';
            animate_2.style.top = progress * 300 + 'px';
            animate_2.style.fontSize = progress * 20 + 'px';

            await new Promise(resolve => setTimeout(resolve, 2000));
            $('#animate_3').show(500);
            animate_3.style.height = progress * 40 + 'px';
            animate_3.style.width = progress * 200 + 'px';
            animate_3.style.top = progress * 350 + 'px';
            animate_3.style.fontSize = progress * 20 + 'px';

            await new Promise(resolve => setTimeout(resolve, 2500));
            $('#animate_4').show(500);
            animate_4.style.height = progress * 40 + 'px';
            animate_4.style.width = progress * 200 + 'px';
            animate_4.style.top = progress * 250 + 'px';
            animate_4.style.fontSize = progress * 20 + 'px';

            await new Promise(resolve => setTimeout(resolve, 2000));
            $('#animate_5').show(500);
            animate_5.style.height = progress * 40 + 'px';
            animate_5.style.width = progress * 200 + 'px';
            animate_5.style.top = progress * 300 + 'px';
            animate_5.style.fontSize = progress * 20 + 'px';

            await new Promise(resolve => setTimeout(resolve, 5000));
            $('#animate_6').show(500);
            animate_6.style.height = progress * 40 + 'px';
            animate_6.style.width = progress * 200 + 'px';
            animate_6.style.top = progress * 350 + 'px';
            animate_6.style.fontSize = progress * 20 + 'px';

            await new Promise(resolve => setTimeout(resolve, 1000));
            $('#animate_7').show(500);
            animate_7.style.height = progress * 40 + 'px';
            animate_7.style.width = progress * 200 + 'px';
            animate_7.style.top = progress * 250 + 'px';
            animate_7.style.fontSize = progress * 20 + 'px';

            await new Promise(resolve => setTimeout(resolve, 3000));
            $('#animate_8').show(500);
            animate_8.style.height = progress * 40 + 'px';
            animate_8.style.width = progress * 200 + 'px';
            animate_8.style.top = progress * 300 + 'px';
            animate_8.style.fontSize = progress * 20 + 'px';

            await new Promise(resolve => setTimeout(resolve, 2500));
            $('#animate_9').show(500);
            animate_9.style.height = progress * 40 + 'px';
            animate_9.style.width = progress * 200 + 'px';
            animate_9.style.top = progress * 350 + 'px';
            animate_9.style.fontSize = progress * 20 + 'px';

        }
    });
};