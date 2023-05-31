const voteCount = document.querySelectorAll(".vote-count")
const voteBtn = document.querySelectorAll(".vote-btn")
const resetBtn = document.querySelector(".btn-reset")

voteBtn.forEach(function (element) {
  element.addEventListener("click", function () {
    const valueCount = element.nextElementSibling.querySelector(".vote-count")

    let count = valueCount.textContent
    count++
    valueCount.textContent = count
  })
})

voteCount.forEach(function (element) {
  resetBtn.addEventListener("click", function () {
    element.textContent = 0
  })
})
