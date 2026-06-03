/* =====================================================
   JIMMY OLIVA
   EXECUTIVE CYBER PREMIUM
   APP.JS
===================================================== */


/* =====================================================
   TYPEWRITER EFFECT
===================================================== */

const texts = [

"Executive Commercial Leader",
"Business Intelligence Specialist",
"Digital Transformation Consultant",
"AI Enabled Business Executive",
"Retail Pharma & FMCG Expert",
"Operations & Growth Strategist"

];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === texts.length){

        count = 0;

    }

    currentText = texts[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing-text").textContent = letter;

    if(letter.length === currentText.length){

        setTimeout(() => {

            erase();

        },1500);

        return;

    }

    setTimeout(type,70);

})();

function erase(){

    letter = currentText.slice(0,--index);

    document.getElementById("typing-text").textContent = letter;

    if(letter.length === 0){

        count++;

        setTimeout(type,300);

        return;

    }

    setTimeout(erase,40);

}


/* =====================================================
   KPI COUNTER ANIMATION
===================================================== */

const counters = document.querySelectorAll(".counter");

const startCounter = (entry)=>{

    if(entry.isIntersecting){

        const counter = entry.target;

        const target = +counter.dataset.target;

        let current = 0;

        const increment = target / 80;

        const updateCounter = ()=>{

            if(current < target){

                current += increment;

                counter.innerText = Math.ceil(current);

                requestAnimationFrame(updateCounter);

            }else{

                counter.innerText = target;

            }

        }

        updateCounter();

        observerCounter.unobserve(counter);

    }

}

const observerCounter = new IntersectionObserver((entries)=>{

    entries.forEach(startCounter);

},{threshold:.5});

counters.forEach(counter=>{

    observerCounter.observe(counter);

});


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(

".impact-box, .ai-card, .portfolio-card, .highlight-card, .journey-item"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},

{

    threshold:.15

}

);

revealElements.forEach(el=>{

    el.classList.add("hidden");

    revealObserver.observe(el);

});


/* =====================================================
   ACTIVE NAVBAR SECTION
===================================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


/* =====================================================
   SMOOTH SCROLL
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        target.scrollIntoView({

            behavior:"smooth",

            block:"start"

        });

    });

});


/* =====================================================
   TIMELINE STAGGER ANIMATION
===================================================== */

const timelineItems = document.querySelectorAll(

".journey-item"

);

const timelineObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach((entry,index)=>{

        if(entry.isIntersecting){

            setTimeout(()=>{

                entry.target.classList.add("show");

            },index * 150);

        }

    });

},

{

    threshold:.15

}

);

timelineItems.forEach(item=>{

    item.classList.add("hidden");

    timelineObserver.observe(item);

});


/* =====================================================
   PARALLAX HERO IMAGE
===================================================== */

window.addEventListener("scroll",()=>{

    const heroImage = document.querySelector(".hero-right img");

    if(heroImage){

        let scrollY = window.scrollY;

        heroImage.style.transform =

        `translateY(${scrollY * 0.08}px)`;

    }

});


/* =====================================================
   GLOW EFFECT CARDS
===================================================== */

const cards = document.querySelectorAll(

".impact-box, .highlight-card, .portfolio-card"

);

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.background =

        `radial-gradient(circle at ${x}px ${y}px,

        rgba(0,194,255,.15),

        #101E2D 45%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background = "#101E2D";

    });

});


/* =====================================================
   NAVBAR SHRINK EFFECT
===================================================== */

window.addEventListener("scroll",()=>{

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.classList.add("navbar-scrolled");

    }else{

        navbar.classList.remove("navbar-scrolled");

    }

});


/* =====================================================
   PRELOADER FINISH EFFECT
===================================================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});
// ROADMAP AUTO SCROLL

const roadmap =
document.querySelector(".roadmap-container");

if(roadmap){

setInterval(()=>{

roadmap.scrollBy({
left:220,
behavior:"smooth"
});

if(
roadmap.scrollLeft +
roadmap.clientWidth >=
roadmap.scrollWidth
){

roadmap.scrollTo({
left:0,
behavior:"smooth"
});

}

},4000);

}
/* =====================================================
   EXECUTIVE MEDIA CENTER
===================================================== */

const modal =
document.getElementById("mediaModal");

const modalContent =
document.getElementById("modalContent");

function openVideo(){

modal.style.display="flex";

modalContent.innerHTML=`

<video controls autoplay>

<source
src="assets/material/video_jimmy.mp4"
type="video/mp4">

</video>

`;

}

function openPodcast(){

modal.style.display="flex";

modalContent.innerHTML=`

<audio controls autoplay>

<source
src="assets/material/podcast_jimmy.m4a"
type="audio/mpeg">

</audio>

`;

}

function openPDF(pdfFile){

modal.style.display="flex";

modalContent.innerHTML=`
<iframe
src="${pdfFile}#zoom=page-width">
</iframe>
`;

}

function closeModal(){

modal.style.display="none";

modalContent.innerHTML="";

}

window.onclick=function(event){

if(event.target===modal){

closeModal();

}

}