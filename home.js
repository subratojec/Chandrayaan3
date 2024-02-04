    var textElement = document.getElementById('h1')
    var texts = [
        "Lunar Victory",
        "CHANDRAYAN3"
    ];

    var currentIndex = 0;

    function changeText() {
        textElement.innerText = texts[currentIndex];
        textElement.style.opacity = 1;//fade in 
        currentIndex = (currentIndex+1)%texts.length;
    }
    setInterval(changeText,2000)
