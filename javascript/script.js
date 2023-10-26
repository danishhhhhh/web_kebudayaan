



document.getElementById("food").addEventListener('click', () => {
    document.getElementById("food").style.backgroundColor = "#101010";
    document.getElementById("drink").style.backgroundColor = "#F8F6F0";
    document.getElementById("food").style.color = "#F8F6F0";
    document.getElementById("drink").style.color = "#101010";
    document.getElementById("food-item").style.display = "block";
    document.getElementById("drink-item").style.display = "none";
})

document.getElementById("drink").addEventListener('click', () => {
    document.getElementById("drink").style.backgroundColor = "#101010";
    document.getElementById("food").style.backgroundColor = "#F8F6F0";
    document.getElementById("drink").style.color = "#F8F6F0";
    document.getElementById("food").style.color = "#101010";
    document.getElementById("food-item").style.display = "none";
    document.getElementById("drink-item").style.display = "block";
})





