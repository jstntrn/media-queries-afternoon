function growAnimation(){
    let growEl = document.getElementById('grow')
    if (growEl.classList.contains('grow-animation')) {
        growEl.classList.remove('grow-animation')
    } else {
        growEl.classList.add('grow-animation')
    }
}