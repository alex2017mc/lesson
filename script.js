let money, time;
function start() {
        money = +prompt("Ваш бюджет на месяц","");
        time = prompt("date: Введите дату, YYYY-MM-DD","");

        while(isNaN(money) || money == "" || money == null) {
             money = +prompt("Ваш бюджет на месяц","");
            }
}
start();
let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income:[],
    timeData: time,
    savings: true,
    chooseExpenses: function(){ for ( let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?","");
    
        if ((typeof(a))==='string' && (typeof(a)) !=null && (typeof(b)) != null 
            && a !='' && b !=''&& a.length < 50 ) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
        }
    }, 
    detectDayBudget: function () {
        appData.budjet = money;
    appData.moneyPerDay = (appData.budjet/ 30).toFixed(1);
    //toFixed(1); Округление значения после запятой на 1 знак и retun строку
    alert(" бюджет на день " + appData.moneyPerDay);
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
                console.log("Средний уровень достатка");
            }  else if (appData.moneyPerDay >  2000){
                console.log("Высокий уровень достатка");
            } else {
                console.log("Произошла ошибка");
            }
        },
    checkSavings: function(){
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
            percent = -prompt("Под какой процент?");
            appData.monthIncome =save/100/12+percent;
    
        alert("Доход в месяц с вашего депозита" + appData.monthIncome);
        }
    },

    chooseOptExpenses: function(){
        for (let i=1; i<3; i++) {
            let opt = prompt("Статья необязательных расходов","");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function (){
        let item= prompt("Что принесет дополнительный доход?(Перечислете через запятую)", "");
        appData.income = item.split(', '); 
        appData.income.push (prompt("Может что-то еще?"));
        appData.income.sort ();
        while(isNaN(income) || income == "" || income == null) {
            item= prompt("Что принесет дополнительный доход?(Перечислете через запятую)", "");
        }
    }
};      
/*через do и while
do {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?","");
    i++;
if ((typeof(a))==='string' && (typeof(a)) !=null && (typeof(b)) != null 
    && a !='' && b !=''&& a.length < 50 ) {
    console.log("done");
    appData.expenses[a] = b;
} else {
    money = +prompt("Ваш бюджет на месяц",""),
    time = prompt("date: Введите дату, YYYY-MM-DD","");
    a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?","");
    appData.expenses[a] = b;
} while (1 < 2); 
в while записываем условие */

/* Через While
While (1<2) {  
    let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?","");
    i++;
if ((typeof(a))==='string' && (typeof(a)) !=null && (typeof(b)) != null 
    && a !='' && b !=''&& a.length < 50 ) {
    console.log("done");
    appData.expenses[a] = b;
} else {
    money = +prompt("Ваш бюджет на месяц",""),
    time = prompt("date: Введите дату, YYYY-MM-DD","");
    a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?","");
    appData.expenses[a] = b;
}   
} */
