const moneyBtn = document.getElementById("moneyBtn");
const lemonadeSellBtn = document.getElementById("lemonadeStandDecrease");
const lemonadeBuyBtn = document.getElementById("lemonadeStandIncrease");
const carWashSellBtn = document.getElementById("carWashDecrease");
const carWashBuyBtn = document.getElementById("carWashIncrease");
const pizzaChainSellBtn = document.getElementById("pizzaChainDecrease");
const pizzaChainBuyBtn = document.getElementById("pizzaChainIncrease");
const supermarketBuyBtn = document.getElementById("supermarketIncrease");
const supermarketSellBtn = document.getElementById("supermarketDecrease");
const spaceAgencyBuyBtn = document.getElementById("spaceAgencyIncrease");
const spaceAgencySellBtn = document.getElementById("spaceAgencyDecrease");
const bankSellBtn = document.getElementById("bankDecrease");
const bankBuyBtn = document.getElementById("bankIncrease");
const headerHeading = document.getElementById("headerHeading");
const resetBtn = document.getElementById("reset");
let lemonadeStandCounter = document.getElementById("lemonadeStandCount");
let carWashCounter = document.getElementById("carWashCount");
let pizzaChainCounter = document.getElementById("pizzaChainCount");
let supermarketCounter = document.getElementById("supermarketCount");
let spaceAgencyCounter = document.getElementById("spaceAgencyCount");
let bankCounter = document.getElementById("bankCount");
let lemonadeStandPrice = 100;
let carWashPrice = 500;
let pizzaChainPrice = 2500;
let supermarketPrice = 10000;
let spaceAgencyPrice = 250000;
let bankPrice = 1000000;
let lemonadeStandCPS = 1;
let carWashCPS = 5;
let pizzaChainCPS = 25;
let supermarketCPS = 105;
let spaceAgencyCPS = 2750;
let bankCPS = 12500;
let lemonadeStands = 0;
let carWashes = 0;
let pizzaChains = 0;
let supermarkets = 0;
let spaceAgencies = 0;
let banks = 0;
let totalCash = 0;
let cashPerClick = 1;
let CPS = 0;
let bought = false;
let sold = false;


document.addEventListener("DOMContentLoaded", () => {
    loadEverything();
})
window.BeforeUnloadEvent = () => {
    saveEverthing();
}
window.setInterval(updateCPS, 1000);

document.getElementById("reset").addEventListener("click", () => {
    console.log("resetting...");
    reset = window.prompt("Are you sure you want to reset? (type YES to reset)");
    if (reset === "YES") {
        localStorage.setItem("totalCash", 0);
        localStorage.setItem("CPS", 0);
        localStorage.setItem("lemonadeStands", 0);
        localStorage.setItem("carWashes", 0);
        localStorage.setItem("pizzaChains", 0);
        localStorage.setItem("supermarkets", 0);
        localStorage.setItem("spaceAgencies", 0);
        localStorage.setItem("banks", 0);
        localStorage.setItem("lemonadeStandCPS", 1);
        localStorage.setItem("carWashCPS", 5);
        localStorage.setItem("pizzaChainCPS", 25);
        localStorage.setItem("supermarketCPS", 105);
        localStorage.setItem("spaceAgencyCPS", 2750);
        localStorage.setItem("bankCPS", 12500);
        localStorage.setItem("lemonadeStandPrice", 100);
        localStorage.setItem("carWashPrice", 500);
        localStorage.setItem("pizzaChainPrice", 2500);
        localStorage.setItem("supermarketPrice", 10000);    
        localStorage.setItem("spaceAgencyPrice", 250000);
        localStorage.setItem("bankPrice", 1250000);
        localStorage.setItem("lemonadeStandUpgrade1", "No");
        localStorage.setItem("lemonadeStandUpgrade2", "No");
        localStorage.setItem("lemonadeStandUpgrade3", "No");
        localStorage.setItem("carWashUpgrade1", "No");
        localStorage.setItem("carWashUpgrade2", "No");
        localStorage.setItem("carWashUpgrade3", "No");
        localStorage.setItem("pizzaChainUpgrade1", "No");
        localStorage.setItem("pizzaChainUpgrade2", "No");
        localStorage.setItem("pizzaChainUpgrade3", "No");
        localStorage.setItem("supermarketUpgrade1", "No");
        localStorage.setItem("supermarketUpgrade2", "No");
        localStorage.setItem("supermarketUpgrade3", "No");
        localStorage.setItem("spaceAgencyUpgrade1", "No");
        localStorage.setItem("spaceAgencyUpgrade2", "No");
        localStorage.setItem("spaceAgencyUpgrade3", "No");
        localStorage.setItem("bankUpgrade1", "No"); 
        localStorage.setItem("bankUpgrade2", "No");
        localStorage.setItem("bankUpgrade3", "No");
        localStorage.setItem("universalUpgrade1", "No");
        localStorage.setItem("universalUpgrade2", "No");
        localStorage.setItem("universalUpgrade3", "No");
        localStorage.setItem("clickerUpgrade1", "No");
        localStorage.setItem("clickerUpgrade2", "No");
        localStorage.setItem("Cooldown", "No");
        localStorage.setItem("tempRunning", "No");
        localStorage.setItem("cashPerClick", 1)
        document.getElementById("headerHeading").textContent = `Cash: $0 -BK's Tycoon- CPS: $0`;
        totalCash = 0;
        CPS = 0;
        lemonadeStands = 0;
        carWashes = 0;
        pizzaChains = 0;
        supermarkets = 0;
        spaceAgencies = 0;
        banks = 0;
    }
})

//Business Buttons
lemonadeBuyBtn.addEventListener("click", () => {
    addBusiness(lemonadeStandPrice, lemonadeStandCPS, lemonadeStands, lemonadeStandCounter);
    bought === true ? lemonadeStands++ : lemonadeStands = lemonadeStands;
    localStorage.setItem("lemonadeStands", lemonadeStands);
    cashUpdate();
});

lemonadeSellBtn.addEventListener("click", () => {
    sellBusiness(lemonadeStands, lemonadeStandCPS, lemonadeStands, lemonadeStandCounter, lemonadeStandPrice);
    sold === true ? lemonadeStands-- : lemonadeStands = lemonadeStands;
    localStorage.setItem("lemonadeStands", lemonadeStands);
    cashUpdate();
})
carWashBuyBtn.addEventListener("click", () => {
    addBusiness(carWashPrice, carWashCPS, carWashes, carWashCounter);
    bought === true ? carWashes++ : carWashes = carWashes;
    localStorage.setItem("carWashes", carWashes);
    cashUpdate();
})
carWashSellBtn.addEventListener("click", () => {
    sellBusiness(carWashes, carWashCPS, carWashes, carWashCounter, carWashPrice);
    sold === true ? carWashes-- : carWashes = carWashes;
    localStorage.setItem("carWashes", carWashes);
    cashUpdate();
})
pizzaChainBuyBtn.addEventListener("click", () => {
    addBusiness(pizzaChainPrice, pizzaChainCPS, pizzaChains, pizzaChainCounter) 
    bought === true ? pizzaChains++ : pizzaChains = pizzaChains;
    localStorage.setItem("pizzaChains", pizzaChains);
    cashUpdate();
})
pizzaChainSellBtn.addEventListener("click", () => {
    sellBusiness(pizzaChains, pizzaChainCPS, pizzaChains, pizzaChainCounter, pizzaChainPrice);
    sold === true ? pizzaChains-- : pizzaChains = pizzaChains;
    localStorage.setItem("pizzaChains", pizzaChains);
    cashUpdate();
})
supermarketBuyBtn.addEventListener("click", () => {
    addBusiness(supermarketPrice, supermarketCPS, supermarkets, supermarketCounter);
    bought === true ? supermarkets++ : supermarkets = supermarkets;
    localStorage.setItem("supermarkets", supermarkets);
    cashUpdate();
})
supermarketSellBtn.addEventListener("click", () => {
    sellBusiness(supermarkets, supermarketCPS, supermarkets, supermarketCounter, supermarketPrice);
    sold === true ? supermarkets-- : supermarkets = supermarkets;
    localStorage.setItem("supermarkets", supermarkets);
    cashUpdate();
})
spaceAgencyBuyBtn.addEventListener("click", () => {
    addBusiness(spaceAgencyPrice, spaceAgencyCPS, spaceAgencies, spaceAgencyCounter);
    bought === true ? spaceAgencies++ : spaceAgencies = spaceAgencies;
    localStorage.setItem("spaceAgencies", spaceAgencies);
    cashUpdate();
})
spaceAgencySellBtn.addEventListener("click", () => {
    sellBusiness(spaceAgencies, spaceAgencyCPS, spaceAgencies, spaceAgencyCounter, spaceAgencyPrice);
    sold === true ? spaceAgencies-- : spaceAgencies = spaceAgencies;
    localStorage.setItem("spaceAgencies", spaceAgencies);
    cashUpdate();
})
bankBuyBtn.addEventListener("click", () => {
    addBusiness(bankPrice, bankCPS, banks, bankCounter);
    bought === true ? banks++ : banks = banks;
    localStorage.setItem("banks", banks);
    cashUpdate();
})
bankSellBtn.addEventListener("click", () => {
    sellBusiness(banks, bankCPS, banks, bankCounter, bankPrice);
    sold === true ? banks-- : banks = banks;
    localStorage.setItem("banks", banks);
    cashUpdate();
})
moneyBtn.addEventListener("click", () => {
    totalCash += cashPerClick;
    document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
    localStorage.setItem("totalCash", totalCash);
    cashUpdate();
})


function saveEverthing() {
    // Save game state to sessionStorage
    localStorage.setItem("lemonadeStandPrice", lemonadeStandPrice);
    localStorage.setItem("carWashPrice", carWashPrice);
    localStorage.setItem("pizzaChainPrice", pizzaChainPrice);
    localStorage.setItem("supermarketPrice", supermarketPrice);
    localStorage.setItem("spaceAgencyPrice", spaceAgencyPrice);
    localStorage.setItem("bankPrice", bankPrice);
    localStorage.setItem("lemonadeStandCPS", lemonadeStandCPS);
    localStorage.setItem("carWashCPS", carWashCPS);
    localStorage.setItem("pizzaChainCPS", pizzaChainCPS);
    localStorage.setItem("supermarketCPS", supermarketCPS);
    localStorage.setItem("spaceAgencyCPS", spaceAgencyCPS);
    localStorage.setItem("bankCPS", bankCPS);
    localStorage.setItem("lemonadeStands", lemonadeStands);
    localStorage.setItem("carWashes", carWashes);
    localStorage.setItem("pizzaChains", pizzaChains);
    localStorage.setItem("supermarkets", supermarkets);
    localStorage.setItem("spaceAgencies", spaceAgencies);
    localStorage.setItem("banks", banks);
    localStorage.setItem("totalCash", totalCash);
    localStorage.setItem("CPS", CPS);
}

/**
 * Loads the game state from localStorage and updates the UI accordingly.
 */
function loadEverything() {
    // Load game state from localStorage
    lemonadeStandPrice = Number(localStorage.getItem("lemonadeStandPrice"));
    carWashPrice = Number(localStorage.getItem("carWashPrice"));
    pizzaChainPrice = Number(localStorage.getItem("pizzaChainPrice"));
    supermarketPrice = Number(localStorage.getItem("supermarketPrice"));
    spaceAgencyPrice = Number(localStorage.getItem("spaceAgencyPrice"));
    bankPrice = Number(localStorage.getItem("bankPrice"));

    lemonadeStandCPS = Number(localStorage.getItem("lemonadeStandCPS"));
    carWashCPS = Number(localStorage.getItem("carWashCPS"));
    pizzaChainCPS = Number(localStorage.getItem("pizzaChainCPS"));
    supermarketCPS = Number(localStorage.getItem("supermarketCPS"));
    spaceAgencyCPS = Number(localStorage.getItem("spaceAgencyCPS"));
    bankCPS = Number(localStorage.getItem("bankCPS"));

    lemonadeStands = Number(localStorage.getItem("lemonadeStands"));
    carWashes = Number(localStorage.getItem("carWashes"));
    pizzaChains = Number(localStorage.getItem("pizzaChains"));
    supermarkets = Number(localStorage.getItem("supermarkets"));
    spaceAgencies = Number(localStorage.getItem("spaceAgencies"));
    banks = Number(localStorage.getItem("banks"));

    totalCash = Number(localStorage.getItem("totalCash"));
    CPS = Number(localStorage.getItem("CPS"));

    // Update the UI with the loaded values
    lemonadeStandCounter.textContent = (lemonadeStands);
    carWashCounter.textContent = (carWashes);
    pizzaChainCounter.textContent = (pizzaChains);
    supermarketCounter.textContent = (supermarkets);
    spaceAgencyCounter.textContent = (spaceAgencies);
    bankCounter.textContent = (banks);

    document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
}

/**
 * Updates the CPS and total cash, and updates the UI to reflect the new values.
 */
function updateCPS() {
    // Update the header text
    document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
    // Increment the total cash by the CPS
    totalCash = totalCash + CPS;
    // Save the new total cash to local storage
    localStorage.setItem("totalCash", totalCash);
    // Save the CPS to local storage
    localStorage.setItem("CPS", CPS);
}
/**
 * Adds a business to the player's inventory and updates CPS and total cash accordingly
 * @param {number} price - The cost of the business
 * @param {number} cps - The money earned per second by the business
 * @param {number} type - The type of business to add
 * @param {Element} counter - The element to update with the number of businesses
 */
function addBusiness(price, cps, type, counter){
    bought = false;
    let enoughCash = price;
    if (totalCash >= enoughCash) {
        totalCash = totalCash - enoughCash;
        type = type + 1;
        CPS = CPS + cps;
        counter.textContent = (type);
        bought = true;
    }
    else {
        window.alert("Not enough cash to purchase");
        bought = false;
    }
}

/**
 * Sells a business and updates the total cash and CPS accordingly
 * @param {number} amount - The number of businesses available to sell
 * @param {number} cps - The money earned per second by the business
 * @param {number} type - The number of businesses to sell
 * @param {Element} counter - The element to update with the number of businesses
 * @param {number} price - The price of the business
 */
function sellBusiness(amount, cps, type, counter, price){
    sold = false;
    let enoughBusiness = 1;
    if (amount >= enoughBusiness) {
        console.log("yo")
        totalCash = totalCash + price;
        CPS = CPS - cps;
        type = type - 1;
        counter.textContent = (type);
        sold = true;
    }
    else {
        window.alert("Not enough businesses to sell");
        sold = false;
    }
}

/**
 * Updates the local storage with the new total cash and CPS
 */
function cashUpdate() {
    //Update local storage with the new total cash and CPS
    localStorage.setItem("totalCash", totalCash);
    localStorage.setItem("CPS", CPS);
    document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
}


