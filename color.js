document.getElementById('colorButton').addEventListener('click', function() {
    function getRandomColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return `rgb(${r}, ${g}, ${b})`;
    }

    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    document.getElementById('colorCode').textContent = `Color Code: ${randomColor}`;
});
