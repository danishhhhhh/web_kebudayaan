
document.getElementById("food").addEventListener('click', () => {
    handleTabClick("food", "food-item");
});

document.getElementById("drink").addEventListener('click', () => {
    handleTabClick("drink", "drink-item");
});

function handleTabClick(tabId, contentId) {
    document.getElementById(tabId).style.backgroundColor = "#101010";
    document.getElementById(tabId).style.color = "#F8F6F0";
    document.getElementById(contentId).style.display = "block";

    const otherTabId = tabId === "food" ? "drink" : "food";
    document.getElementById(otherTabId).style.backgroundColor = "#F8F6F0";
    document.getElementById(otherTabId).style.color = "#101010";
    document.getElementById(otherTabId + "-item").style.display = "none";
}
