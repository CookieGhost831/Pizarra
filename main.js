mouse= "empty";
var uPosicionX, uPosicionY;

canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");

color = "blue"
anchoDeLinea = 9;

a_pantalla=screen.width;
n_ancho_pantalla=screen.width - 70;
n_alto_pantalla=screen.height - 300;


canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    mouse = "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    PosicionActualX = e.clientX - canvas.offsetLeft;
    PosicionActualY = e.clientY - canvas.offsetTop;

    if(mouse == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = anchoDeLinea;
        console.log (
            "Ultima Posicion y cordenadas=("+uPosicionX+","+uPosicionY+")");

            ctx.moveTo(uPosicionX, uPosicionY);
            console.log("posición actual de las cordenadas =("+PosicionActualX+","+PosicionActualY+")"
            );

            ctx.lineTo(PosicionActualX,PosicionActualY);
            ctx.stroke();
    }
    uPosicionX = PosicionActualX;
    uPosicionY = PosicionActualY;

}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e)

{
mouse = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e)
{
    mouse = "mouseleave";
}

if (a_pantalla < 992)
{
document.getElementById("MyCanvas").width=n_ancho_pantalla

document.getElementById("MyCanvas").height=n_alto_pantalla;

document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart",my_touchstart);

function my_touchstart(e)
{
    console.log("my_touchstart")

    PosicionActualX = e.touches [0].
    clientX-canvas.offsetLeft

    PosicionActualY = e.touches [0].
    clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e)
{
PosicionActualX= e.touches[0].
clientX - canvas.offsetLeft;

PosicionActualY = e.touches[0].
clientY - canvas.offsetTop;

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = anchoDeLinea;

console.log("Ultima Posicion y cordenadas0(" + uPosicionX + "," + uPosicionY + ")" );

ctx.moveTo(uPosicionX, uPosicionY);

console.log("posición actual de las cordenadas =(" +  PosicionActualX + ","
+ PosicionActualY + ")"
);

ctx.lineTo(PosicionActualX, PosicionActualY);
ctx.stroke();

uPosicionX = PosicionActualX;
uPosicionY = PosicionActualY;

}