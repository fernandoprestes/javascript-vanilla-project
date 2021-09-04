const value = document.querySelector('.value')
const btns = document.querySelectorAll('.btn')

let count = 0

btns.forEach((btn) => {
  btn.addEventListener('click', event => {
    const btnStyle = event.currentTarget.classList
    if (btnStyle.contains('increase')) count++
    if (btnStyle.contains('reset')) count = 0
    if (btnStyle.contains('decrease')) count--
    if (count > 0) value.style.color = '#22aa22'
    if (count === 0) value.style.color = '#222'
    if (count < 0) value.style.color = '#ee2222'
    value.textContent = count
  })
})
