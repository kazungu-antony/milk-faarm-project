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
}


    var findIncome = document.getElementById("rate-update");
    findIncome.onclick = incomeOverTime;

/* Finding incomes overtime */

function incomeOverTime(){
    var rate = parseInt(document.getElementById("milkrate").value);

    var day = 1;
    var week = 7;
    var month = 31;
    var year = 365;

        
        var dayilyIncome = day * rate;
        var weeklyIncome = week * rate;
        var monthlyIncome = month * rate;
        var yearlyIncome = year * rate;


    document.getElementById("display-2").innerHTML = dailyIncome + " KSH " ;
    document.getElementById("display-3").innerHTML = monthlyIncome + " KSH " ;
    document.getElementById("display-4").innerHTML = weeklyIncome + " KSH " ;
    document.getElementById("display-5").innerHTML = yearlyIncome + " KSH " ;

}


