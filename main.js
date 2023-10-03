
//class stosujemy w css +js
const pierwszyNr=document.querySelector('.pierwszyNr');
// <div class="pierwszyNr"></div>
const mathSing=document.querySelector('.mathSing');
//span class="mathSing">+</span>
const curentNr=document.querySelector('.curentNr');
//p class="curentNr">555</p> */
const clearButton=document.querySelector('.clear');
 //<button class="clear">C</button>
const numberButton=document.querySelectorAll('.number');   
//<button class="number">0</button>

const operatorButton=document.querySelectorAll('.operator'); 
    //<button class="operator">/</button> 
const eqButton=document.querySelector('.eq');    
    //<button class="eq">=</button>
const historyButton=document.querySelector('.history-button');    
   // <button class="history-button">cleat history</button>
const historyB_list=document.querySelector('.history');     
   //<ul class="history"></ul>
//powyżej zmienne
//----------------------------------------

   let result='';
//funkcje
function displayNumbers(){
    curentNr.innerHTML+=this.textContent;//w curentNr na górze kalkulatora wpisuje się liczba z panelu
}


function operate(){
    // if(curentNr.textContent===''&&this.textContent==='-'){
    //     curentNr.innerHTML='-';
    //     return; }
        //jeśli pierwszy sybol '-' to w curentNr pojawia sie '-'

    if(curentNr.innerHTML === ''){return;}//operator nie może być pierwszym znakiem poza'-'

    if(mathSing.innerHTML !==''){showResult();}//przejście do kolejnej funkcji

    pierwszyNr.innerHTML=curentNr.innerHTML;//curentNr zmienia się w pierwszyNr i przechodzi do góry
    mathSing.innerHTML=this.textContent; // Ustawia operator na tekst przycisku operatora
    //mathSing.innerHTML=`${cmathSing.innerHTML}`
    curentNr.innerHTML='';//curentNr staje się null
}

function showResult(){
    if(pierwszyNr.innerHTML===''||curentNr.innerHTML==='')return;//jeśli brakuje cyfry a lub b nic nie rób

    let a=Number(curentNr.innerHTML);//zmiana stringa na number
    let b=Number(pierwszyNr.innerHTML);//zmiana stringa na number
    let operator=mathSing.innerHTML;

    switch(operator){
        case'+':
        result=a+b;
        break;
        case'-':
        result=b-a;//bo currentNr staje się pierwszyNr
        break;
        case'/':
        result=b/a;//bo currentNr staje się pierwszyNr
        break;
        case'x':
        result=a*b;
        break;
    }
    
    //addToHistory();
    curentNr.innerHTML=result;
    pierwszyNr.innerHTML='';
    mathSing.innerHTML='';

}

// function addToHistory(){
//     const historyB_list=document.createElement('li');
//     historyB_list.innerHTML=`${curentNr.innerHTML} ${mathSing.innerHTML} ${pierwszyNr.innerHTML} =${result}`
//     historyB_list.classList.add('history-item');
//     calculator-history.appendChild(historyB_list);

// }

function clearScrean(){
    result="";
    curentNr.innerHTML='';
    pierwszyNr.innerHTML='';
    mathSing.innerHTML='';
}

function clearHistory(){}



//---------------------------------------------
   //nasłuchiwanie przycisków
operatorButton.forEach((button)=> button.addEventListener('click', operate));// nasłuchuj na clik, funkcja operate
eqButton.addEventListener('click', showResult);// nasłuchuj na clik, funkcja showResult
clearButton.addEventListener('click', clearScrean);
numberButton.forEach((button)=>{
    button.addEventListener('click', displayNumbers)
});
historyButton.addEventListener('click', clearHistory)