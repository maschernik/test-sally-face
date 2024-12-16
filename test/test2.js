let your_name = localStorage.getItem('your_name')
let text = document.querySelector('.text')

window.onload = function(){
    text.innerHTML = ` <b>`+ your_name + `</b>` + `, теперь ты можешь ответить на вопросы`
    console.log(your_name)
}
let a = 0 
document.querySelector('.next').addEventListener('click', () =>{
    let res = document.querySelectorAll(".true")
    for (i = 0; i < res.length; i ++){
        if(res[i].checked == 1){
            resultat = res[i].value
            a += parseInt(resultat)
            
            console.log(a)
           

            break
        } else console.log('no')


    }console.log(a)
    localStorage.setItem('ra', a)
    
})
