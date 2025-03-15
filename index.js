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
        inputValue === 6 ? inputValue += 6 :
            inputValue -= 6
    } else if (index === 2) {
        inputValue -= 6
    } else {
        inputValue === 18 ? inputValue -= 6 :
            inputValue -= 18
    }

    if (isNaN(inputValue)) {
        outputEnAm.value = "በትክክል አስገባ"
    } else {
        outputEnAm.value = amharicAmPm + " " + inputValue + inputEnAm.value.substring(2) + " ሰአት"
    }



})

const inputAmEn = document.querySelector(".amtoen .am input")
const outputAmEn = document.querySelector(".amtoen .en input")
const changeButtonAmEn = document.querySelector(".amtoen button")
const selectAm = document.getElementById("am")


changeButtonAmEn.addEventListener('click', () => {
    const selectValue = selectAm.value
    const inputValue = inputAmEn.value
    const splitValue = inputValue.split(":")
    let hour = parseInt(splitValue[0])

    if (parseInt(splitValue[1]) >= 60) {
        return outputAmEn.value = "Please enter the correct time"
    }

    if (selectValue === 'ጠ') {
        if ((hour >= 1 && hour < 6) || hour == 12) {
            if (hour == 12) {
                hour = "0" + (hour - 6)
                return outputAmEn.value = hour + ":" + splitValue[1] + " AM"
            }
            hour += 6
            hour = hour < 10 ? ("0" + hour) : hour

            return outputAmEn.value = hour + ":" + splitValue[1] + " AM"
        } else {
            outputAmEn.value = "Please enter the correct time"
        }
    }
})

