var mover = document.getElementById('body')


var lista = ['left top', 'top center', 'top right', 'right center', 'right bottom', 'bottom center', 'left bottom', 'left center']



var index = -1
function btn() {

    
    if (index < lista.length){
        index += 1
        mover.style.backgroundPosition = lista[index].toString()
        
    }else{
        index = -1
    }

    }