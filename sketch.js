





var resultado;
var ax,ay;
var x,y;
var mitadW,mitadH
var Rebanadas,Partir 





function setup() 
{
	
  createCanvas(windowWidth, windowHeight);
  mitadW=windowWidth/2
  mitadH=windowHeight/2
}

function partirPizza()
{

  Partir=document.getElementById("input-number").value;
  Rebanadas = parseInt(Partir);


  if(Rebanadas>1)
 
  {

   
    let radio=75;
    let grados=360/Rebanadas
    let auxiliar=grados;

	let xCentroP1 = 200
	let xCentroP2= mitadW
	let xCentroP3 = windowWidth-200

	let yCentro = 100

	

	// (xCentro, yCentro, x2, y2) //
	draw()

    while(grados<=360)

    {
     
      
      let x2=radio*Math.cos(grados* Math.PI / 180)
      let y2=radio*Math.sin(grados * Math.PI / 180)


	  let x2P1=xCentroP1+x2;
	  let x2P2 = xCentroP2 + x2
	  let x2P3 = xCentroP3 + x2;
	  y2=yCentro+y2;
	  
	  x2P1=floor(x2P1)
	  x2P2=floor(x2P2)
	  x2P3 = floor(x2P3)
	  y2=floor(y2)

      
      


	  ecuacionPuntoPendiente(xCentroP1,yCentro,x2P1,y2);
	  ecuacionPuntoPendiente(xCentroP1,yCentro,x2P1,y2);
	  ecuacionPuntoPendiente(xCentroP1,yCentro,x2P1,y2);
	  AlgoritmoBresenham(xCentroP3,yCentro,x2P3,y2)
	  AlgoritmoDDA(xCentroP2,yCentro,x2P2,y2)
        

      grados+=auxiliar;

    } 



  }



}

function AlgoritmoDDA(x1, y1, x2, y2) {

  let dx=x2-x1
  let dy=y2-y1

  let limite
  if(Math.abs(dx)>Math.abs(dy))
    limite=Math.abs(dx)
  else
    limite=Math.abs(dy)

  let xi=dx/limite
  let yi=dy/limite

  let x=x1
  let y= y1
  
  for(let i=0;i<limite;i++)
  {
    point(x, y)
    x+=xi
    y+=yi
  }

  
  }

  
  

function draw() {  
  
  ellipseMode(CENTER)
  fill(color( 114, 104, 212 ))

  ellipse(200,100,150,150)
  ellipse(mitadW, 100, 150, 150)
  ellipse(windowWidth-200,100,150,150)
  noLoop()
 

}


// Enteros //
function AlgoritmoBresenham(x1, y1, x2, y2) {

  // Para guardar en x/y //
  let pY
  let pX
  

  // Algoritmo Bresenham //
	let x
	let y
	let p
	let incE
	let incNE

	let dx = x2 - x1
	let dy = y2 - y1


  // donde empieza el punto //
	if(dy < 0) {
		dy = -dy
		pY = -1
	}else{
		pY = 1
	}

	if(dx < 0) {
		dx = -dx
		pX = -1
	}else{
		pX = 1
	}

	x = x1
	y = y1
	
	point(x,y)


	//   la linea se dibuja   //
	if(dx > dy) {
		
		
		p = 2 * dy - dx
		incE = 2 * dy
		incNE = 2 * (dy - dx)

		while(x != x2) {
			x += pX

			if(p < 0) {
				p += incE
			}else {
				y += pY
				p += incNE
			}

			point(x,y)
		}
	
	}else{
		
		p = 2 * dx - dy
		incE = 2 * dx
		incNE = 2 * (dx - dy)

		while(y != y2) {
			y += pY

			if(p < 0) {
				p += incE
			}else {
				x += pX
				p += incNE
			}

			point(x,y)


	}
	
  }
}


function ecuacionPuntoPendiente(x1,y1,x2,y2){


	if(x2<x1)
	{
		let aux=x2;
		x2=x1;
		x1=aux

		aux = y2
		y2=y1
		y1=aux
	}

	const dx = x2 - x1
	const dy = y2 - y1

	const m = dy / dx
	const b = y1 - (m * x1)

	
	point( x1, y1 )

	


	if(x1===x2){
	
		if(y1>y2)
		{
			let aux=y1;
			y1=y2;
			y2=aux
		}
		let y = y1 + 1
		while(y!=y2)
		{
			point(x1,y)
			y++
		}

	}
	else{

		
		
		let x = x1+ 1
		let y = m * x + b
		
		while(x !=x2){
			y = m * x + b
			y = floor(y)
			point(x, y)
			x++
		}
  }
  
	

}