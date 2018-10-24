
export function Popup () {
    let popup_menu = document.getElementById("popup_menu");
    let menu_handler = document.getElementById("menu_handler");
    let menuClose = document.getElementById('menuClose');
    let blackwrap = document.getElementById('blackwrap');
   
    let worksPage = document.getElementById('worksPage');
    let menuColor = document.getElementById('menuColor');
    let menuIcon = document.getElementById('menuIcon');
    let writetome = document.getElementById('writetome');
    let formContainer = document.getElementById('formContainer');
    let ballTwo = document.getElementById('ballTwo');
    let skills = document.getElementById('skills');
    let works = document.getElementById('works');

    
    menu_handler.addEventListener("click", () => {
        popup_menu.classList.add('open')
    })
    menuClose.addEventListener("click", () => {
        popup_menu.classList.remove('open')
        formContainer.classList.remove('open') 
        
    })
    blackwrap.addEventListener("click", () => {
        popup_menu.classList.remove('open')
    })
    writetome.addEventListener('click', () => {
        formContainer.classList.toggle('open') 
    })
    skills.addEventListener('click', () => {
        popup_menu.classList.remove('open')
    })
    works.addEventListener('click', () => {
        popup_menu.classList.remove('open')
    })

 

    const removeMenuName = ( pos ) => {
        const menu = document.getElementById('menu_handler');
        console.log('in func', pos);
        
        if( pos < 0){
            menu.classList.add('removeText');
        } else {
            menu.classList.remove('removeText');
        }
       
       
    }


    document.addEventListener('scroll', () => {
        let skillPage = document.getElementById('skillPage');
        let wrapper = document.getElementById('wrapper');
        
        let top = skillPage.getBoundingClientRect().top;
        let topWorks = worksPage.getBoundingClientRect().top;
        let topSitePosition = wrapper.getBoundingClientRect().top;
        
        removeMenuName(topSitePosition);

        if( top < 100 && topWorks > 100){
            menuIcon.classList.add('menuIconWhite');
            menuColor.classList.add('white');
            ballTwo.classList.add('white');
        } else if( top > 100 ){
            menuIcon.classList.remove('menuIconWhite');
            menuColor.classList.remove('white');
            ballTwo.classList.remove('white');
        }else if( topWorks < 100 ){
            menuIcon.classList.remove('menuIconWhite');
            menuColor.classList.remove('white');
            ballTwo.classList.remove('white');
        }

    })

}
