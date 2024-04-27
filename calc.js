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
const inputField = document.getElementById("screen")

//действия с числами
const numbers = document.getElementsByClassName("numbers")
for(let number_btn of numbers){
    number_btn.addEventListener('click',function(e){
        inputField.value += number_btn.textContent //добавление значения кнопки в поле ввода
    })
}
//действия со знаками 
const signs = document.getElementsByClassName("sign")
for(let sign of signs){
    sign.addEventListener('click',function(e){
        if(sign.textContent!=="x") inputField.value += sign.textContent
        else inputField.value+="*"
    })
}
const equal = document.querySelector(".equal")
countClick=0;
equal.addEventListener('click',function(e){
    countClick++;
    let array = inputField.value.split('')
    const operators = ['+','-','*','/']
    let firstArray = []
    let secondArray = []
    let item
    let thirdArray = []
    for(let i=0;i<array.length;i++){
        if(operators.includes(array[i])){
            item=array[i]
            firstArray = array.slice(0,i)
            secondArray = array.slice(i+1,array.length)
            break
        }
    }
    //результат выполнения filter - новый массив
    firstArray = firstArray.filter(element => typeof(element)==='number') // элемент массива element возвращает typeof(element)==='number' которое представляет собой true или false
    secondArray = secondArray.filter(element => typeof(element)==='number') //если возвращается true element сохраняется в массиве, если false то элемент не включается в массив
    /*запись сверху это то же самое что secondArray.filter(
        function(element){return typeof(element)==='number'}
    )*/
    //в резульате filter() в firstArray и secondArray записываются только числа
    thirdArray.push(...firstArray.map(element=>parseInt(element)))//... это оператор для передачи не всего массива, а его элементов последовательно
    thirdArray.push(parseInt(item))
    thirdArray.push(...secondArray.map(element=>parseInt(element)))
    //запись результата в поле ввода
    let result = thirdArray.join("") //[8,6,5] преобразуется в 865
    inputField.value = result
    /*
    function findOperator(operator) {
        return operators.includes(operator)
    }
    */
   //резлуьтат выполнения find - первый элемент в массиве удовлетворяющий условию заданному в функции обратного вызова
    //const foundOperator = array.find(findOperator) //каждый элемент массива будет передан как аргумент в функцию findOperator
    //в foundOperator  записывается первый попавшийся в массиве арифметический знак из числа массива operators
    /*
    switch(item){
            case("*"): {
                const result = _1*_2
                inputField.value+="="+result
            }; break
            case("+"):{
                const result = _1+_2
                inputField.value+="="+result
            }; break
            case("-"):{
                const result = _1-_2
                inputField.value+="="+result
            }; break
            case("/"):{
                const result = _1/_2
                inputField.value+="="+result
            }; break
            default: inputField.value="Ошибка"
        }
    */
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


    

