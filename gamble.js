const randomNumberGuessingSubmit = document.getElementById("randomNumberGuessingSubmit");
const randomNumberGuessingLowerBoundInput = document.getElementById("randomNumberGuessingLowerBound");
const randomNumberGuessingUpperBoundInput = document.getElementById("randomNumberGuessingUpperBound");
const randomNumberGuessingCashInput = document.getElementById("randomNumberGuessingCash");
const randomNumberGuessingProfitOuput = document.getElementById("randomNumberGuessingProfit");
const blackjackPlayBtn = document.getElementById("blackjackPlay");
const blackjackCashInput = document.getElementById("blackjackCash");
const blackjackProfitOutput = document.getElementById("blackjackProfit");
const blackjackHitBtn = document.getElementById("blackjackHit");
const blackjackStandBtn = document.getElementById("blackjackStand");
const wheelofFortunePlayBtn = document.getElementById("wheelOfFortunePlay");
const wheelofFortuneCashInput = document.getElementById("wheelOfFortuneCash");
const wheelofFortuneProfitOutput = document.getElementById("wheelOfFortuneProfit");
let randomNumberGuessingLowerBound;
let randomNumberGuessingUpperBound;
let randomNumberGuessingCash;
let randomNumberGuessingProfit;
let blackjackCash;
let blackjackProfit;
let blackjackPlay = false;
let blackjackPlayerTotal;
let blackjackDealerTotal;
let wheelofFortuneCash;
let wheelofFortuneProfit;
let wheelofFortunePlay = false;
let splitWheelofFortuneWord;
const wheelofFortuneCategories = ["Games", "Foods", "Movies", "Music", "Sports", "Summer", "Winter", "Travel"];
const wheelofFortuneGames = ["Fortnite", "Minecraft", "Call of Duty", "Battlefield", "Madden", "NBA 2k", "Halo", "Mortal Combat", "League of Legends"];
const wheelofFortuneFoods = ["Hamburger", "Pizza", "Pasta", "Pancake", "Chicken", "Steak", "Cake", "Sandwich", "Ice Cream", "Donut"];
const wheelofFortuneMovies = ["Avatar", "Avengers", "Star Wars", "The Matrix", "The Dark Knight", "Inception", "Interstellar", "The Lord of the Rings", "Avengers Endgame", "The Dark Knight Rises"];
const wheelofFortuneMusic = ["Rock", "Pop", "Jazz", "Classical", "Rap", "Electronic", "Folk", "Hip Hop", "Techno", "Country"];
const wheelofFortuneSports = ["Football", "Basketball", "Hockey", "Soccer", "Tennis", "Volleyball", "Baseball", "Cricket", "Rugby", "Golf"];
const wheelofFortuneSummer = ["Sun", "Rain", "Beach", "Hot", "Cruise", "Pool", "Ocean", "Swimming", "Camping", "Hiking"];
const wheelofFortuneWinter = ["Snow", "Ice", "Cold", "Winter", "Winter Olympics", "Snowboarding", "Ice Skating", "Skiing", "Snowmobiling", "Snowshoeing"];
const wheelofFortuneTravel = ["Car", "Plane", "Train", "Bus", "Boat", "Cruise", "Hiking", "Camping", "Adventure", "Vacation"];

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

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
})


/**
 * When the user types in the input box for the cash that they want to bet in the random number guessing game, this function is called automatically.
 * It updates the output for the profit that the user can gain if they win the game.
 */
randomNumberGuessingCashInput.onkeyup = () => {
    randomNumberGuessingProfitOuput.value = randomNumberGuessingCashInput.value * ((randomNumberGuessingUpperBoundInput.value - randomNumberGuessingLowerBoundInput.value) + 1);
}
/**
 * When the user types in the input box for the lower bound of the random number guessing game, this function is called automatically.
 * It updates the output for the profit that the user can gain if they win the game.
 */
randomNumberGuessingLowerBoundInput.onkeyup = () => {
    randomNumberGuessingProfitOuput.value = randomNumberGuessingCashInput.value * ((randomNumberGuessingUpperBoundInput.value - randomNumberGuessingLowerBoundInput.value) + 1);
}
/**
 * When the user types in the input box for the upper bound of the random number guessing game, this function is called automatically.
 * It updates the output for the profit that the user can gain if they win the game.
 */
randomNumberGuessingUpperBoundInput.onkeyup = () => {
    randomNumberGuessingProfitOuput.value = randomNumberGuessingCashInput.value * ((randomNumberGuessingUpperBoundInput.value - randomNumberGuessingLowerBoundInput.value) + 1);
}
/**
 * When the user types in the input box for the blackjack game, this function is called automatically.
 * It updates the output for the profit that the user can gain if they win the game.
 */
blackjackCashInput.onkeyup = () => {
    blackjackProfitOutput.value = blackjackCashInput.value * 2;
}
wheelofFortuneCashInput.onkeyup = () => {
    wheelofFortuneProfitOutput.value = wheelofFortuneCashInput.value * 2;
}

randomNumberGuessingSubmit.addEventListener("click", () => {
    randomNumberGuessingLowerBound = randomNumberGuessingLowerBoundInput.value;
    randomNumberGuessingUpperBound = randomNumberGuessingUpperBoundInput.value;
    randomNumberGuessingCash = randomNumberGuessingCashInput.value;
    if (isNaN(randomNumberGuessingLowerBound) === true || Number(randomNumberGuessingLowerBound) < 0 || Number(randomNumberGuessingLowerBound) > 10) {
        window.alert("Invalid lower bound input, must be number between 0-10");
    }
    else if (isNaN(randomNumberGuessingUpperBound) === true || Number(randomNumberGuessingUpperBound) < 1 || Number(randomNumberGuessingUpperBound) > 1000) {
        window.alert("Invalid upper bound input, must be number between 1-1000");
    }
    else if (Number(randomNumberGuessingCash) < 0 || Number(randomNumberGuessingCash) > localStorage.getItem("totalCash")) {
        console.log(randomNumberGuessingCash);
        console.log(localStorage.getItem(totalCash));
        window.alert("Invalid cash input, must be number greater than 0 and less than your total cash.")
    }
    else if (Number(randomNumberGuessingLowerBound) > Number(randomNumberGuessingUpperBound)) {
        window.alert("Lower bound must be less than upper bound.");
    }
    else {
        randomNumber = Math.ceil(Math.random() * (randomNumberGuessingUpperBound - randomNumberGuessingLowerBound));
        console.log(randomNumber);
        randomNumberGuessingProfit = randomNumberGuessingCash * ((randomNumberGuessingUpperBound - randomNumberGuessingLowerBound) + 1);
        guess = window.prompt("Enter Your Guess: ");
        if (guess === null) {
            return;
        }
        if (isNaN(guess) || Number(guess) < randomNumberGuessingLowerBound || Number(guess) > randomNumberGuessingUpperBound) {
            window.alert(`Invalid guess, must be a number between ${randomNumberGuessingLowerBound} and ${randomNumberGuessingUpperBound}`);
        }
        if (Number(guess) === randomNumber) {
            totalCash = totalCash + randomNumberGuessingProfit;
            localStorage.setItem("totalCash", totalCash);
            document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
            window.alert(`You guessed right! You earned $${randomNumberGuessingProfit}`);
        } else {
            window.alert(`You guessed wrong... You lost $${randomNumberGuessingCash}`);
            totalCash = totalCash - randomNumberGuessingCash;
            localStorage.setItem("totalCash", totalCash);
            document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
        }
    }
})

blackjackPlayBtn.addEventListener("click", () => {
    let runOnce = true;
    let blackjackDealerCard;
    let blackjackPlayerCard;
    let blackjackPlayerTotal = 0;
    let blackjackDealerTotal = 0;
    let aceFound = false;
    let choice;
    let hit = false;
    blackjackCash = blackjackCashInput.value;
    if (isNaN(blackjackCash) === true || Number(blackjackCash) <= 0 || Number(blackjackCash) > localStorage.getItem("totalCash")) {
        window.alert("Invalid cash input, must be a number greater than 0 and less than your total cash.")
    }
    else {
        blackjackPlay = true;
        blackjackProfit = blackjackCash * 2;
    }
    while (blackjackPlay === true) {
        if (runOnce) {
            for (let i = 0; i < 2; i++) {
                blackjackPlayerCard = Math.ceil((Math.random() * 13) + 1);
                console.log(blackjackPlayerCard);
                if (blackjackPlayerCard === 2 || blackjackPlayerCard === 3 || blackjackPlayerCard === 4 || blackjackPlayerCard === 5 || blackjackPlayerCard === 6 || blackjackPlayerCard === 7 || blackjackPlayerCard === 8 || blackjackPlayerCard === 9) {
                    blackjackPlayerTotal = blackjackPlayerTotal + blackjackPlayerCard;
                    console.log(blackjackPlayerTotal);
                }
                else if (blackjackPlayerCard === 10 || blackjackPlayerCard === 11 || blackjackPlayerCard === 12 || blackjackPlayerCard === 13) {
                    blackjackPlayerTotal = blackjackPlayerTotal + 10;
                }
                else if (blackjackPlayerCard === 14) {
                    while (aceFound === false) {
                        let ace = window.prompt("You drew an ace, should it be worth 1 or 11?");
                        console.log(Number(ace));
                        if (ace === null) {
                            totalCash = totalCash - blackjackCash;
                            localStorage.setItem("totalCash", totalCash);
                            document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
                            blackjackPlay = false;
                            aceFound = false;
                            return;
                        }
                        if (isNaN(ace) === true && Number(ace) != 1 && Number(ace) != 11) {
                            window.alert("Invalid input, must be a 1 or 11");
                        }
                        else if (Number(ace) == 1) {
                            blackjackPlayerTotal = blackjackPlayerTotal + 1;
                            aceFound = true;
                            console.log("He");
                        }
                        else if (Number(ace) == 11) {
                            blackjackPlayerTotal = blackjackPlayerTotal + 11;
                            aceFound = true;
                            console.log("Hey");
                        }
                    }
                }
                console.log("Yo");
                window.alert(`Your card total is ${blackjackPlayerTotal}`);
            }
            runOnce = false;
        }
        if (hit === false) {
            choice = window.prompt("Hit, Stay, or Double Down?");
        }
        else if (hit === true) {
            choice = window.prompt("Hit or Stay?");
        }
        console.log(choice);
        if (choice === null) {
            totalCash = totalCash - blackjackCash;
            localStorage.setItem("totalCash", totalCash);
            document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
            blackjackPlay = false;
            return;
        }
        if (choice !== "Hit" && choice !== "Stay" && choice !== "Double Down") {
            window.alert("Invalid input, must choose to hit, stay, or double down");
        }
        else if (choice === "Hit") {
            hit = true;
            blackjackPlayerCard = Math.ceil((Math.random() * 13) + 1);
            if (blackjackPlayerCard === 2 || blackjackPlayerCard === 3 || blackjackPlayerCard === 4 || blackjackPlayerCard === 5 || blackjackPlayerCard === 6 || blackjackPlayerCard === 7 || blackjackPlayerCard === 8 || blackjackPlayerCard === 9) {
                blackjackPlayerTotal = blackjackPlayerTotal + blackjackPlayerCard;
            }
            else if (blackjackPlayerCard === 10 || blackjackPlayerCard === 11 || blackjackPlayerCard === 12 || blackjackPlayerCard === 13) {
                blackjackPlayerTotal = blackjackPlayerTotal + 10;
            }
            else if (blackjackPlayerCard === 14) {
                while (aceFound === false) {
                    let ace = window.prompt("You drew an ace, should it be worth 1 or 11?");
                    if (ace === null) {
                        totalCash = totalCash - blackjackCash;
                        localStorage.setItem("totalCash", totalCash);
                        document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
                        blackjackPlay = false;
                        aceFound = false;
                        return;
                    }
                    if (isNaN(ace) === true && Number(ace) != 1 && Number(ace) != 11) {
                        window.alert("Invalid input, must be a 1 or 11");
                    }
                    else if (Number(ace) == 1) {
                        blackjackPlayerTotal = blackjackPlayerTotal + 1;
                        aceFound = true;
                        console.log("He");
                    }
                    else if (Number(ace) == 11) {
                        blackjackPlayerTotal = blackjackPlayerTotal + 11;
                        aceFound = true;
                        console.log("Hey");
                    }
                }
            }
            window.alert(`Your card total is ${blackjackPlayerTotal}`);
            if (blackjackPlayerTotal > 21) {
                window.alert("Your total is over 21, you lose");
                totalCash = totalCash - blackjackCash;
                localStorage.setItem("totalCash", totalCash);
                document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
                blackjackPlay = false;
            }
        }
        else if (choice === "Stay") {
            if (blackjackPlayerTotal > 21) {
                window.alert("Your total is over 21, you lose");
                totalCash = totalCash - blackjackCash;
                localStorage.setItem("totalCash", totalCash);
                document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
                blackjackPlay = false;
            }
            else {
                while (blackjackDealerTotal < 17) {
                    blackjackDealerCard = Math.ceil((Math.random() * 13) + 1);
                    if (blackjackDealerCard === 2 || blackjackDealerCard === 3 || blackjackDealerCard === 4 || blackjackDealerCard === 5 || blackjackDealerCard === 6 || blackjackDealerCard === 7 || blackjackDealerCard === 8 || blackjackDealerCard === 9) {
                        blackjackDealerTotal = blackjackDealerTotal + blackjackDealerCard;
                    }
                    else if (blackjackDealerCard === 10 || blackjackDealerCard === 11 || blackjackDealerCard === 12 || blackjackDealerCard === 13) {
                        blackjackDealerTotal = blackjackDealerTotal + 10;
                    }
                    else if (blackjackDealerCard === 14) {
                        if ((blackjackDealerCard + blackjackDealerTotal) > 21) {
                            blackjackDealerTotal = blackjackDealerTotal + 1;
                        }
                        else if ((blackjackDealerCard + blackjackDealerTotal) <= 21) {
                            blackjackDealerTotal = blackjackDealerTotal + 11;
                        }
                    }
                }
                if (blackjackDealerTotal > 21) {
                    window.alert("The dealer's total is over 21, you win");
                    totalCash = (totalCash - blackjackCash) + blackjackProfit;
                    localStorage.setItem("totalCash", totalCash);
                    document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
                    blackjackPlay = false;
                }
                else if (blackjackDealerTotal === blackjackPlayerTotal) {
                    window.alert("You tied the dealer");
                    totalCash = Number(totalCash - Number(blackjackCash)) + Number(blackjackCash);
                    localStorage.setItem("totalCash", totalCash);
                    document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
                    blackjackPlay = false;
                }
                else if (blackjackDealerTotal > blackjackPlayerTotal) {
                    window.alert(`The dealer drew a total of ${blackjackDealerTotal}, you lose`);
                    totalCash = totalCash - blackjackCash;
                    localStorage.setItem("totalCash", totalCash);
                    document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
                    blackjackPlay = false;
                }
                else if (blackjackPlayerTotal > blackjackDealerTotal) {
                    window.alert(`You drew a total of ${blackjackPlayerTotal}, while the dealer drew a total of ${blackjackDealerTotal}, you win`);
                    if (blackjackPlayerTotal === 21) {
                        totalCash = totalCash + (blackjackProfit * 1.5);
                        localStorage.setItem("totalCash", totalCash);
                        document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
                        blackjackPlay = false;
                    } 
                    else if (blackjackPlayerTotal !== 21){
                        totalCash = totalCash + blackjackProfit;
                        localStorage.setItem("totalCash", totalCash);
                        document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
                        blackjackPlay = false;
                    }
                }
            }
        }
        else if (choice === "Double Down" && hit !== true) {
            blackjackCash = blackjackCash * 2;
            blackjackProfit = blackjackProfit * 2;
            blackjackPlayerCard = Math.ceil((Math.random() * 13) + 1);
            if (blackjackPlayerCard === 2 || blackjackPlayerCard === 3 || blackjackPlayerCard === 4 || blackjackPlayerCard === 5 || blackjackPlayerCard === 6 || blackjackPlayerCard === 7 || blackjackPlayerCard === 8 || blackjackPlayerCard === 9) {
                blackjackPlayerTotal = blackjackPlayerTotal + blackjackPlayerCard;
            }
            else if (blackjackPlayerCard === 10 || blackjackPlayerCard === 11 || blackjackPlayerCard === 12 || blackjackPlayerCard === 13) {
                blackjackPlayerTotal = blackjackPlayerTotal + 10;
            }
            else if (blackjackPlayerCard === 14) {
                while (aceFound === false) {
                    let ace = window.prompt("You drew an ace, should it be worth 1 or 11?");
                    if (ace === null) {
                        totalCash = totalCash - blackjackCash;
                        localStorage.setItem("totalCash", totalCash);
                        document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
                        blackjackPlay = false;
                        aceFound = false;
                        return;
                    }
                    if (isNaN(ace) === true && Number(ace) != 1 && Number(ace) != 11) {
                        window.alert("Invalid input, must be a 1 or 11");
                    }
                    else if (Number(ace) == 1) {
                        blackjackPlayerTotal = blackjackPlayerTotal + 1;
                        aceFound = true;
                        console.log("He");
                    }
                    else if (Number(ace) == 11) {
                        blackjackPlayerTotal = blackjackPlayerTotal + 11;
                        aceFound = true;
                        console.log("Hey");
                    }
                }
            }
            window.alert(`Your card total is ${blackjackPlayerTotal}`);
            if (blackjackPlayerTotal > 21) {
                window.alert("Your total is over 21, you lose");
                totalCash = totalCash - blackjackCash;
                localStorage.setItem("totalCash", totalCash);
                document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
                blackjackPlay = false;
            }
            while (blackjackDealerTotal < 17) {
                blackjackDealerCard = Math.ceil((Math.random() * 13) + 1);
                if (blackjackDealerCard === 2 || blackjackDealerCard === 3 || blackjackDealerCard === 4 || blackjackDealerCard === 5 || blackjackDealerCard === 6 || blackjackDealerCard === 7 || blackjackDealerCard === 8 || blackjackDealerCard === 9) {
                    blackjackDealerTotal = blackjackDealerTotal + blackjackDealerCard;
                }
                else if (blackjackDealerCard === 10 || blackjackDealerCard === 11 || blackjackDealerCard === 12 || blackjackDealerCard === 13) {
                    blackjackDealerTotal = blackjackDealerTotal + 10;
                }
                else if (blackjackDealerCard === 14) {
                    if ((blackjackDealerCard + blackjackDealerTotal) > 21) {
                        blackjackDealerTotal = blackjackDealerTotal + 1;
                    }
                    else if ((blackjackDealerCard + blackjackDealerTotal) <= 21) {
                        blackjackDealerTotal = blackjackDealerTotal + 11;
                    }
                }
            }
            if (blackjackDealerTotal > 21) {
                window.alert("The dealer's total is over 21, you win");
                totalCash = (totalCash - blackjackCash) + blackjackProfit;
                localStorage.setItem("totalCash", totalCash);
                document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
                blackjackPlay = false;
            }
            else if (blackjackDealerTotal === blackjackPlayerTotal) {
                window.alert("You tied the dealer");
                totalCash = Number(totalCash - Number(blackjackCash)) + Number(blackjackCash);
                localStorage.setItem("totalCash", totalCash);
                document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
                blackjackPlay = false;
            }
            else if (blackjackDealerTotal > blackjackPlayerTotal) {
                window.alert(`The dealer drew a total of ${blackjackDealerTotal}, you lose`);
                totalCash = totalCash - blackjackCash;
                localStorage.setItem("totalCash", totalCash);
                document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
                blackjackPlay = false;
            }
            else if (blackjackPlayerTotal > blackjackDealerTotal) {
                window.alert(`You drew a total of ${blackjackPlayerTotal}, while the dealer drew a total of ${blackjackDealerTotal}, you win`);
                if (blackjackPlayerTotal === 21) {
                    totalCash = totalCash + (blackjackProfit * 1.5);
                    localStorage.setItem("totalCash", totalCash);
                    document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
                    blackjackPlay = false;
                } 
                else if (blackjackPlayerTotal !== 21){
                    totalCash = totalCash + blackjackProfit;
                    localStorage.setItem("totalCash", totalCash);
                    document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
                    blackjackPlay = false;
                }
            }
        }
        else if (choice === "Double Down" && hit === true) {
            window.alert('You have already hit, so you cannot double down');
        }
        window.addEventListener("beforeunload", () => {
            if (blackjackPlay === true) {
                window.alert("You will lose your current bet if you leave the page");
                totalCash = totalCash - blackjackCash;
                localStorage.setItem("totalCash", totalCash);
                document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
                blackjackPlay = false;
            }
        })
    }
})

wheelofFortunePlayBtn.addEventListener("click", () => {
    let wheelofFortuneWord;
    let executeOnce = false;
    wheelofFortuneCash = Number(wheelofFortuneCashInput.value);
    if (isNaN(wheelofFortuneCash) || wheelofFortuneCash <= 0 || wheelofFortuneCash > localStorage.getItem("totalCash")) {
        window.alert("Invalid input, must be a number greater than 0 and less than or equal to your current cash");
    }
    else {
        wheelofFortunePlay = true;
        wheelofFortuneProfit = wheelofFortuneCash * 2;
    }
    while (wheelofFortunePlay === true) {
        if (executeOnce === false) {
            wheelofFortuneCategory = wheelofFortuneCategories[Math.floor(Math.random() * wheelofFortuneCategories.length)];
            switch (wheelofFortuneCategory) {
                case "Games":
                    wheelofFortuneWord = wheelofFortuneGames[Math.floor(Math.random() * wheelofFortuneGames.length)];
                    break;
                case "Foods":
                wheelofFortuneWord = wheelofFortuneFoods[Math.floor(Math.random() * wheelofFortuneFoods.length)];
                break;
                case "Movies":
                    wheelofFortuneWord = wheelofFortuneMovies[Math.floor(Math.random() * wheelofFortuneMovies.length)];
                    break;
                case "Music":
                    wheelofFortuneWord = wheelofFortuneMusic[Math.floor(Math.random() * wheelofFortuneMusic.length)];
                    break;
                case "Sports": 
                    wheelofFortuneWord = wheelofFortuneSports[Math.floor(Math.random() * wheelofFortuneSports.length)];
                    break;
                case "Summer":
                    wheelofFortuneWord = wheelofFortuneSummer[Math.floor(Math.random() * wheelofFortuneSummer.length)];
                    break;
                case "Winter":
                    wheelofFortuneWord = wheelofFortuneWinter[Math.floor(Math.random() * wheelofFortuneWinter.length)];
                    break;
                case "Travel":
                    wheelofFortuneWord = wheelofFortuneTravel[Math.floor(Math.random() * wheelofFortuneTravel.length)];
                    break; 
            }
            executeOnce = true;
        }
        window.alert(`The category for your word is ${wheelofFortuneCategory}, press ok to begin guessing`);
        let guessing = true;
        let wheelofFortuneGuess;
        let hiddenWheelofFortuneWord = [""];
        let index = 0;
        splitWheelofFortuneWord = wheelofFortuneWord.split("");
        for (let i = 0; i < (splitWheelofFortuneWord.length - 1); i++) {
            hiddenWheelofFortuneWord.push("_");
        }
        console.log(splitWheelofFortuneWord);
        while (guessing === true) {
            wheelofFortuneGuess = window.prompt(`Guess the word: "${hiddenWheelofFortuneWord.join(" ")}" (Make sure first letter is capitalized)`);
            if (wheelofFortuneGuess === wheelofFortuneWord) {
                window.alert(`You guessed the word "${wheelofFortuneWord}" correctly!`);
                totalCash = totalCash + wheelofFortuneProfit;
                localStorage.setItem("totalCash", totalCash);
                document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
                guessing = false;
                wheelofFortunePlay = false;
            }
            else if (wheelofFortuneGuess === null) {
                window.alert("You did not guess the word");
                totalCash = totalCash - wheelofFortuneProfit;
                localStorage.setItem("totalCash", totalCash);
                guessing = false;
                wheelofFortunePlay = false;
            }
            else {
                if (index < wheelofFortuneWord.length) {
                    window.alert(`Wrong word`);
                    console.log(hiddenWheelofFortuneWord[index]);
                    console.log(splitWheelofFortuneWord[index]);
                    hiddenWheelofFortuneWord[index] = splitWheelofFortuneWord[index];
                    console.log(hiddenWheelofFortuneWord);
                    console.log(splitWheelofFortuneWord);
                    index++;
                    console.log(index);
                    wheelofFortuneProfit = Math.floor(wheelofFortuneProfit / 2);
                }
                else {
                    window.alert(`The word was ${wheelofFortuneWord}, you lost`);
                    totalCash = totalCash - wheelofFortuneCash;
                    localStorage.setItem("totalCash", totalCash);
                    document.getElementById("headerHeading").textContent = `Cash: $${totalCash} -BK's Tycoon- CPS: $${CPS}`;
                    guessing = false;
                    wheelofFortunePlay = false;
                    break;
                }
            }
        }
        wheelofFortunePlay = false;
    }
})

