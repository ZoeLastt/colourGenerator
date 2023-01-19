//get random colour fns
function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
} 

function randomRgb(){
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r, g, b];
}

function randomHex(){
    let [r, g, b] = randomRgb();
    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');
    return "#" + hr + hg + hb;
}

//set div to random colours, set text to hex codes fn
function colour(){
    for(let i = 0; i < 4; i ++){
        let hex = randomHex();
        document.getElementById(i + 1).style.backgroundColor = hex;
        document.getElementById(i + 1).innerHTML = hex;
        document.getElementById(i + 1).color = "#eef5db";
    }
}
window.onload = colour;