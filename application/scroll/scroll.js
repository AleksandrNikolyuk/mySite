export function scrollPages(){
    let linkNav = document.querySelectorAll('[href^="#worksPage"], [href^="#skillPage"], [href^="#tittleBlock"]');
    linkNav.forEach(function(item){
        item.addEventListener('click', function(e){
            e.preventDefault();
            let topPage = window.pageYOffset,
                element = this.href.replace(/[^#]*(.*)/, '$1'),
                stopPage = document.querySelector(element).getBoundingClientRect().top,
                start = null,
                speed = 0.2;

            function Some (time) {
                if (start === null) {
                    start = time;
                }
                let whatTime = time - start,
                    nowPage = null;

                if (stopPage < 0) {
                    nowPage = Math.max(topPage - whatTime / speed, topPage + stopPage);
                } else {
                    nowPage = Math.min(topPage + whatTime / speed, topPage + stopPage);
                }
                window.scrollTo(0, nowPage);
                if (nowPage != topPage + stopPage) {
                 requestAnimationFrame(Some);
                }
            }
            requestAnimationFrame(Some);
        });
    });
}