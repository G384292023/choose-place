
const counttimer = 3;
const btn = document.getElementById("btn");
const count = document.getElementById("count");
const re = document.getElementById("result");
function choosestart(){
    const input = document.getElementById("userInput").value;
    const options = input.split("、").map(item => item.trim()).filter(item => item !== "");
    if(options.length === 0){
        alert("候補を入力してください");
        return;
    }
    btn.style.display = "none";
    countdown(counttimer,options);
}
function countdown(time,options){
    if(time > 0){
        count.textContent = "抽選中..." + time;
        setTimeout(() => countdown(time-1,options),1000);
    } else if (time == 0) {
        count.textContent = "結果を準備中...";
        setTimeout(() => show(options), 2000);
    }
}
function show(options){
    const random = Math.floor(Math.random() * options.length);
    const result = options[random];

    count.textContent = "結果はこちら:";
    re.textContent = result;
    re.style.display = "block";

    setTimeout(() => {
        count.textContent = "---"
    },5000);
    setTimeout(() => {
        btn.style.display = "block";
        re.style.display = "none";
    },5000);
}