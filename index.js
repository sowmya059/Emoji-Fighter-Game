let fighters = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]

let stageEl = document.getElementById("stage")
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function() {

    console.log("clicked")
    let items1=Math.floor(Math.random()*fighters.length)
    let items2=Math.floor(Math.random()*fighters.length)
    stageEl.textContent=(fighters[items1] + "VS"+ fighters[items2])
    
})