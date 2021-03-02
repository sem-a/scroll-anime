
const animItems = document.querySelectorAll ('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight; 
            const animItemOffset = offset(animItem).top; // получение высоты
            const animStart = 4; // коэффициент начала анимации, считается как 1/4 блока

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }


            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active'); // добавить класс
            } else {
                if (!animItem.classList.contains('_anim-no-hide')){ //Если добавить этот класс блоку, анимация не будет повторятся
                    animItem.classList.remove('_active'); // отнять класс после прокручивания блока
                }
            }
        }
    }

    function offset(el) { 
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset ||document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + screenLeft }
    }
}



