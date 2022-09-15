let moneyInput = document.querySelector('.moneyInput');
let MonthsInput = document.querySelector('.MonthsInput');

let calc = document.querySelector('.Calc');
let repeatAll = document.querySelector('.RepeatAll');

let money1 = document.querySelector('.money1');
let money2 = document.querySelector('.money2');
let money3 = document.querySelector('.money3');
let totalMoney = document.querySelector('.total');

function CalcAdkar() {
    AllMoney = moneyInput.value;
    AllMonths = MonthsInput.value;
    if (AllMoney && AllMonths) {
        calcDay = Math.round((AllMoney / (AllMonths * 30)));
        calcWeek = AllMoney / (AllMonths * 4);
        calcMonths = AllMoney / AllMonths;

        money1.textContent = calcDay + " يوميا ";
        money2.textContent = calcWeek + " اسبوعيا ";
        money3.textContent = calcMonths + " شهريا ";
        totalMoney.textContent = AllMoney;


    } else if (!AllMoney) {
        alert("نسيت تعبئة المبلغ");
    } else if (!AllMonths) {
        alert("نسيت تعبئة خانة الأشهر");
    } else {
        alert("نعتذر هناك خطأ");
    }

}
CalcAdkar();
function RepeatAll() {
    moneyInput.value = "";
    MonthsInput.value = "";
}