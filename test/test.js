let user_name = document.querySelector(".user_name")
let clicked = document.querySelector('.clicked')

let ok = document.querySelector('.ok')
ok.onclick = function (){
    console.log(user_name.value)
    localStorage.setItem('your_name', user_name.value)
    clicked.innerHTML = `<p>привет `+ user_name.value +`, можешь` +`<a class="web_or" href="test2.html">начать тест</a></p>`

}

