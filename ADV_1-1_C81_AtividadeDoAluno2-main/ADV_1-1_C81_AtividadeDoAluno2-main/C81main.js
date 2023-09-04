canvas=document.getElementById("myCanvas")
caneta=canvas.getContext("2d")
mouseEvent="empty"
var lastPositionX,lastPositionY
color="red"
larguraLinha=1
canvas.addEventListener("mousedown",myMouseDown)
function myMouseDown(e){
    mouseEvent="mouseDown"
    console.log(mouseEvent)
}
canvas.addEventListener("mouseup",myMouseUp)
function myMouseUp(e){
    mouseEvent="mouseUp"
    console.log(mouseEvent)
}

canvas.addEventListener("mouseleave",myMouseLeave)
function myMouseLeave(e){
    mouseEvent="mouseLeave"
    console.log(mouseEvent)
}
canvas.addEventListener("mousemove",myMouseMove)
function myMouseMove(e){
    PositionMouseX=e.clientX-canvas.offsetLeft
    PositionMouseY=e.clientY-canvas.offsetTop
    if(mouseEvent=="mouseDown"){
        color=document.getElementById("cor").value
        caneta.beginPath()
        caneta.strokeStyle=color
        larguraLinha=document.getElementById("largura").value
        caneta.lineWidth=larguraLinha
        caneta.moveTo(lastPositionX,lastPositionY)
        caneta.lineTo(PositionMouseX,PositionMouseY)
        caneta.stroke()

    }
    lastPositionY=PositionMouseY
    lastPositionX=PositionMouseX
    console.log(mouseEvent)
}
function Limpar(){
   caneta.clearRect(0,0,800,600)
   console.log("limpando")
}
