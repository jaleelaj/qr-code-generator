
  var qrcode = new QRCode(document.querySelector(".qrcode"));
  qrcode.makeCode("enter url and then scan me ");
  
  function generateQr() {
    var inputText = document.querySelector("input").value;
    qrcode.makeCode(inputText);
  }

