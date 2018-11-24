var indeksSlike = 1;

function prethodna() {
    if ( indeksSlike == 1 ){
        indeksSlike = 4;
    } else {
        indeksSlike--;
    }
    document.getElementById('car').src = 'img/car' + indeksSlike + '.jpg'; // jedna fotka je png
}


function sledeca() {
    if (indeksSlike == 4) {
        indeksSlike = 1;
    } else {
        indeksSlike++;
    }
    document.getElementById('car').src = 'img/car' + indeksSlike + '.jpg';
}




