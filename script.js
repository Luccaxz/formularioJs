function enviar() {
    var name = document.getElementById('txtn')
    var email = document.getElementById('txte')
    var msg = document.getElementById('txtm')
    if(name.value == "") {
        window.alert('Preencha seu nome por favor!')
    } else if(email.value == ""){
        window.alert('Preencha seu e-mail por favor!')
    } else if(msg.value == "") {
        window.alert('Por favor digite sua mensagem!')
    }
    else{
        window.alert('Formulário enviado com sucesso, logo entraremos em contato!')
    }
}
