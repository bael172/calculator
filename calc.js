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

const inputField = document.getElementById("screen")

const numbers = document.getElementsByClassName("numbers")
for(let number_btn of numbers){
    number_btn.addEventListener('click',function(e){
        inputField.value += number_btn.textContent //добавление значения кнопки в поле ввода
    })
}
const signs = document.getElementsByClassName("sign")
for(let sign of signs){
    sign.addEventListener('click',function(e){
        inputField.value += number_btn.textContent
    })
}


let firefox_collection = document.getElementsByClassName("firefox")
for(let firefox of firefox_collection){
    let images = firefox.querySelectorAll("img")
    images.forEach(img=>{
        img.addEventListener('load',function(){
            img.style.animation='rotation3D 5s linear alternate infinite'
        })
    })
}


    

