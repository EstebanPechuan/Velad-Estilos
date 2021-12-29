const cards = document.querySelectorAll('.card-veladero')
for (const card of cards) {
    card.addEventListener('click', () => {
        for (const i of cards) {
            i.classList.remove('card-active')
        }
        card.classList.add('card-active')
    })
}