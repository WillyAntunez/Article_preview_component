const shareButton = document.getElementById('shareButton');
const cardShareMenu = document.getElementById('cardShareMenu');


window.addEventListener('click', (e) => {
    if(e.target != shareButton && e.target.parentElement != shareButton && e.target.parentElement.parentElement != shareButton){
        cardShareMenu.classList.add('hidden');
        shareButton.classList.remove('active');
    }else{
        cardShareMenu.classList.toggle('hidden');
        shareButton.classList.toggle('active');
    }
});
