let your_name = localStorage.getItem('your_name')
let ra = localStorage.getItem('ra')
let res = document.querySelector('.res')
let img = document.querySelector('.img')
window.onload = function(){
    res.innerHTML = your_name + `, ты знаешь игру на ` + ra + ` из 3`
    
}

if (ra == 0){
    img.innerHTML = `<img src="C:/Users/devoc/Documents/IT codes/test/1661543750_preview_1577032669_1565896554_salli-fejs-arty-19.png" alt="not good">`
} else if((ra == 1 ) || (ra ==2)) {
    img.innerHTML = `<img src="C:/Users/devoc/Documents/IT codes/test/i.webp" alt="not good">`

} else if (ra == 3){
    img.innerHTML = `<img src="C:/Users/devoc/Documents/IT codes/test/77e78272c2a12498ae35eb092858913c.jpg" alt="greid">`
    
} else{
    imd.innerHTML = `good`
}