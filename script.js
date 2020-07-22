let prevNumber=''   //string
let curNumber='0'   //string
let calculationOperator='' //string

const screen = document.querySelector('.screen')
const updateScreen =(number) => {
    screen.value = number                              //merubah screen value ke value masing" button
}

const numbers=document.querySelectorAll(".number")
numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value)
        updateScreen(curNumber)               //panggil function updateScreen
    })
})

const inputNumber=(number)=>{
    if(curNumber === '0'){
        curNumber=number
    }
    else{
        curNumber+=number
    }
}

const operators=document.querySelectorAll(".operator")
operators.forEach((operator)=>{
    operator.addEventListener("click",(event)=>{
        inputOperator(event.target.value)
    })
})

const inputOperator=(operator)=>{
    if(calculationOperator===''){
        prevNumber=curNumber
    }
    calculationOperator=operator
    curNumber=''
}

const equal=document.querySelector('.equal-sign')
equal.addEventListener("click",(event)=>{
    calculate()
    updateScreen(curNumber)
})

const calculate = () =>{
    let result=''
    //brancing
    switch(calculationOperator){
        case '+' : 
            result=parseFloat(prevNumber)+parseFloat(curNumber)
            break
        case '-' :
            result=parseFloat(prevNumber)-parseFloat(curNumber)
            break
        case '*' :
            result=parseFloat(prevNumber)*parseFloat(curNumber)
            break
        case '/' :
            result=parseFloat(prevNumber)/parseFloat(curNumber)
            break
        default :
            return
    }
    curNumber=result
    calculationOperator=''
}

const AC=document.querySelector('.all-clear')
AC.addEventListener("click",(event)=>{
    prevNumber= ''
    curNumber= '0'
    updateScreen(curNumber)
})

const decimal=document.querySelector('.decimal')
decimal.addEventListener("click",(event)=>{
    inputDecimal(event.target.value)
    updateScreen(curNumber)  
})
const inputDecimal=(dot)=>{
    if(curNumber.includes('.')){
        return
    }
    curNumber+=dot
}

const percentage=document.querySelector('.percentage')
percentage.addEventListener("click",(event)=>{
    percen()
    updateScreen(curNumber)
})
const percen=()=>{
    curNumber=parseFloat(curNumber)/100
}