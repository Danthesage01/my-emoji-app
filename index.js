// 1. Loop through the myEmojis array and log each of them out to the console

const myEmojis = ["👨‍💻","🤑🤑","👨‍💻🤑", "😃", "🤑","👨‍💻" ]
const myEmojis = ["👨‍💻🤑", "😃", "🤑","👨‍💻" ]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")


function emojiDisplay() {
    let emojiList = ""
    for (let i = 0; i < myEmojis.length; i++) {
        emojiList += `<span>
        ${myEmojis[i]}
        </span>`
        // console.log(myEmojis[i]
    }
    emojiContainer.innerHTML = emojiList

} emojiDisplay()


// Push the emoji into the myEmoji's array, and clear the input field
// However, if the input value is empty, don't do anything

unshiftBtn.addEventListener("click", function () {
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        emojiDisplay()
    }

})
shiftBtn.addEventListener("click", function () {
    myEmojis.shift()
    emojiDisplay()
})

pushBtn.addEventListener("click", function () {
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        emojiDisplay()
    }
})
popBtn.addEventListener("click", function () {
    myEmojis.pop()
    emojiDisplay()

})
