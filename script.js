formulario.addEventListener('submit', function enviarWhats(event) {

    const nome = document.getElementById('nome');
    const mensagem = document.getElementById('mensagem');
    const telefone = '5584981363278'

    const texto = `Olá, Me chamo ${nome.value}. ${mensagem.value}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
    const formulario = document.getElementById('formulario');
    
    event.preventDefault();
    window.open(url, '_blank');
});