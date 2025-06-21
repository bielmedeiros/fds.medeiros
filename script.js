function mostrarMensagem() {
    const divMensagem = document.getElementById("mensagem");
    if (divMensagem.style.display === "block") {
        divMensagem.style.display = "none";
    } else {
        divMensagem.style.display = "block";
        divMensagem.innerHTML = "🌟 Nunca desista dos seus sonhos! Você é capaz de conquistar coisas incríveis. 🚀";
    }
}