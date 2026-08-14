/* ==========================================
   NAVIGATION ELEMENTS
========================================== */

const navbar =
    document.getElementById("navbar");

const progressBar =
    document.getElementById("scroll-progress");

const sections =
    document.querySelectorAll(".section");

const navLinks =
    document.querySelectorAll(".nav-link");


/* ==========================================
   COLOR SYSTEM

   Each point represents the main accent
   color for a part of the page.
========================================== */

const colorStops = [

    {
        r: 45,
        g: 125,
        b: 230
    },

    {
        r: 225,
        g: 90,
        b: 150
    },

    {
        r: 55,
        g: 175,
        b: 125
    },

    {
        r: 240,
        g: 150,
        b: 65
    },

    {
        r: 135,
        g: 90,
        b: 220
    }

];


/* ==========================================
   COLOR INTERPOLATION
========================================== */

function interpolateColor(
    first,
    second,
    amount
) {

    const r =
        Math.round(
            first.r +
            (second.r - first.r) *
            amount
        );

    const g =
        Math.round(
            first.g +
            (second.g - first.g) *
            amount
        );

    const b =
        Math.round(
            first.b +
            (second.b - first.b) *
            amount
        );

    return {
        r,
        g,
        b
    };

}


/* ==========================================
   RGB STRING
========================================== */

function rgb(color) {

    return `
        rgb(
            ${color.r},
            ${color.g},
            ${color.b}
        )
    `;

}


/* ==========================================
   CREATE LIGHTER COLOR
========================================== */

function createLightColor(color) {

    /*
        Mix the accent color with white.

        88% white means the background
        remains very light.
    */

    const mix = 0.88;

    const r =
        Math.round(
            color.r +
            (255 - color.r) * mix
        );

    const g =
        Math.round(
            color.g +
            (255 - color.g) * mix
        );

    const b =
        Math.round(
            color.b +
            (255 - color.b) * mix
        );

    return `rgb(${r}, ${g}, ${b})`;

}


/* ==========================================
   CREATE EVEN LIGHTER SECONDARY COLOR
========================================== */

function createSecondaryColor(color) {

    const mix = 0.95;

    const r =
        Math.round(
            color.r +
            (255 - color.r) * mix
        );

    const g =
        Math.round(
            color.g +
            (255 - color.g) * mix
        );

    const b =
        Math.round(
            color.b +
            (255 - color.b) * mix
        );

    return `rgb(${r}, ${g}, ${b})`;

}


/* ==========================================
   UPDATE COLORS
========================================== */

function updateColors() {

    const scrollTop =
        window.scrollY;

    const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;


    if (maxScroll <= 0) {

        return;

    }


    /*
        Convert scroll position into
        a value between 0 and 1.
    */

    const scrollPercentage =
        scrollTop / maxScroll;


    /*
        There are 5 colors.

        Convert 0 → 1 into
        0 → 4.
    */

    const scaledPosition =
        scrollPercentage *
        (colorStops.length - 1);


    let index =
        Math.floor(scaledPosition);


    /*
        Prevent going beyond
        the final color.
    */

    if (
        index >=
        colorStops.length - 1
    ) {

        index =
            colorStops.length - 2;

    }


    /*
        Amount between the
        two colors.
    */

    const amount =
        scaledPosition - index;


    const currentColor =
        interpolateColor(
            colorStops[index],
            colorStops[index + 1],
            amount
        );


    /* ======================================
       ACCENT COLOR
    ====================================== */

    document.documentElement.style
        .setProperty(
            "--accent",
            rgb(currentColor)
        );


    /* ======================================
       LIGHT BACKGROUND

       This is the important part.

       The background follows the
       accent color.
    ====================================== */

    const lightBackground =
        createLightColor(
            currentColor
        );


    document.documentElement.style
        .setProperty(
            "--background",
            lightBackground
        );


    /* ======================================
       SECONDARY BACKGROUND
    ====================================== */

    const secondaryBackground =
        createSecondaryColor(
            currentColor
        );


    document.documentElement.style
        .setProperty(
            "--background-secondary",
            secondaryBackground
        );


    /* ======================================
       LIGHT ACCENT
    ====================================== */

    document.documentElement.style
        .setProperty(
            "--accent-light",
            `
            rgba(
                ${currentColor.r},
                ${currentColor.g},
                ${currentColor.b},
                0.10
            )
            `
        );


    /* ======================================
       PATTERN COLOR
    ====================================== */

    document.documentElement.style
        .setProperty(
            "--pattern",
            `
            rgba(
                ${currentColor.r},
                ${currentColor.g},
                ${currentColor.b},
                0.15
            )
            `
        );

}


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

function updateActiveNavigation() {

    let currentSection = "";


    sections.forEach(
        function(section) {

            const sectionTop =
                section.offsetTop -
                window.innerHeight * 0.45;

            const sectionBottom =
                sectionTop +
                section.offsetHeight;


            if (
                window.scrollY >=
                sectionTop &&

                window.scrollY <
                sectionBottom
            ) {

                currentSection =
                    section.getAttribute(
                        "id"
                    );

            }

        }
    );


    navLinks.forEach(
        function(link) {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


/* ==========================================
   SCROLL PROGRESS
========================================== */

function updateProgress() {

    const scrollTop =
        window.scrollY;

    const maxScroll =
        document.documentElement
            .scrollHeight -
        window.innerHeight;


    if (maxScroll <= 0) {

        return;

    }


    const percentage =
        (scrollTop / maxScroll) * 100;


    progressBar.style.width =
        percentage + "%";

}


/* ==========================================
   NAVBAR SHADOW
========================================== */

function updateNavbar() {

    if (
        window.scrollY > 30
    ) {

        navbar.style.boxShadow =
            `
            0 18px 50px
            rgba(55, 65, 85, 0.16)
            `;

    } else {

        navbar.style.boxShadow =
            `
            0 12px 40px
            rgba(55, 65, 85, 0.10)
            `;

    }

}


/* ==========================================
   MAIN SCROLL EVENT
========================================== */

window.addEventListener(
    "scroll",
    function() {

        updateColors();

        updateActiveNavigation();

        updateProgress();

        updateNavbar();

    }
);


/* ==========================================
   INITIAL LOAD
========================================== */

updateColors();

updateActiveNavigation();

updateProgress();

updateNavbar();