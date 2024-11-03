//NEED TO ADD TITLE CHANGES TO UPGRADES ON PURCHASE & PERM STORE UPGRADES//



const lemonadeUpgrade1 = document.getElementById("lemonUpgrade1");
const lemonadeUpgrade2 = document.getElementById("lemonUpgrade2");
const lemonadeUpgrade3 = document.getElementById("lemonUpgrade3");
const carWashUpgrade1 = document.getElementById("carWashUpgrade1");
const carWashUpgrade2 = document.getElementById("carWashUpgrade2");
const carWashUpgrade3 = document.getElementById("carWashUpgrade3");
const pizzaChainUpgrade1 = document.getElementById("pizzaChainUpgrade1");
const pizzaChainUpgrade2 = document.getElementById("pizzaChainUpgrade2");
const pizzaChainUpgrade3 = document.getElementById("pizzaChainUpgrade3");
const supermarketUpgrade1 = document.getElementById("supermarketUpgrade1");
const supermarketUpgrade2 = document.getElementById("supermarketUpgrade2");
const supermarketUpgrade3 = document.getElementById("supermarketUpgrade3");
const spaceAgencyUpgrade1 = document.getElementById("spaceAgencyUpgrade1"); 
const spaceAgencyUpgrade2 = document.getElementById("spaceAgencyUpgrade2");
const spaceAgencyUpgrade3 = document.getElementById("spaceAgencyUpgrade3");
const bankUpgrade1 = document.getElementById("bankUpgrade1");
const bankUpgrade2 = document.getElementById("bankUpgrade2");
const bankUpgrade3 = document.getElementById("bankUpgrade3");
const universalUpgrade1 = document.getElementById("universalUpgrade1");
const universalUpgrade2 = document.getElementById("universalUpgrade2");
const universalUpgrade3 = document.getElementById("universalUpgrade3");
const clickerUpgrade1 = document.getElementById("clickerUpgrade1");
const clickerUpgrade2 = document.getElementById("clickerUpgrade2");
const tempUpgrade = document.getElementById("tempUpgrade1");
let lemonadeStandUpgrades = ["No", "No", "No"];
let carWashUpgrades = ["No", "No", "No"];
let pizzaChainUpgrades = ["No", "No", "No"];
let supermarketUpgrades = ["No", "No", "No"];
let spaceAgencyUpgrades = ["No", "No", "No"];
let bankUpgrades = ["No", "No", "No"];
let universalUpgrades = ["No", "No", "No"];
let clickerUpgrades1 = "No";
let clickerUpgrades2 = "No";
let lemonadeStandUpgrade1Price = 1000;
let lemonadeStandUpgrade2Price = 2500;
let lemonadeStandUpgrade3Price = 5000;
let carWashUpgrade1Price = 5000;
let carWashUpgrade2Price = 10000;
let carWashUpgrade3Price = 25000;
let pizzaChainUpgrade1Price = 25000;
let pizzaChainUpgrade2Price = 50000;
let pizzaChainUpgrade3Price = 100000;
let supermarketUpgrade1Price = 100000;
let supermarketUpgrade2Price = 250000;
let supermarketUpgrade3Price = 500000;
let spaceAgencyUpgrade1Price = 500000;
let spaceAgencyUpgrade2Price = 1000000;
let spaceAgencyUpgrade3Price = 5000000;
let bankUpgrade1Price = 5000000;
let bankUpgrade2Price = 10000000;
let bankUpgrade3Price = 50000000;
let universalUpgrade1Price = 1000000;
let universalUpgrade2Price = 10000000;
let universalUpgrade3Price = 1000000000;
let clickerUpgrade1Price = 100000;
let clickerUpgrade2Price = 1000000;
let tempUpgradePrice = 50000;


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
})
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("lemonadeStandUpgrade1") === "Yes") {
        lemonadeUpgrade1.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("lemonadeStandUpgrade2") === "Yes") {
        lemonadeUpgrade2.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("lemonadeStandUpgrade3") === "Yes") {
        lemonadeUpgrade3.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("carWashUpgrade1") === "Yes") {
        carWashUpgrade1.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("carWashUpgrade2") === "Yes") {
        carWashUpgrade2.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("carWashUpgrade3") === "Yes") {    
        carWashUpgrade3.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("pizzaChainUpgrade1") === "Yes") {
        pizzaChainUpgrade1.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("pizzaChainUpgrade2") === "Yes") {
        pizzaChainUpgrade2.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("pizzaChainUpgrade3") === "Yes") {
        pizzaChainUpgrade3.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("supermarketUpgrade1") === "Yes") {
        supermarketUpgrade1.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("supermarketUpgrade2") === "Yes") {
        supermarketUpgrade2.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("supermarketUpgrade3") === "Yes") {
        supermarketUpgrade3.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("spaceAgencyUpgrade1") === "Yes") {
        spaceAgencyUpgrade1.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("spaceAgencyUpgrade2") === "Yes") {
        spaceAgencyUpgrade2.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("spaceAgencyUpgrade3") === "Yes") {
        spaceAgencyUpgrade3.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("bankUpgrade1") === "Yes") {
        bankUpgrade1.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("bankUpgrade2") === "Yes") {
        bankUpgrade2.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("bankUpgrade3") === "Yes") {
        bankUpgrade3.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("universalUpgrade1") === "Yes") {  
        universalUpgrade1.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("universalUpgrade2") === "Yes") {
        universalUpgrade2.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("universalUpgrade3") === "Yes") {
        universalUpgrade3.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("clickerUpgrade1") === "Yes") {
        clickerUpgrade1.style.backgroundColor = "aqua";
    }
    if (localStorage.getItem("clickerUpgrade2") === "Yes") {
        clickerUpgrade2.style.backgroundColor = "aqua";
    }
})



lemonadeUpgrade1.addEventListener("click", () => {
    if (lemonadeStandUpgrades[0] === "No") {
        if (totalCash >= lemonadeStandUpgrade1Price) {
            totalCash = totalCash - lemonadeStandUpgrade1Price;
            lemonadeStandPrice = 90;
            localStorage.setItem("lemonadeStandPrice", lemonadeStandPrice);
            cashUpdate();
            lemonadeStandUpgrades[0] = "Yes";
            localStorage.setItem("lemonadeStandUpgrade1", lemonadeStandUpgrades[0]);
            lemonadeUpgrade1.style.backgroundColor = "aqua";
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    }
    else {
        window.alert("Already purchased");
    }
})
lemonadeUpgrade2.addEventListener("click", () => {
    if (lemonadeStandUpgrades[1] === "No") {
        if (totalCash >= lemonadeStandUpgrade2Price) {
            totalCash = totalCash - lemonadeStandUpgrade2Price;
            lemonadeStandCPS = lemonadeStandCPS * 2;
            localStorage.setItem("lemonadeStandCPS", lemonadeStandCPS);
            cashUpdate();
            lemonadeStandUpgrades[1] = "Yes";
            localStorage.setItem("lemonadeStandUpgrade2", lemonadeStandUpgrades[1]);
            lemonadeUpgrade2.style.backgroundColor = "aqua";
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    }
    else {
        window.alert("Already purchased");
    }
})
lemonadeUpgrade3.addEventListener("click", () => {
    if (lemonadeStandUpgrades[2] === "No") {
        if (totalCash >= lemonadeStandUpgrade3Price) {
            totalCash = totalCash - lemonadeStandUpgrade3Price;
            lemonadeStandCPS = lemonadeStandCPS * 2;
            localStorage.setItem("lemonadeStandCPS", lemonadeStandCPS);
            cashUpdate();
            lemonadeStandUpgrades[2] = "Yes";
            localStorage.setItem("lemonadeStandUpgrade3", lemonadeStandUpgrades[2]);
            lemonadeUpgrade3.style.backgroundColor = "aqua";
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    }
    else {
        window.alert("Already purchased");
    }
})
carWashUpgrade1.addEventListener("click", () => {
    if (carWashUpgrades[0] === "No") {
        if (totalCash >= carWashUpgrade1Price) {
            totalCash = totalCash- carWashUpgrade1Price;
            carWashPrice = 400;
            localStorage.setItem("carWashPrice", carWashPrice);
            cashUpdate();
            carWashUpgrades[0] = "Yes";
            localStorage.setItem("carWashUpgrade1", carWashUpgrades[0]);
            carWashUpgrade1.style.backgroundColor = "aqua";
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    }
    else {
        window.alert("Already purchased");
    }
})
carWashUpgrade2.addEventListener("click", () => {
    if (carWashUpgrades[1] === "No") {
        if (totalCash >= carWashUpgrade2Price) {
            totalCash = totalCash - carWashUpgrade2Price;
            carWashCPS = carWashCPS * 2;
            localStorage.setItem("carWashCPS", carWashCPS);
            cashUpdate();
            carWashUpgrades[1] = "Yes";
            localStorage.setItem("carWashUpgrade2", carWashUpgrades[1]);
            carWashUpgrade2.style.backgroundColor = "aqua";
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    }
    else {
        window.alert("Already purchased");
    }
})
carWashUpgrade3.addEventListener("click", () => {
    if (carWashUpgrades[2] === "No") {
        if (totalCash >= carWashUpgrade3Price) {
            totalCash = totalCash - carWashUpgrade3Price;
            carWashCPS = carWashCPS * 2;
            localStorage.setItem("carWashCPS", carWashCPS);
            cashUpdate();
            carWashUpgrades[2] = "Yes";
            localStorage.setItem("carWashUpgrade3", carWashUpgrades[2]);
            carWashUpgrade3.style.backgroundColor = "aqua";
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    }
    else {
        window.alert("Already purchased");
    }
})
pizzaChainUpgrade1.addEventListener("click", () => {
    if (pizzaChainUpgrades[0] === "No") {
        if (totalCash >= pizzaChainUpgrade1Price) {
            totalCash = totalCash - pizzaChainUpgrade1Price;
            pizzaChainPrice = 2000;
            localStorage.setItem("pizzaChainPrice", pizzaChainPrice);
            cashUpdate();
            pizzaChainUpgrades[0] = "Yes";
            localStorage.setItem("pizzaChainUpgrade1", pizzaChainUpgrades[0]);
            pizzaChainUpgrade1.style.backgroundColor = "aqua";
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    }
    else {
        window.alert("Already purchased");
    }
})
pizzaChainUpgrade2.addEventListener("click", () => {
    if (pizzaChainUpgrades[1] === "No") {
        if (totalCash >= pizzaChainUpgrade2Price) {
            totalCash = totalCash - pizzaChainUpgrade2Price;
            pizzaChainCPS = pizzaChainCPS * 2;
            localStorage.setItem("pizzaChainCPS", pizzaChainCPS);
            cashUpdate();
            pizzaChainUpgrades[1] = "Yes";
            localStorage.setItem("pizzaChainUpgrade2", pizzaChainUpgrades[1]);
            pizzaChainUpgrade2.style.backgroundColor = "aqua";
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    } else {
        window.alert('Already purchased');
    }
})
pizzaChainUpgrade3.addEventListener("click", () => {
    if (pizzaChainUpgrades[2] === "No") {
        if (totalCash >= pizzaChainUpgrade3Price) {
            totalCash = totalCash - pizzaChainUpgrade3Price;
            pizzaChainCPS = pizzaChainCPS * 2;
            localStorage.setItem("pizzaChainCPS", pizzaChainCPS);
            cashUpdate();
            pizzaChainUpgrades[2] = "Yes";
            localStorage.setItem("pizzaChainUpgrade3", pizzaChainUpgrades[2]);
            pizzaChainUpgrade3.style.backgroundColor = "aqua";
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    }
    else {
        window.alert("Already purchased");
    }
})
supermarketUpgrade1.addEventListener("click", () => {
    if (supermarketUpgrades[0] === "No") {
        if (totalCash >= supermarketUpgrade1Price) {
            totalCash = totalCash - supermarketUpgrade1Price;
            supermarketPrice = 7500;
            localStorage.setItem("supermarketPrice", supermarketPrice);
            cashUpdate();
            supermarketUpgrades[0] = "Yes";
            localStorage.setItem("supermarketUpgrade1", supermarketUpgrades[0]);
            supermarketUpgrade1.style.backgroundColor = "aqua";
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    }
    else {
        window.alert("Already purchased");
    }
})
supermarketUpgrade2.addEventListener("click", () => {
    if (supermarketUpgrades[1] === "No") {
        if (totalCash >= supermarketUpgrade2Price) {
            totalCash = totalCash - supermarketUpgrade2Price;
            supermarketCPS = supermarketCPS * 2;
            localStorage.setItem("supermarketCPS", supermarketCPS);
            cashUpdate();
            supermarketUpgrades[1] = "Yes";
            localStorage.setItem("supermarketUpgrade2", supermarketUpgrades[1]);
            supermarketUpgrade2.style.backgroundColor = "aqua";
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    }
    else {
        window.alert("Already purchased");
    }
})
supermarketUpgrade3.addEventListener("click", () => {
    if (supermarketUpgrades[2] === "No") {
        if (totalCash >= supermarketUpgrade3Price) {
            totalCash = totalCash - supermarketUpgrade3Price;
            supermarketCPS = supermarketCPS * 3;
            localStorage.setItem("supermarketCPS", supermarketCPS);
            cashUpdate();
            supermarketUpgrades[2] = "Yes";
            localStorage.setItem("supermarketUpgrade3", supermarketUpgrades[2]);
            supermarketUpgrade3.style.backgroundColor = "aqua";
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    }
    else {
        window.alert("Already purchased");
    }
})
spaceAgencyUpgrade1.addEventListener("click", () => {
    if (spaceAgencyUpgrades[0] === "No") {
        if (totalCash >= spaceAgencyUpgrade1Price) {
            totalCash = totalCash - spaceAgencyUpgrade1Price;
            spaceAgencyPrice = 200000;
            localStorage.setItem("spaceAgencyPrice", spaceAgencyPrice);
            cashUpdate();
            spaceAgencyUpgrades[0] = "Yes";
            localStorage.setItem("spaceAgencyUpgrade1", spaceAgencyUpgrades[0]);
            spaceAgencyUpgrade1.style.backgroundColor = "aqua";
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    }
    else {
        window.alert("Already purchased");
    }
})
spaceAgencyUpgrade2.addEventListener("click", () => {
    if (spaceAgencyUpgrades[1] === "No") {
        if (totalCash >= spaceAgencyUpgrade2Price) {
            totalCash = totalCash - spaceAgencyUpgrade2Price;
            spaceAgencyCPS = spaceAgencyCPS * 2;
            localStorage.setItem("spaceAgencyCPS", spaceAgencyCPS);
            cashUpdate();
            spaceAgencyUpgrades[1] = "Yes";
            localStorage.setItem("spaceAgencyUpgrade2", spaceAgencyUpgrades[1]);
            spaceAgencyUpgrade2.style.backgroundColor = "aqua";
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    }
    else {
        window.alert("Already purchased");
    }
})
spaceAgencyUpgrade3.addEventListener("click", () => {
    if (spaceAgencyUpgrades[2] === "No") {
        if (totalCash >= spaceAgencyUpgrade3Price) {
            totalCash = totalCash - spaceAgencyUpgrade3Price;
            spaceAgencyCPS = spaceAgencyCPS * 4;
            localStorage.setItem("spaceAgencyCPS", spaceAgencyCPS);
            cashUpdate();
            spaceAgencyUpgrades[2] = "Yes";
            localStorage.setItem("spaceAgencyUpgrade3", spaceAgencyUpgrades[2]);
            spaceAgencyUpgrade3.style.backgroundColor = "aqua";
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    }
    else {
        window.alert("Already purchased");
    }
})
bankUpgrade1.addEventListener("click", () => {
    if (bankUpgrades[0] === "No") {
        if (totalCash >= bankUpgrade1Price) {
            totalCash = totalCash - bankUpgrade1Price;
            bankPrice = 750000;
            localStorage.setItem("bankPrice", bankPrice);
            cashUpdate();
            bankUpgrades[0] = "Yes";
            localStorage.setItem("bankUpgrade1", bankUpgrades[0]);
            bankUpgrade1.style.backgroundColor = "aqua";
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    }
    else {
        window.alert("Already purchased");
    }
})
bankUpgrade2.addEventListener("click", () => {
    if (bankUpgrades[1] === "No") {
        if (totalCash >= bankUpgrade2Price) {
            totalCash = totalCash - bankUpgrade2Price;
            bankCPS = bankCPS * 2;
            localStorage.setItem("bankCPS", bankCPS);
            cashUpdate();
            bankUpgrades[1] = "Yes";
            localStorage.setItem("bankUpgrade2", bankUpgrades[1]);
            bankUpgrade2.style.backgroundColor = "aqua";
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    }
    else {
        window.alert("Already purchased");
    }
})
bankUpgrade3.addEventListener("click", () => {
    if (bankUpgrades[2] === "No") {
        if (totalCash >= bankUpgrade3Price) {
            totalCash = totalCash - bankUpgrade3Price;
            bankCPS = bankCPS * 5;
            localStorage.setItem("bankCPS", bankCPS);
            cashUpdate();
            bankUpgrades[2] = "Yes";
            localStorage.setItem("bankUpgrade3", bankUpgrades[2]);
            bankUpgrade3.style.backgroundColor = "aqua";
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    }
    else {
        window.alert("Already purchased");
    }
})

// This event listener is for the universalUpgrade1 button click
universalUpgrade1.addEventListener("click", () => {
    // Check if the universalUpgrade1 has already been purchased
    if (universalUpgrades[0] === "No") {
        // Check if the player has enough cash to purchase the upgrade
        if (totalCash >= universalUpgrade1Price) {
            // Deduct the upgrade price from the total cash
            totalCash = totalCash - universalUpgrade1Price;
            // Apply a discount to the prices of various business upgrades
            lemonadeStandPrice = lemonadeStandPrice * 0.9;
            localStorage.setItem("lemonadeStandPrice", lemonadeStandPrice);
            carWashPrice = carWashPrice * 0.9;
            localStorage.setItem("carWashPrice", carWashPrice);
            pizzaChainPrice = pizzaChainPrice * 0.9;
            localStorage.setItem("pizzaChainPrice", pizzaChainPrice);
            supermarketPrice = supermarketPrice * 0.9;
            localStorage.setItem("supermarketPrice", supermarketPrice);
            spaceAgencyPrice = spaceAgencyPrice * 0.9;
            localStorage.setItem("spaceAgencyPrice", spaceAgencyPrice);
            bankPrice = bankPrice * 0.9;
            localStorage.setItem("bankPrice", bankPrice);
            // Update the cash display
            cashUpdate();
            // Mark the universalUpgrade1 as purchased
            universalUpgrades[0] = "Yes";
            localStorage.setItem("universalUpgrade1", universalUpgrades[0]);
            // Change the button color to indicate it has been purchased
            universalUpgrade1.style.backgroundColor = "aqua";
        } else {
            // Display an alert if the player doesn't have enough cash
            window.alert("Not enough cash to purchase");
        }
    } else {
        // Display an alert if the universalUpgrade1 has already been purchased
        window.alert("Already purchased");
    }
});

universalUpgrade2.addEventListener("click", () => {
    if (universalUpgrades[1] === "No") {
        if (totalCash >= universalUpgrade2Price) {
            totalCash = totalCash - universalUpgrade2Price;
            lemonadeStandCPS = lemonadeStandCPS * 2;
            localStorage.setItem("lemonadeStandCPS", lemonadeStandCPS);
            carWashCPS = carWashCPS * 2;
            localStorage.setItem("carWashCPS", carWashCPS);
            pizzaChainCPS = pizzaChainCPS * 2;
            localStorage.setItem("pizzaChainCPS", pizzaChainCPS);
            supermarketCPS = supermarketCPS * 2;
            localStorage.setItem("supermarketCPS", supermarketCPS);
            spaceAgencyCPS = spaceAgencyCPS * 2;
            localStorage.setItem("spaceAgencyCPS", spaceAgencyCPS);
            bankCPS = bankCPS * 2;
            localStorage.setItem ("bankCPS", bankCPS);
            cashUpdate();
            universalUpgrades[1] = "Yes";
            localStorage.setItem("universalUpgrade2", universalUpgrades[1]);
            universalUpgrade2.style.backgroundColor = "aqua";
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    }
    else {
        window.alert("Already purchased");
    }
})
universalUpgrade3.addEventListener("click", () => {
    if (universalUpgrades[2] === "No") {
        if (totalCash >= universalUpgrade3Price) {
            totalCash = totalCash - universalUpgrade3Price;
            lemonadeStandCPS = lemonadeStandCPS * 10;
            localStorage.setItem("lemonadeStandCPS", lemonadeStandCPS);
            carWashCPS = carWashCPS * 10;
            localStorage.setItem("carWashCPS", carWashCPS);
            pizzaChainCPS = pizzaChainCPS * 10;
            localStorage.setItem("pizzaChainCPS", pizzaChainCPS);
            supermarketCPS = supermarketCPS * 10;
            localStorage.setItem("supermarketCPS", supermarketCPS);
            spaceAgencyCPS = spaceAgencyCPS * 10;
            localStorage.setItem("spaceAgencyCPS", spaceAgencyCPS);
            bankCPS = bankCPS * 10;
            localStorage.setItem ("bankCPS", bankCPS);
            cashUpdate();
            universalUpgrades[2] = "Yes";
            localStorage.setItem("universalUpgrade3", universalUpgrades[2]);
            universalUpgrade2.style.backgroundColor = "aqua";
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    }
    else {
        window.alert("Already purchased");
    }
})
clickerUpgrade1.addEventListener("click", () => {
    if (clickerUpgrades1 === "No") {
        if (totalCash >= clickerUpgrade1Price) {
            totalCash = totalCash - clickerUpgrade1Price;
            cashPerClick = 10;
            localStorage.setItem("cashPerClick", cashPerClick);
            cashUpdate();
            clickerUpgrades1 = "Yes";
            localStorage.setItem("clickerUpgrade1", clickerUpgrades1);
            clickerUpgrade1.style.backgroundColor = "aqua";
        }
    }
})
clickerUpgrade2.addEventListener("click", () => {
    if (clickerUpgrades2 === "No") {
        if (totalCash >= clickerUpgrade2Price) {
            totalCash = totalCash - clickerUpgrade2Price;
            cashPerClick = 100;
            localStorage.setItem("cashPerClick", cashPerClick);
            cashUpdate();
            clickerUpgrades2 = "Yes";
            localStorage.setItem("clickerUpgrade2", clickerUpgrades2);
            clickerUpgrade2.style.backgroundColor = "aqua";
        }
    }
})
tempUpgrade.addEventListener("click", () => {
    console.log("Yo")
    if (localStorage.getItem("Cooldown") === "No" && localStorage.getItem("tempRunning") === "No") {
        console.log("Hey there")
        if (totalCash >= tempUpgradePrice) {
            console.log("He")
            totalCash = totalCash - tempUpgradePrice;
            localStorage.setItem("RealCPS", CPS)
            CPS = CPS * 1.5;
            localStorage.setItem("CPS", CPS);
            cashUpdate();
            tempUpgrade.style.backgroundColor = "maroon";
            setTimeout(resetCPS, 60000);
        }
        else {
            window.alert("Not enough cash to purchase");
        }
    } 
    else if (localStorage.getItem("tempRunning") === "Yes") {
        window.alert("Upgrade already in use");
    }
    else if (localStorage.getItem("Cooldown") === "Yes") {
        window.alert("Upgrade on cooldown");
    }
})

/**
 * Updates local storage with the new total cash and CPS, and updates the header text.
 */
function cashUpdate() {
    //Update local storage with the new total cash and CPS
    localStorage.setItem("totalCash", totalCash);
    localStorage.setItem("CPS", CPS);
    document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
}


/**
 * Retrieves the current total cash and CPS from local storage and assigns them to the totalCash and CPS variables.
 */
function updateStuff() {
    totalCash = localStorage.getItem("totalCash");
    CPS = localStorage.getItem("CPS");
}

/**
 * Resets CPS to the value stored in "RealCPS" and sets the Cooldown to "No".
 */
function resetCPS() {
    CPS = localStorage.getItem("RealCPS");
    localStorage.setItem("CPS", CPS);
    localStorage.setItem("Cooldown", "Yes");
    localStorage.setItem("tempRunning", "No");
    tempUpgrade.style.backgroundColor = "grey";
    setTimeout(endCooldown, 180000);
}
function endCooldown() {
    localStorage.setItem("Cooldown", "No");
    tempUpgrade.style.backgroundColor = "teal";
}
