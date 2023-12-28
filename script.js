function generateQr(){
    let imgBox = document.getElementById("imgBox");
    let qrText = document.getElementById("qrText"); 
    const qrImage = document.getElementById("qrImage");
    if(qrText.value){
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    }
    else{
        qrImage.remove()
    }
}