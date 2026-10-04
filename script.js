/* =========================================================
   SCROLL REVEAL
   ========================================================= */

const revealElements = document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach((element) => {

    observer.observe(element);

});

/* =========================================================
   SKILLS STAGGERED REVEAL
   ========================================================= */

const skillElements = document.querySelectorAll(".skill-reveal");

const skillObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                skillObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


skillElements.forEach((skill) => {

    skillObserver.observe(skill);

});



/* =========================================================
   PROJECT GALLERIES
   ========================================================= */

/*
   Add additional images to the galleryImages object.

   Example:

   "package-1": [
       "images/package-1.jpg",
       "images/package-1-2.jpg",
       "images/package-1-3.jpg"
   ]
*/

const galleryImages = {

    "Bay Cities": [
        {
            type: "image",
            src: "Assets/Bay Cities/Artwork Single Legs.JPG"
        },
        {
            type:"image",
            src: "Assets/Bay Cities/Artwork 3 Legs.JPG"
        },
        {
            type: "image",
            src: "Assets/Bay Cities/3d Model.JPG"
        },
        {
            type: "image",
            src: "Assets/Bay Cities/Legs Install.JPG"
        },
        {
            type: "image",
            src: "Assets/Bay Cities/20 ft wall.JPG"
        },
        {
            type: "image",
            src: "Assets/Bay Cities/Dieline.JPG"
        },
        {
            type: "video",
            src: "Assets/Bay Cities/Elitron.MOV"
        },
        {
            type: "image",
            src: "Assets/Bay Cities/White Sample.JPG"
        },
        {
            type: "image",
            src: "Assets/Bay Cities/Pallet Display.JPG"
        },
        {
            type: "image",
            src: "Assets/Bay Cities/Shaker Test.JPG"
        },
        {
            type: "image",
            src: "Assets/Bay Cities/Ohana Arch.JPG"
        },
        {
            type: "image",
            src: "Assets/Bay Cities/Diego The Intern.JPG"
        }
    ],

    "Fenty": [
        {
            type: "image",
            src: "Assets/Fenty/Main Thumbnail.jpeg"
        },
        {
            type: "image",
            src: "Assets/Fenty/Second Image.jpeg"
        },
        {
            type: "image",
            src: "Assets/Fenty/Third Image.jpeg"
        },
        {
            type: "image",
            src: "Assets/Fenty/4th image.png"
        }
        

    ],

    /*Print 1*/
    "vision-magazine": [
        {
        type: "image",
        src: "Assets/Vision Magazine/Vision Magazine Publication.png"
        },
        {
            type: "image",
            src: "Assets/Vision Magazine/Vision Magazine Publication8.png"
        },
        {
            type: "image",
            src: "Assets/Vision Magazine/Covers.JPG"
        },
        {
            type: "image",
            src: "Assets/Vision Magazine/Critique.JPG"
        },
        {
            type: "video",
            src: "Assets/Vision Magazine/440 Spot Varnish.mov"
        },
        {
            type: "video",
            src: "Assets/Vision Magazine/AR Experience.mp4"
        }
    ],

    "Cards": [
        {
            type: "image",
            src: "Assets/Cards/Printed Cards.png"
        },
        {
            type: "image",
            src: "Assets/Cards/King Playing Cards.png"
        },
        {
            type: "image",
            src: "Assets/Cards/Queen Playing Cards.png"
        },
        {
            type: "image",
            src: "Assets/Cards/Jack Playing Cards.png"
        },
        {
            type: "image",
            src: "Assets/Cards/Regular Playing Cards.png"
        },
        {
            type: "image",
            src: "Assets/Cards/Back of Playing Cards.png"
        },
        {
            type: "image",
            src: "Assets/Cards/Illustrator File.png"
        },
        {
            type: "image",
            src: "Assets/Cards/Box Design Drosiles.png"
        }
    ],

    "Postcard":[
        {
            type: "image",
            src: "Assets/IS Interior Solutions Postcard/Final Product EDDM.jpeg"
        },
        {
            type: "image",
            src: "Assets/IS Interior Solutions Postcard/OG Ideas.jpeg"
        },
        {
            type: "image",
            src: "Assets/IS Interior Solutions Postcard/t & f AI Iterations.png"
        },
        {
            type: "image",
            src: "Assets/IS Interior Solutions Postcard/Printed Iterations.jpeg"
        },
        {
            type: "image",
            src: "Assets/IS Interior Solutions Postcard/AI Mockup File t.png"
        },
        {
            type: "image",
            src: "Assets/IS Interior Solutions Postcard/AI Mockup File f.png"
        }
    ],

    "KCPR Intro": [
        {
            type: "video",
            src: "Assets/KCPR Intro/KCPR Social Media Intro 4.mp4"
        },
        {
            type: "video",
            src: "Assets/KCPR Intro/Glitch KCPR Intro V3.mp4"
        }
        
    ]

};



function changeImage(button, direction) {

    const gallery = button.closest(".gallery-container");
    const currentSlide = gallery.querySelector(".gallery-image");

    const projectKey = currentSlide.dataset.gallery;
    const slides = galleryImages[projectKey];

    if (!slides) return;

    let currentIndex = Number(currentSlide.dataset.index || 0);

    let newIndex = currentIndex + direction;

    if (newIndex < 0) {
        newIndex = slides.length - 1;
    }

    if (newIndex >= slides.length) {
        newIndex = 0;
    }

    const nextSlide = slides[newIndex];

    let newElement;


    /* CREATE IMAGE OR VIDEO */

    if (nextSlide.type === "video") {

        newElement = document.createElement("video");

        newElement.src = nextSlide.src;

        newElement.autoplay = true;
        newElement.muted = true;
        newElement.loop = true;
        newElement.playsInline = true;

    } else {

        newElement = document.createElement("img");

        newElement.src = nextSlide.src;
        newElement.alt = "Project gallery image";

    }


    /* GIVE IT THE SAME GALLERY INFORMATION */

    newElement.className = "gallery-image";
    newElement.dataset.gallery = projectKey;
    newElement.dataset.index = newIndex;


    /* POSITION BOTH SLIDES */

    currentSlide.style.position = "absolute";
    currentSlide.style.top = "0";
    currentSlide.style.left = "0";

    newElement.style.position = "absolute";
    newElement.style.top = "0";
    newElement.style.left = "0";


    /* PLACE NEW SLIDE OUTSIDE THE GALLERY */

    newElement.style.transform =
        direction > 0
            ? "translateX(100%)"
            : "translateX(-100%)";


    gallery.insertBefore(newElement, currentSlide);


    /* FORCE BROWSER TO RECOGNIZE STARTING POSITION */

    void newElement.offsetWidth;


    /* ADD SLIDE TRANSITIONS */

    currentSlide.style.transition =
        "transform .4s cubic-bezier(.4, 0, .2, 1)";

    newElement.style.transition =
        "transform .4s cubic-bezier(.4, 0, .2, 1)";


    /* SLIDE BOTH AT THE SAME TIME */

    currentSlide.style.transform =
        direction > 0
            ? "translateX(-100%)"
            : "translateX(100%)";

    newElement.style.transform = "translateX(0)";


    /* START VIDEO */

    if (nextSlide.type === "video") {

        newElement.play().catch(() => {
            console.log("Video autoplay was blocked.");
        });

    }


    /* REMOVE OLD SLIDE */

    setTimeout(() => {

        if (currentSlide.tagName === "VIDEO") {
            currentSlide.pause();
        }

        currentSlide.remove();

    }, 400);
}