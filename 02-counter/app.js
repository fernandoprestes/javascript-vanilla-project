let count = 0

const value = document.querySelector('.value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
  btn.addEventListener('click', event => {
    const styles = event.currentTarget.classList

    if (styles.contains('decrease')) {
      count--
    } else if (styles.contains('increase')) {
      count++
    } else {
      count = 0
    }

    if (count > 0) {
      value.style.color = '#22aa22'
    }
    if (count < 0) {
      value.style.color = '#ee2222'
    }
    if (count === 0) {
      value.style.color = '#222'
    }
    value.textContent = count
  })
})
