/* =====================================================
   Ani Cyber Portfolio
   Main JavaScript
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    terminalTyping();
    animateCounters();
    revealOnScroll();
    navbarEffect();

});


/* =====================================================
    Terminal Typing
===================================================== */

function terminalTyping(){

    const element = document.getElementById("typing");

    if(!element) return;

    const lines = [

        "Building secure applications...",
        "Enumerating targets...",
        "Creating HTB Machines...",
        "Learning Red Teaming...",
        "Publishing Writeups...",
        "Researching CVEs..."

    ];

    let line = 0;
    let character = 0;
    let deleting = false;

    function type(){

        const current = lines[line];

        if(!deleting){

            element.textContent = current.substring(0, character);

            character++;

            if(character > current.length){

                deleting = true;

                setTimeout(type,1500);

                return;

            }

        }

        else{

            element.textContent = current.substring(0, character);

            character--;

            if(character < 0){

                deleting = false;

                line++;

                if(line >= lines.length){

                    line = 0;

                }

                character = 0;

            }

        }

        setTimeout(type,deleting ? 40 : 80);

    }

    type();

}


/* =====================================================
    Counter Animation
===================================================== */

function animateCounters(){

    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter=>{

        const target = Number(counter.innerText);

        let value = 0;

        const increment = Math.max(1, target / 100);

        function update(){

            value += increment;

            if(value < target){

                counter.innerText = Math.floor(value);

                requestAnimationFrame(update);

            }

            else{

                counter.innerText = target;

            }

        }

        update();

    });

}


/* =====================================================
    Scroll Reveal
===================================================== */

function revealOnScroll(){

    const cards = document.querySelectorAll(".glass-card");

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("fade-up");

            }

        });

    },{

        threshold:.15

    });

    cards.forEach(card=>observer.observe(card));

}


/* =====================================================
    Navbar Effect
===================================================== */

function navbarEffect(){

    const nav = document.querySelector(".glass-nav");

    if(!nav) return;

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 30){

            nav.style.background="rgba(10,10,18,.88)";

            nav.style.boxShadow="0 8px 24px rgba(0,0,0,.35)";

        }

        else{

            nav.style.background="rgba(12,12,18,.65)";

            nav.style.boxShadow="none";

        }

    });

}


/* =====================================================
    Card Hover Tilt
===================================================== */

document.querySelectorAll(".glass-card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - .5) * -8;

        const rotateY = ((x / rect.width) - .5) * 8;

        card.style.transform =
        `perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateY(-6px)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform =
        "perspective(900px) rotateX(0) rotateY(0)";

    });

});


/* =====================================================
    Mouse Glow
===================================================== */

const glow = document.createElement("div");

glow.style.position="fixed";
glow.style.width="250px";
glow.style.height="250px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background=
"radial-gradient(circle, rgba(139,92,246,.15), transparent 70%)";
glow.style.transform="translate(-50%,-50%)";
glow.style.zIndex="-1";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";

});


/* =====================================================
    Active Navigation
===================================================== */

const current = window.location.pathname;

document.querySelectorAll(".nav-link").forEach(link=>{

    if(link.getAttribute("href") === current){

        link.classList.add("active");

    }

});


/* =====================================================
    Smooth Anchor Scroll
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});