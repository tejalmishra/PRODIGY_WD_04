/*--Home--*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: '2000',
    reset: true
})
sr.reveal('.rightSection',{delay: 100});
sr.reveal('.leftSection',{delay: 100});
sr.reveal('.heading',{delay: 100});
sr.reveal('.thirdsection',{delay: 100});
sr.reveal('.top-header',{delay: 100});
sr.reveal('.row',{delay: 100});
sr.reveal('.Latest',{delay: 100});



const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: '2000',
    reset: true
})
srLeft.reveal('.secondSection',{interval: 500});
srLeft.reveal('.footer',{delay: 100});
srLeft.reveal('.col',{delay: 100});

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: '2000',
    reset: true
})
srRight.reveal('.skills',{delay: 100});


/*Scrolling to section*/

let sections = document.querySelector('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*= '+id+']').classList.add('active');
            })
        }
    });
}