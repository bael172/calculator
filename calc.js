const buttonArray = document.querySelectorAll("button")
let click_count=0;
buttonArray .forEach((btn)=>{
    btn.addEventListener('click',function(e){
        click_count++;
        //анимация затемнения при нажатии кнопки
        btn.style.animationName='darkening_btn'
        btn.style.animationDuration='100ms'
        btn.style.animationDirection='alternate'
        btn.style.animationIterationCount='1'

    })
    btn.addEventListener('animationend',function(e){
        btn.style.animationName='none'
        btn.style.animationDuration=''
        btn.style.animationDirection=''
        btn.style.animationIterationCount=''
    })
})
//Объявление поля ввода
let inputField = document.getElementById("screen")
//Поле вывод ошибок
let error_screen= document.getElementById("error_screen")

//действия с числами
const numbers = document.getElementsByClassName("numbers")
for(let number_btn of numbers){
    number_btn.addEventListener('click',function(e){
        if(inputField.value=='0')inputField.value=''
        inputField.value += number_btn.textContent //добавление значения кнопки в поле ввода
    })
}
//действия со знаками 
const signs = document.getElementsByClassName("sign")
for(let sign of signs){
    sign.addEventListener('click',function(){
        if(inputField.value=='0')inputField.value=''
        if(sign.textContent=="х") { inputField.value+="*"}
        else inputField.value += sign.textContent
        console.log(inputField.value)
    })
}
const equal = document.querySelector(".equal")
countClick=0;
equal.addEventListener('click',function(e){
    countClick++;
    let array = inputField.value.match(/[+-\/*^]|[\d.]+/g) //Разбиваем строку на операторы и числа
    const operators = ["+","-","*","/","^"]
    let firstNumber = []
    let secondNumber = []
    let operatorIndex = -1 //инициализируем индекс арифм. оператора
    let operator //сам оператор
    console.log(array)
    for(let i=0;i<array.length;i++){
        console.log('operator:', array[i])
        if(operators.includes(array[i])){
            operatorIndex=i
            operator = array[i]
            break
        }
        else console.log("Не обнаружены +-/* 1")
    }
    if(operatorIndex!==-1){
        firstNumber = array.slice(0,operatorIndex) //вырезать элементы массива с 0 до не включая operatorIndex
        secondNumber = array.slice(operatorIndex+1) //вырезать элементы массива со следующего после operatorIndex элемента до конца массива
    }
    else console.log("Не обнаружены +-/* 2")
    //результат выполнения filter - новый массив
    firstNumber = firstNumber.filter(element => typeof(element)==='string') // элемент массива element возвращает typeof(element)==='number' которое представляет собой true или false
    secondNumber = secondNumber.filter(element => typeof(element)==='string') //если возвращается true element сохраняется в массиве, если false то элемент не включается в массив
    /*запись сверху это то же самое что secondNumber.filter(
        function(element){return typeof(element)==='number'}
    )*/
    //в резульате filter() в firstNumber и secondNumber записываются только числа
    console.log( "firstNumber=", firstNumber)
    console.log( "secondNumber=", secondNumber)

    let number1 = []
    number1.push(...firstNumber.map(element=>parseInt(element)))//... это оператор для передачи не всего массива, а его элементов последовательно
    number1.join("")
    console.log("number1=", number1)

    let number2 = []
    number2.push(...secondNumber.map(element=>parseInt(element)))
    number2.join("")
    console.log("number2=", number2)
    let result //результат операции
    switch(operator){
        case("+"): result=number1+number2; console.log(result); break
        case("-"): result=number1-number2; console.log(result); break
        case("*"): result=number1*number2; console.log(result); break
        case("/"): result=number1/number2; console.log(result); break
        case("^"): result=Math.pow(number1,number2); console.log(result)
    }
    //запись результата в поле ввода
    inputField.value = result
})
//стирание чисел
const backspace = document.getElementById("backspace")
backspace.addEventListener("click",function(){
    console.log(inputField.value) //string
    inputField.value = inputField.value.split("").slice(0,-1).join("")
})
//числа с запятой
const float = document.getElementById("float")
    let float_count=0
float.addEventListener("click",function(event){
    inputField.value+=float.textContent
    let inputArray = inputField.value.split("") //string -> array
    inputArray = inputArray.filter((element)=>element==',')
    if(inputArray.length>=2) {
        event.preventDefault()
        event.stopPropagation()
        error_screen.value="Ошибка"
    }
    console.log(inputArray)

})

const branches = document.getElementById("branches")
branches.addEventListener("click",function(){
    if(inputField.value.split("").filter((item)=>item=="("))inputField.value+=")"
    else inputField.value+="("
})

const clean = document.getElementById("clean")
clean.addEventListener("click",function(){
    inputField.value=null
})

let firefox_collection = document.getElementsByClassName("firefox")
for(let firefox of firefox_collection){
    let images = firefox.querySelectorAll("img")
    images.forEach(img=>{
        img.addEventListener('load',function(){
            img.style.animation='rotation3D 5s linear alternate infinite'
        })
    })
}


    

