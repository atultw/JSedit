//ATULYA WEISE, OWN WORK 2020
//READ LICENSE AGREEMENT

function setdimensions(){
  if (confirm("This will remove all objects from the artboard. Proceed?")) {
    width = document.getElementById("artboard-width").value;
    height = document.getElementById("artboard-height").value;
    artboard = document.getElementById("artboard");
    artboard.setAttribute("width", width);
    artboard.setAttribute("height", height);
  } else {
    console.log("operation canceled by user")
  }

}

function line(){
  var xin = document.getElementById("line-xin").value;
  var yin = document.getElementById("line-yin").value;
  var linx = document.getElementById("line-linx").value;
  var liny = document.getElementById("line-liny").value;
  var stroke_color = document.getElementById("stroke-color").value;
  var thickness = document.getElementById("border-weight").value;

  var artboard = document.getElementById("artboard");
  var ctx = artboard.getContext("2d");
  ctx.moveTo(xin, yin);
  ctx.lineTo(linx, liny);
  ctx.lineWidth = thickness;
  ctx.strokeStyle = stroke_color;
  ctx.stroke();
}

function rect(){
  var xin = document.getElementById("rect-xin").value;
  var yin = document.getElementById("rect-yin").value;
  var rectx = document.getElementById("rectx").value;
  var recty = document.getElementById("recty").value;
  var stroke_color = document.getElementById("stroke-color").value;
  var thickness = document.getElementById("border-weight").value;

  var artboard = document.getElementById("artboard");
  var ctx = artboard.getContext("2d");
  var fill_color = document.getElementById("fill-color").value;
  ctx.lineWidth = thickness;
  ctx.fillStyle = fill_color;
  ctx.strokeStyle = stroke_color;
  ctx.rect(xin, yin, rectx, recty);
  ctx.stroke();
  ctx.fill();
}

function circle(){
  var xin = document.getElementById("circle-xin").value;
  var yin = document.getElementById("circle-yin").value;
  var radius = document.getElementById("circle-radius").value;
  var thickness = document.getElementById("border-weight").value;
  var stroke_color = document.getElementById("stroke-color").value;
  var fill_color = document.getElementById("fill-color").value;

  var artboard = document.getElementById("artboard");
  var ctx = artboard.getContext("2d");
  ctx.fillStyle = fill_color;
  ctx.lineWidth = thickness;
  ctx.strokeStyle = stroke_color;
  ctx.beginPath();
  ctx.arc(xin, yin, radius, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fill();
}

function text(){
  var xin = document.getElementById("text-xin").value;
  var yin = document.getElementById("text-yin").value;
  var size = document.getElementById("text-size").value;
  var font = document.getElementById("text-font").value;
  var text = document.getElementById("text-text").value;
  var thickness = document.getElementById("border-weight").value;
  var stroke_color = document.getElementById("stroke-color").value;
  var fill_color = document.getElementById("fill-color").value;

  var artboard = document.getElementById("artboard");
  var ctx = artboard.getContext("2d");
  ctx.font = size + "px " + font;
  ctx.lineWidth = thickness;
  ctx.strokeStyle = stroke_color;
  ctx.fillStyle = fill_color;
  ctx.strokeText(text, xin, yin);
  ctx.fillText(text, xin, yin);
}

function pic(){
  var xin = document.getElementById("pic-xin").value;
  var yin = document.getElementById("pic-yin").value;
  var picwidth = document.getElementById("pic-width").value;
  var picsrc = document.getElementById("tempimg");
  // DEBUG:
  console.log(picsrc);
  var artboard = document.getElementById("artboard");
  var ctx = artboard.getContext("2d");
  ctx.drawImage(picsrc, xin, yin);
}
