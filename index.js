/* initiating the button for submission */

window.onload = function() {
    var addTotal = document.getElementById("farm-button");
    addTotal.onclick = totalProduction;

};

/* getting the values from the form and adding them up */

function totalProduction(){

    var shadeA = parseInt(document.getElementById("totalmilkA").value);
    var shadeB = parseInt(document.getElementById("totalmilkB").value);
    var shadeC = parseInt(document.getElementById("totalmilkC").value);
    var shadeD = parseInt(document.getElementById("totalmilkD").value);
        
    var totalMilk = shadeA + shadeB + shadeC + shadeD;
    
    document.getElementById("milkdisplay").innerHTML = totalMilk + " Liters " ;

    document.getElementById("display-shade-a").innerHTML = "Shade A is "+ shadeA + " Liters " ;
    document.getElementById("display-shade-b").innerHTML = "Shade A is "+ shadeB + " Liters " ;
    document.getElementById("display-shade-c").innerHTML = "Shade A is "+ shadeC + " Liters " ;
    document.getElementById("display-shade-d").innerHTML = "Shade A is "+ shadeD + " Liters " ;

}


    var findIncome = document.getElementById("rate-update");
    findIncome.onclick = incomeOverTime;

/* Finding incomes overtime */

function incomeOverTime(){

    var shadeA = parseInt(document.getElementById("totalmilkA").value);
    var shadeB = parseInt(document.getElementById("totalmilkB").value);
    var shadeC = parseInt(document.getElementById("totalmilkC").value);
    var shadeD = parseInt(document.getElementById("totalmilkD").value);
    var rate = parseInt(document.getElementById("milkrate").value);    
    
    var totalMilk = shadeA + shadeB + shadeC + shadeD;


    var day = 1;
    var week = 7;
    var month = 31;
    var year = 365;

        
        var dailyIncome = day * rate * totalMilk;
        var weeklyIncome = week * rate * totalMilk;
        var monthlyIncome = month * rate * totalMilk;
        var yearlyIncome = year * rate * totalMilk;

    document.getElementById("display-2").innerHTML = dailyIncome + " KSH " ;
    document.getElementById("display-3").innerHTML = monthlyIncome + " KSH " ;
    document.getElementById("display-4").innerHTML = weeklyIncome + " KSH " ;
    document.getElementById("display-5").innerHTML = yearlyIncome + " KSH " ;

}




