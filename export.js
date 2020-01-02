function exportimage(){
  var canvas = document.getElementById('artboard');
  var dataURL = canvas.toDataURL();
  console.log(dataURL);

  //from stackoverflow
  var file_path = dataURL;
  var a = document.createElement('A');
  a.href = file_path;
  a.download = file_path.substr(file_path.lastIndexOf('/') + 1);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
