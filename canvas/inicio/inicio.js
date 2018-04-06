
function app(){
    let canvas = document.querySelector('canvas');
    let c = canvas.getContext('2d');

    c.fillStyle = 'blue';   // Relleno
    c.strokeStyle = 'red';  // Sin relleno

    c.fillRect(100,100,100,100);    // Dibujo un cuadrado con relleno
    c.strokeRect(100,100,100,100);      //  "           "       sin relleno

    c.font = '12px Helvetica';

    c.strokeStyle = 'white'; // Cambiamos el color del relleno.

    c.fillStyle = 'black';
    
    c.strokeText('Hola Canvas',115,150);

    c.fillText('Prueba sin relleno',100,250);


}



window.addEventListener('load', app);