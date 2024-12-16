
let ra = localStorage.getItem('ra')

let a = 0 
document.querySelector('.next').addEventListener('click', () =>{
    let old = document.querySelectorAll(".true")
    for (i = 0; i < old.length; i ++){
        if(old[i].checked == 1){
            resultat = old[i].value
            a += parseInt(resultat)
            
            console.log(a)
           

            break
        } else console.log('no')


    }console.log(a + parseInt(ra))
    localStorage.setItem('ra', a + parseInt(ra) )
    
})