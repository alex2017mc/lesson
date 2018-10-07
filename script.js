let money = +prompt("Ваш бюджет на месяц",""),
    time = prompt("date: Введите дату, YYYY-MM-DD","");


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income:[],
    timeData: time,
    savings: false,
};

for ( let i = 0; i < 2; i++) {
    let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?","");

    if ((typeof(a))==='string' && (typeof(a)) !=null && (typeof(b)) != null 
        && a !='' && b !=''&& a.length < 50 ) {
        console.log("done");
        appData.expenses[a] = b;
        }
    else {
    money = +prompt("Ваш бюджет на месяц",""),
    time = prompt("date: Введите дату, YYYY-MM-DD","");
        a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?","");
        appData.expenses[a] = b;
        } 
} 
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
appData.moneyPerDay = appData.budget / 30;

alert ("Ежедневный бюджет: " + appData.moneyPerDay );
if(appData.moneyPerDay < 100) {
console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Средний уровень достатка");
}  else if (appData.moneyPerDay >  2000){
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
};
