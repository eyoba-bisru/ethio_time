const inputEnAm = document.querySelector(".entoam .en input")
const outputEnAm = document.querySelector(".entoam .am input")
const changeButtonEnAm = document.querySelector(".entoam button")

const amharicAmPms = ['ከሌሊቱ', 'ከጠዋቱ', 'ከሰአት', 'ከምሽቱ']

changeButtonEnAm.addEventListener('click', () => {
    let inputValue = parseInt(inputEnAm.value.substring(0, 2))
    const index = Math.floor(inputValue / 6)
    const amharicAmPm = amharicAmPms[index]

    if (index === 0) {
        inputValue += 6
    } else if (index === 1) {
        inputValue -= 6
    } else if (index === 2) {
        inputValue -= 6
    } else {
        inputValue
    }


    outputEnAm.value = amharicAmPm + " " + inputValue + inputEnAm.value.substring(2)

})