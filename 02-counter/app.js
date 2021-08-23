const value = document.querySelector('.value')
const btns = document.querySelectorAll('.btn')

let count = 0

btns.forEach(function (btn) {
  btn.addEventListener('click', event => {
    const styles = event.currentTarget.classList
    if (styles.contains('increase')) count++
    if (styles.contains('reset')) count = 0
    if (styles.contains('decrease')) count--
    if (count > 0) value.style.color = '#22aa22'
    if (count === 0) value.style.color = '#222'
    if (count < 0) value.style.color = '#ee2222'
    value.textContent = count
  })
})
