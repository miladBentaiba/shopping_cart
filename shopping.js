function shopping(){
    //like or undo like a product
    let x = document.querySelectorAll('a.heart i');
    for(let i of x)
        i.addEventListener("click",  (e) =>{(e.target.style.color=="red") ? e.target.style.color="gray":e.target.style.color="red"});

    //remove a product and update the total
    let y = document.querySelectorAll('button.action');
    for(let i of y){
      i.addEventListener("click",  (e) =>{
        let x= e.target.parentNode
        if(x.nodeName =="BUTTON") x=x.parentNode
        //update the total before remove
        let total =document.querySelector('#total')
        let unit =x.querySelector('.price').innerText
        let quantity=x.querySelector('.quantity').innerText
        total.innerText= parseInt(total.innerText) -parseInt(unit)*parseInt(quantity)
        x.remove()
     });
    }

    //increment quantity and update the total
    let z = document.querySelectorAll('.increment');
    for(let i of z){
      i.addEventListener("click",  (e) =>{
        /***** increment quantity *****/
        let x=e.target.parentNode.querySelector('.quantity')
        x.innerText=(parseInt(x.innerText))+1
       
        /***** update the total *****/
        let total =document.querySelector('#total')
        let unit =e.target.parentNode.querySelector('.price').innerText
        total.innerText= parseInt(total.innerText)+parseInt(unit)
     });
    }

    //decrement quantity and update the total
    let w = document.querySelectorAll('.decrement');
    for(let i of w){
      i.addEventListener("click",  (e) =>{
        /***** increment quantity *****/
        let x=e.target.parentNode.querySelector('.quantity')
        if (parseInt(x.innerText)>0) {
            x.innerText=(parseInt(x.innerText))-1
            let total =document.querySelector('#total')
            let unit =e.target.parentNode.querySelector('.price').innerText
            total.innerText= parseInt(total.innerText)-parseInt(unit)
        }
     });
    }
}