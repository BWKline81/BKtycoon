
moneyBtn.addEventListener("click", () => {
    totalCash = Number(localStorage.getItem("totalCash"));
    cashPerClick = Number(localStorage.getItem("cashPerClick"));
    CPS = Number(localStorage.getItem("CPS"));
    totalCash += cashPerClick;
    document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
    localStorage.setItem("totalCash", totalCash);
})

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
})