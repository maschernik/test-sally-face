
let ra = localStorage.getItem('ra')

let a = 0 
document.querySelector('.next').addEventListener('click', () =>{
    let pet = document.querySelectorAll(".true")
    for (i = 0; i < pet.length; i ++){
        if(pet[i].checked == 1){
            resultat = pet[i].value
            a += parseInt(resultat)
            console.log(a)
            break
        } else console.log('no')


    }console.log(a + parseInt(ra))
    localStorage.setItem('ra', a + parseInt(ra) )
    
})