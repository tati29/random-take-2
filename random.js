var namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
    makeRect(0,0,200,100,"lightblue",1)
    makeRect(50, 20, 50, 70, "yellow",1) 
    makeRect(50, 70, 50, 20, "brown",1)
    makeRect(50, 80, 5, 2, "black",1)
    makeRect(60, 80, 5, 2, "black",1)
    makeRect(70, 80, 5, 2, "black",1)
    makeRect(80, 80, 5, 2, "black",1)
    makeRect(90, 80, 5, 2, "black",1)
    makeRect(50, 70, 50, 5, "white",1)
    makeEllipse(68, 35, 8, 8, "black",1)
    makeEllipse(82, 35, 8, 8, "black",1) 
    makeEllipse(68, 35, 7.5, 7.5, "white",1)
    makeEllipse(82, 35, 7.5, 7.5, "white",1) 
    makeEllipse(82, 35, 2, 2, "blue",1)
    makeEllipse(68, 35, 2, 2, "blue",1)
    makeEllipse(82, 35, 1, 1, "black",1)
    makeEllipse(68, 35, 1, 1, "black",1)
    makeLine(90, 50 , 60 ,50, "black", 1)
    makeRect(69, 50.5, 5.5, 5.5, "black",1)
    makeRect(75, 50.5, 5.5, 5.5, "black",1)
    makeRect(69 , 50.5, 5, 5, "white",1)
    makeRect(75, 50.5, 5, 5, "white",1)
    makeText("spongebob", 20, 30, 5, "sans-serif", "black",1)
        var number = Math.random()
    if(number < 0.5){
        makeText("boobsponge",20,80) 
    }else{
        makeText("spongebob",20,80)
    }
}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
 makeImage("http://i.huffpost.com/gen/2348106/images/o-STEPHEN-CURRY-facebook.jpg",0,0,200,100)
 makeCircle(80,45,7,"orange",1)
makeImage("http://www.rainbownew.com/images/products/hoops/heavydutyflexrim.png",0, 0, 50,50)
makeText("Stephen Curry", 20,60,10,"@import url('https://fonts.googleapis.com/css?family=Lato');","white",1)
    var number = Math.random()
    if(number < 0.5){
        makeText("my boi steven curry",50,50) 
    }else{
        makeText("stephen curry",50,50,"white")
    }
}
// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
makeRect(0,0,200,100,"pink")
makeEllipse(50,50,7,20,"green",1)
makeCircle(50,40,3,"yellow")
makeCircle(50,40,1,"red")
makeText("plankton",20,60,10,"@import url('https://fonts.googleapis.com/css?family=Raleway');" )
    var number = Math.random()
    if(number < 0.5){
        makeText("my boi steven curry",50,50) 
    }else{
        makeText("plankton",50,50,"white")
    }
}





// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var number=Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
    if(number < 0.33){
    createFirstScene()
    }else if(number < 0.67){
    createSecondScene()
    }else{
    createThirdScene()
    }
    
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
    
    
    
    // Else, call the function to create your third scene.
    
    
    
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}