function changeBgColor(){

    const colorNames = ['red', 'green', 'blue', 'aqua']

    let colorIndex = Math.floor(Math.random()*4+1)

    document.body.style.backgroundColor = colorNames[colorIndex]
    const paraColor = document.getElementById('bgcolorval')
    paraColor.innerText = document.body.style.backgroundColor

}