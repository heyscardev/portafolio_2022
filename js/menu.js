let botones_menu = document.getElementsByClassName("menu-navigation-link") ;

Array.prototype.forEach.call(botones_menu,element => {
    element.onclick =  (event)=>{
        document.getElementById("check-menu").checked = false;
        return true;
    } 
})
