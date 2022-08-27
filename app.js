const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice-text");
const adviceBtn = document.getElementById("advice-btn");
const url = "https://api.adviceslip.com/advice";
adviceBtn.addEventListener("click", getAdvice)


getAdvice()
async function getAdvice() {
    const fetchData = await fetch(url)
    const data = await fetchData.json();
    console.log(data.slip.advice)
    adviceId.innerHTML = data.slip.id
    adviceText.innerHTML = data.slip.advice
}