function gerarQrCode() {
    let text = document.getElementById("user").value;
    if(text === ''){
        alert('Por favor, insira algum texto');
        return;        
    }
    let qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${text}`;
    let imgElement = document.createElement('img');
    imgElement.src = qrCodeUrl;
    imgElement.height = 200;
    imgElement.width = 200;
    document.getElementById('qrcode').innerHTML = '';
    document.getElementById('qrcode').appendChild(imgElement);
    
    document.getElementById("reload").style.display = 'block'
}

document.getElementById("user").addEventListener("keypress", function(){
    if(event.key === "Enter")
        gerarQrCode();
});

function reload(){
    location.reload();
}
