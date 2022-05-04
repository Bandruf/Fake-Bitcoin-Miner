const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

let foundone = false

function mine(){
    document.body.style.backgroundColor = 'black'
    var foundl = Math.floor(Math.random() * 10000 + 1)
    if (foundl == 4545) {
        foundone = true
    }
    let bit = document.createElement("h1")
    bit.innerHTML = generateString(20) + " : 0"
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(foundl)
    bit.style.color = "#"+randomColor
    document.body.appendChild(bit)
    window.scrollBy(50,50);
}

function init(){
    if (!foundone) {
        requestAnimationFrame(init)
        mine()
    } else {
        foundone = true
        let bit = document.createElement("h1")
        bit.innerHTML = generateString(20) + " : ["+Math.random(0.005,1)+"]!"
        bit.style.color = "lime"
        document.body.appendChild(bit)
    }
}
init()