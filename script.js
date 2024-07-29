// Initial Loadaing Javascript
function loaderJS(){
    var loadingTimerH5 = document.querySelector('.loading-timer h5');
    var loadingTimer = 0;

    var tl = gsap.timeline();

    tl.from('.loader-line h1', {
        y: 200,
        stagger:0.2,
        duration:0.6,
        delay:0.3
    });

    tl.from('.loading-timer', {
        opacity: 0,
        onStart: function() {
            setInterval(() => {
                if(loadingTimer < 100){
                        loadingTimerH5.innerHTML = loadingTimer++
                } else{
                    loadingTimerH5.innerHTML = loadingTimer
                }
            }, 20);
        }
    }, 'ss');

    tl.to('.loader-line h2', {
        opacity:1,
        animationName: 'loading-text-animation'
    }, 'ss');

    tl.to('#loader', {
        opacity:0,
        duration: 0.4,
        delay: 2
    });

    tl.from('#page1', {
        y:1200,
        opacity: 0,
        ease: "power4",
    });

    tl.to('#loader', {
        display: 'none'
    });

    tl.from('.nav', {
        opacity:0
    }, 'shit');

    tl.from('#hero1 h1, #hero2 h1, #hero3 h3, #hero4 h1', {
        y: 150,
        stagger:0.1,
        duration:0.4,
    }, 'shit');
};

loaderJS();

// Cursor Animation Javascript
function cursorJS(){
    const page2VideoCont = document.querySelector('.page2-video-container');
    const cursor = document.getElementById('crsr');
    
    page2VideoCont.addEventListener('mousemove', (event) => {
        // cursor.style.opacity = 0;
        // console.log(event);
        // gsap.from('.video-m-hover', {
        //     left: event.x,
        //     top: event.y,
        //     duration: 0.3,
        //     ease: 'power1.out',
        //     position: 'fixed',
        // });
    });

    document.addEventListener('mousemove', (elem)=>{
        cursor.style.transform = `translate(${elem.clientX}px, ${elem.clientY}px)`;
    });



    Shery.makeMagnet(".nav-part2 h4"); // Make elements magnet effect
};

cursorJS();

// Page 02 Javascript
