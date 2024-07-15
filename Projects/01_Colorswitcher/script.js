const buttons=document.querySelectorAll('.button')  //select all buttons
const body=document.querySelector('body')  // select body
buttons.forEach((eachButton)=>{

    console.log(eachButton);
    eachButton.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);

        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id;
        }
        
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
        }
        
        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id;
        }
        
        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='purple'){
            body.style.backgroundColor=e.target.id;
        }
    })
})
