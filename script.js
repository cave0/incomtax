// Centralized tax calculation function
function calculateTax(income, slabs) {
    if (isNaN(income) || income <= 0) {
        return "Please enter a valid positive income.";
    }

    let tax = 0;
    let previousLimit = 0;

    for (let { limit, rate } of slabs) {
        if (income > previousLimit) {
            let taxableAmount = Math.min(income - previousLimit, limit - previousLimit);
            tax += taxableAmount * rate;
            previousLimit = limit;
        } else {
            break;
        }
    }
    var  finalTax = Math.round(parseFloat(tax) + parseFloat(tax*0.04));
    return "₹ " +  finalTax ;
}

// Function for old tax calculation
function incomeOld() {
    let income = parseFloat(document.getElementById("oldTaxIncome").value);
    let slabs = [
        { limit: 250000, rate: 0 },
        { limit: 500000, rate: 0.05 },
        { limit: 1000000, rate: 0.20 },
        { limit: Infinity, rate: 0.30 }
    ];
    if(income>500000)        
        document.getElementById("resultOld").innerHTML = "Your Income old Tax: " + calculateTax(income, slabs);
        else
        document.getElementById("resultOld").innerHTML = "Your Income old Tax: " + calculateTax(income-income+1, slabs);
}

// Function for new tax calculation
function incomeNew() {
    let income = parseFloat(document.getElementById("newTaxIncome").value);
   
    let slabs = [
        { limit: 300000, rate: 0 },
        { limit: 700000, rate: 0.05 },
        { limit: 1000000, rate: 0.10 },
        { limit: 1200000, rate: 0.15 },
        { limit: 1500000, rate: 0.20 },
        { limit: Infinity, rate: 0.30 }
    ];
   
    if(income>700000)    
    document.getElementById("resultNew").innerHTML = "Your Income new Tax: " + calculateTax(income, slabs);
    else
    document.getElementById("resultNew").innerHTML = "Your Income new Tax: " + calculateTax(income-income+1, slabs);
}

document.addEventListener('contextmenu', event => event.preventDefault());
