/* =========================================================
   HOT POT RESTAURANT
   PART 4 — JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       01. HEADER ELEMENTS
    ===================================================== */

    const siteHeader =
        document.getElementById("siteHeader");

    const hamburgerBtn =
        document.getElementById("hamburgerBtn");

    const mobileMenu =
        document.getElementById("mobileMenu");


    /* =====================================================
       02. RTL BUTTONS
    ===================================================== */

    const rtlToggle =
        document.getElementById("rtlToggle");

    const mobileRtlToggle =
        document.getElementById("mobileRtlToggle");


    /* =====================================================
       03. DARK MODE BUTTONS
    ===================================================== */

    const darkModeToggle =
        document.getElementById("darkModeToggle");

    const mobileDarkModeToggle =
        document.getElementById(
            "mobileDarkModeToggle"
        );


    /* =====================================================
       04. MOBILE HOME DROPDOWN
    ===================================================== */

    const mobileHasDropdown =
        document.querySelector(
            ".mobile-has-dropdown"
        );

    const mobileDropdownToggle =
        document.querySelector(
            ".mobile-dropdown-toggle"
        );


    /* =====================================================
       05. CHECK HEADER
    ===================================================== */

    if (!siteHeader) {

        console.warn(
            "Header element #siteHeader was not found."
        );

        return;

    }


    /* =====================================================
       06. HAMBURGER OPEN / CLOSE
    ===================================================== */

    function openMobileMenu() {

        siteHeader.classList.add(
            "menu-open"
        );

        document.body.classList.add(
            "menu-open"
        );

        if (hamburgerBtn) {

            hamburgerBtn.setAttribute(
                "aria-expanded",
                "true"
            );

            hamburgerBtn.setAttribute(
                "aria-label",
                "Close navigation menu"
            );

        }

    }


    function closeMobileMenu() {

        siteHeader.classList.remove(
            "menu-open"
        );

        document.body.classList.remove(
            "menu-open"
        );

        if (hamburgerBtn) {

            hamburgerBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            hamburgerBtn.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    }


    function toggleMobileMenu() {

        const isOpen =
            siteHeader.classList.contains(
                "menu-open"
            );


        if (isOpen) {

            closeMobileMenu();

        } else {

            openMobileMenu();

        }

    }


    /* =====================================================
       07. HAMBURGER CLICK
    ===================================================== */

    if (hamburgerBtn) {

        hamburgerBtn.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                toggleMobileMenu();

            }
        );

    }


    /* =====================================================
       08. MOBILE HOME DROPDOWN
    ===================================================== */

    if (
        mobileDropdownToggle &&
        mobileHasDropdown
    ) {

        mobileDropdownToggle.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();


                const isOpen =
                    mobileHasDropdown.classList.toggle(
                        "active"
                    );


                mobileDropdownToggle.setAttribute(
                    "aria-expanded",
                    isOpen
                );

            }
        );

    }


    /* =====================================================
       09. MOBILE HOME DROPDOWN LINKS
    ===================================================== */

    const mobileDropdownLinks =
        document.querySelectorAll(
            ".mobile-dropdown-link"
        );


    mobileDropdownLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    closeMobileMenu();

                }
            );

        }
    );


    /* =====================================================
       10. MOBILE NORMAL NAVIGATION LINKS
    ===================================================== */

    const mobileNormalLinks =
        document.querySelectorAll(
            ".mobile-nav-menu > .mobile-nav-item > a"
        );


    mobileNormalLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    closeMobileMenu();

                }
            );

        }
    );


    /* =====================================================
       11. MOBILE LOGIN / DASHBOARD
    ===================================================== */

    const mobileActionLinks =
        document.querySelectorAll(
            ".mobile-login-btn, .mobile-dashboard-btn"
        );


    mobileActionLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    closeMobileMenu();

                }
            );

        }
    );


    /* =====================================================
       12. RTL MODE FUNCTION
    ===================================================== */

    function setRTLMode(enabled) {

        if (enabled) {

            document.documentElement.setAttribute(
                "dir",
                "rtl"
            );

            document.documentElement.setAttribute(
                "lang",
                "ar"
            );

            localStorage.setItem(
                "hotpot-rtl",
                "true"
            );

        } else {

            document.documentElement.setAttribute(
                "dir",
                "ltr"
            );

            document.documentElement.setAttribute(
                "lang",
                "en"
            );

            localStorage.setItem(
                "hotpot-rtl",
                "false"
            );

        }

    }


    /* =====================================================
       13. GET CURRENT RTL STATE
    ===================================================== */

    function isRTL() {

        return (
            document.documentElement.getAttribute(
                "dir"
            ) === "rtl"
        );

    }


    /* =====================================================
       14. DESKTOP RTL BUTTON
    ===================================================== */

    if (rtlToggle) {

        rtlToggle.addEventListener(
            "click",
            function () {

                setRTLMode(
                    !isRTL()
                );

            }
        );

    }


    /* =====================================================
       15. MOBILE RTL BUTTON
    ===================================================== */

    if (mobileRtlToggle) {

        mobileRtlToggle.addEventListener(
            "click",
            function () {

                setRTLMode(
                    !isRTL()
                );

            }
        );

    }


    /* =====================================================
       16. DARK MODE FUNCTION
    ===================================================== */

    function setDarkMode(enabled) {

        if (enabled) {

            document.body.classList.add(
                "dark-mode"
            );

            localStorage.setItem(
                "hotpot-dark-mode",
                "true"
            );

        } else {

            document.body.classList.remove(
                "dark-mode"
            );

            localStorage.setItem(
                "hotpot-dark-mode",
                "false"
            );

        }

        updateDarkModeIcons();

    }


    /* =====================================================
       17. UPDATE DARK MODE ICONS
    ===================================================== */

    function updateDarkModeIcons() {

        const icons =
            document.querySelectorAll(
                ".dark-mode-icon i, .mobile-dark-icon i"
            );


        const darkMode =
            document.body.classList.contains(
                "dark-mode"
            );


        icons.forEach(
            function (icon) {

                icon.classList.remove(
                    "fa-moon",
                    "fa-sun"
                );


                if (darkMode) {

                    icon.classList.add(
                        "fa-sun"
                    );

                } else {

                    icon.classList.add(
                        "fa-moon"
                    );

                }

            }
        );


        /* Update button accessibility */

        if (darkModeToggle) {

            darkModeToggle.setAttribute(
                "aria-label",
                darkMode
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

            darkModeToggle.setAttribute(
                "title",
                darkMode
                    ? "Light Mode"
                    : "Dark Mode"
            );

        }


        if (mobileDarkModeToggle) {

            mobileDarkModeToggle.setAttribute(
                "aria-label",
                darkMode
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

        }

    }


    /* =====================================================
       18. DESKTOP DARK MODE BUTTON
    ===================================================== */

    if (darkModeToggle) {

        darkModeToggle.addEventListener(
            "click",
            function () {

                const darkMode =
                    document.body.classList.contains(
                        "dark-mode"
                    );


                setDarkMode(
                    !darkMode
                );

            }
        );

    }


    /* =====================================================
       19. MOBILE DARK MODE BUTTON
    ===================================================== */

    if (mobileDarkModeToggle) {

        mobileDarkModeToggle.addEventListener(
            "click",
            function () {

                const darkMode =
                    document.body.classList.contains(
                        "dark-mode"
                    );


                setDarkMode(
                    !darkMode
                );

            }
        );

    }


    /* =====================================================
       20. LOAD SAVED RTL MODE
    ===================================================== */

    const savedRTL =
        localStorage.getItem(
            "hotpot-rtl"
        );


    if (savedRTL === "true") {

        setRTLMode(true);

    } else {

        setRTLMode(false);

    }


    /* =====================================================
       21. LOAD SAVED DARK MODE
    ===================================================== */

    const savedDarkMode =
        localStorage.getItem(
            "hotpot-dark-mode"
        );


    if (savedDarkMode === "true") {

        document.body.classList.add(
            "dark-mode"
        );

    } else {

        document.body.classList.remove(
            "dark-mode"
        );

    }


    updateDarkModeIcons();


    /* =====================================================
       22. CLOSE MENU WHEN CLICKING OUTSIDE
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const clickedInsideHeader =
                siteHeader.contains(
                    event.target
                );


            if (
                siteHeader.classList.contains(
                    "menu-open"
                ) &&
                !clickedInsideHeader
            ) {

                closeMobileMenu();

            }

        }
    );


    /* =====================================================
       23. ESC KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                siteHeader.classList.contains(
                    "menu-open"
                )
            ) {

                closeMobileMenu();

            }

        }
    );


    /* =====================================================
       24. CLOSE MOBILE MENU ON DESKTOP
    ===================================================== */

    function checkDesktopWidth() {

        if (
            window.innerWidth > 1199
        ) {

            closeMobileMenu();


            /* Close mobile dropdown */

            if (mobileHasDropdown) {

                mobileHasDropdown.classList.remove(
                    "active"
                );

            }


            if (mobileDropdownToggle) {

                mobileDropdownToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    }


    window.addEventListener(
        "resize",
        checkDesktopWidth
    );


    /* =====================================================
       25. INITIAL WIDTH CHECK
    ===================================================== */

    checkDesktopWidth();


    /* =====================================================
       26. PREVENT MOBILE MENU LINK JUMP
    ===================================================== */

    const mobileMenuButtons =
        document.querySelectorAll(
            ".mobile-nav-link"
        );


    mobileMenuButtons.forEach(
        function (button) {

            button.addEventListener(
                "keydown",
                function (event) {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        if (
                            button.classList.contains(
                                "mobile-dropdown-toggle"
                            )
                        ) {

                            event.preventDefault();

                            button.click();

                        }

                    }

                }
            );

        }
    );


    /* =====================================================
       27. SAVE STATE WHEN PAGE CHANGES
    ===================================================== */

    window.addEventListener(
        "beforeunload",
        function () {

            const darkMode =
                document.body.classList.contains(
                    "dark-mode"
                );

            const rtlMode =
                document.documentElement.getAttribute(
                    "dir"
                ) === "rtl";


            localStorage.setItem(
                "hotpot-dark-mode",
                darkMode
            );


            localStorage.setItem(
                "hotpot-rtl",
                rtlMode
            );

        }
    );


});











/* =========================================================
   HOME 1 — HERO SLIDER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const hero = document.getElementById("home1Hero");

    if (!hero) {
        return;
    }


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const slides = hero.querySelectorAll(
        ".home1-hero-slide"
    );

    const paginationButtons = hero.querySelectorAll(
        ".home1-hero-page"
    );


    /* =====================================================
       SLIDER SETTINGS
    ===================================================== */

    let currentSlide = 0;

    const totalSlides = slides.length;

    let autoplayTimer = null;

    const autoplayDelay = 6000;


    /* =====================================================
       SHOW SLIDE
    ===================================================== */

    function showHeroSlide(index) {

        if (!slides.length) {
            return;
        }


        /* ---------------------------------------------
           Keep index within range
        --------------------------------------------- */

        if (index < 0) {
            index = totalSlides - 1;
        }

        if (index >= totalSlides) {
            index = 0;
        }


        currentSlide = index;


        /* ---------------------------------------------
           Update slides
        --------------------------------------------- */

        slides.forEach(function (slide, slideIndex) {

            const isActive = slideIndex === currentSlide;

            slide.classList.toggle(
                "active",
                isActive
            );

        });


        /* ---------------------------------------------
           Update pagination
        --------------------------------------------- */

        paginationButtons.forEach(function (button, buttonIndex) {

            const isActive =
                buttonIndex === currentSlide;

            button.classList.toggle(
                "active",
                isActive
            );


            if (isActive) {

                button.setAttribute(
                    "aria-current",
                    "true"
                );

            } else {

                button.removeAttribute(
                    "aria-current"
                );

            }

        });

    }


    /* =====================================================
       NEXT SLIDE
    ===================================================== */

    function nextHeroSlide() {

        showHeroSlide(
            currentSlide + 1
        );

    }


    /* =====================================================
       START AUTOPLAY
    ===================================================== */

    function startHeroAutoplay() {

        stopHeroAutoplay();

        autoplayTimer = setInterval(
            nextHeroSlide,
            autoplayDelay
        );

    }


    /* =====================================================
       STOP AUTOPLAY
    ===================================================== */

    function stopHeroAutoplay() {

        if (autoplayTimer !== null) {

            clearInterval(
                autoplayTimer
            );

            autoplayTimer = null;

        }

    }


    /* =====================================================
       PAGINATION CLICK
    ===================================================== */

    paginationButtons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const slideIndex =
                    Number(
                        this.dataset.slide
                    );

                showHeroSlide(
                    slideIndex
                );

                startHeroAutoplay();

            }
        );

    });


    /* =====================================================
       KEYBOARD NAVIGATION
    ===================================================== */

    hero.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "ArrowRight") {

                event.preventDefault();

                nextHeroSlide();

                startHeroAutoplay();

            }

            if (event.key === "ArrowLeft") {

                event.preventDefault();

                showHeroSlide(
                    currentSlide - 1
                );

                startHeroAutoplay();

            }

        }
    );


    /* =====================================================
       PAUSE WHEN MOUSE IS OVER HERO
    ===================================================== */

    hero.addEventListener(
        "mouseenter",
        function () {

            stopHeroAutoplay();

        }
    );


    /* =====================================================
       RESUME WHEN MOUSE LEAVES HERO
    ===================================================== */

    hero.addEventListener(
        "mouseleave",
        function () {

            startHeroAutoplay();

        }
    );


    /* =====================================================
       TOUCH / SWIPE SUPPORT
    ===================================================== */

    let touchStartX = 0;
    let touchEndX = 0;


    hero.addEventListener(
        "touchstart",
        function (event) {

            touchStartX =
                event.changedTouches[0].screenX;

            stopHeroAutoplay();

        },
        {
            passive: true
        }
    );


    hero.addEventListener(
        "touchend",
        function (event) {

            touchEndX =
                event.changedTouches[0].screenX;

            handleHeroSwipe();

            startHeroAutoplay();

        },
        {
            passive: true
        }
    );


    function handleHeroSwipe() {

        const swipeDistance =
            touchEndX - touchStartX;


        /* Swipe left → next */

        if (swipeDistance < -50) {

            nextHeroSlide();

        }


        /* Swipe right → previous */

        else if (swipeDistance > 50) {

            showHeroSlide(
                currentSlide - 1
            );

        }

    }


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    function handleMotionPreference() {

        if (prefersReducedMotion.matches) {

            stopHeroAutoplay();

        } else {

            startHeroAutoplay();

        }

    }


    handleMotionPreference();


    if (
        typeof prefersReducedMotion.addEventListener ===
        "function"
    ) {

        prefersReducedMotion.addEventListener(
            "change",
            handleMotionPreference
        );

    }


    /* =====================================================
       INITIAL SLIDE
    ===================================================== */

    showHeroSlide(0);


});









/* =========================================================
   HOME 1 BROTHS SLIDER
   IPAD PRO
   3 CARDS VISIBLE
   1 CARD SLIDE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const section = document.getElementById("home1Broths");

    if (!section) return;


    const wrapper = section.querySelector(
        ".home1-broths-slider-wrapper"
    );

    const slider = section.querySelector(
        "#home1BrothsSlider"
    );

    const cards = Array.from(
        section.querySelectorAll(
            ".home1-broth-card"
        )
    );

    const buttons = Array.from(
        section.querySelectorAll(
            ".home1-broth-page"
        )
    );


    if (!wrapper || !slider || !cards.length) {
        return;
    }


    let currentSlide = 0;
    let autoSlide = null;


    /* =====================================================
       IPAD PRO CHECK
    ===================================================== */

    function isIPadPro() {

        return (
            window.innerWidth >= 1024 &&
            window.innerWidth <= 1199
        );

    }


    /* =====================================================
       SET IPAD PRO CARD WIDTH
    ===================================================== */

    function setupIPadPro() {

        if (!isIPadPro()) {
            return;
        }


        /* ---------------------------------------------
           GET ACTUAL AVAILABLE WIDTH
        --------------------------------------------- */

        const wrapperStyle =
            window.getComputedStyle(wrapper);

        const paddingLeft =
            parseFloat(wrapperStyle.paddingLeft) || 0;

        const paddingRight =
            parseFloat(wrapperStyle.paddingRight) || 0;


        const availableWidth =
            wrapper.clientWidth -
            paddingLeft -
            paddingRight;


        /* ---------------------------------------------
           GAP
        --------------------------------------------- */

        const gap = 20;


        /* ---------------------------------------------
           3 CARDS
        --------------------------------------------- */

        const cardWidth =
            (availableWidth - (gap * 2)) / 3;


        /* ---------------------------------------------
           APPLY EXACT WIDTH TO EVERY CARD
        --------------------------------------------- */

        cards.forEach(function (card) {

            card.style.flex =
                `0 0 ${cardWidth}px`;

            card.style.width =
                `${cardWidth}px`;

            card.style.minWidth =
                `${cardWidth}px`;

            card.style.maxWidth =
                `${cardWidth}px`;

        });


        /* ---------------------------------------------
           TRACK WIDTH
        --------------------------------------------- */

        const trackWidth =
            (cardWidth * cards.length) +
            (gap * (cards.length - 1));


        slider.style.width =
            `${trackWidth}px`;

        slider.style.gap =
            `${gap}px`;


        /* ---------------------------------------------
           KEEP CURRENT SLIDE
        --------------------------------------------- */

        moveIPadPro(currentSlide);

    }


    /* =====================================================
       MOVE SLIDER
    ===================================================== */

    function moveIPadPro(index) {

        if (!isIPadPro()) {
            return;
        }


        const card = cards[0];

        if (!card) return;


        const cardWidth =
            card.getBoundingClientRect().width;


        const gap = 20;


        const distance =
            index *
            (cardWidth + gap);


        slider.style.transform =
            `translate3d(-${distance}px, 0, 0)`;


        slider.style.transition =
            "transform 0.6s ease";


        /* ---------------------------------------------
           UPDATE PAGINATION
        --------------------------------------------- */

        buttons.forEach(function (button, i) {

            button.classList.toggle(
                "active",
                i === index
            );


            if (i === index) {

                button.setAttribute(
                    "aria-current",
                    "true"
                );

            } else {

                button.removeAttribute(
                    "aria-current"
                );

            }

        });

    }


    /* =====================================================
       NEXT SLIDE
    ===================================================== */

    function nextIPadPro() {

        if (!isIPadPro()) {
            return;
        }


        /*
         * 6 cards
         * 3 visible
         *
         * Maximum movement:
         *
         * 6 - 3 = 3
         */

        const maxSlide =
            cards.length - 3;


        currentSlide++;


        if (currentSlide > maxSlide) {

            currentSlide = 0;

        }


        moveIPadPro(currentSlide);

    }


    /* =====================================================
       PAGINATION CLICK
    ===================================================== */

    buttons.forEach(function (button, index) {

        button.addEventListener(
            "click",
            function () {

                if (!isIPadPro()) {
                    return;
                }


                const maxSlide =
                    cards.length - 3;


                currentSlide =
                    Math.min(
                        index,
                        maxSlide
                    );


                moveIPadPro(currentSlide);

                restartAutoSlide();

            }
        );

    });


    /* =====================================================
       AUTO SLIDE
    ===================================================== */

    function startAutoSlide() {

        clearInterval(autoSlide);


        if (!isIPadPro()) {
            return;
        }


        autoSlide = setInterval(
            nextIPadPro,
            4500
        );

    }


    /* =====================================================
       RESTART AUTO SLIDE
    ===================================================== */

    function restartAutoSlide() {

        clearInterval(autoSlide);

        startAutoSlide();

    }


    /* =====================================================
       PAUSE WHEN MOUSE IS OVER SLIDER
    ===================================================== */

    wrapper.addEventListener(
        "mouseenter",
        function () {

            clearInterval(autoSlide);

        }
    );


    wrapper.addEventListener(
        "mouseleave",
        function () {

            startAutoSlide();

        }
    );


    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (isIPadPro()) {

                setupIPadPro();

            }

        }
    );


    /* =====================================================
       INITIALIZE
    ===================================================== */

    if (isIPadPro()) {

        setupIPadPro();

        startAutoSlide();

    }

});













/* =========================================================
   HOME 2 — HERO SECTION
   PART 4 — JAVASCRIPT
   3 SLIDE BACKGROUND HERO
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ====================================================== */

    const hero = document.getElementById("home2Hero");
    const slider = document.getElementById("home2HeroSlider");
    const slides = document.querySelectorAll(".home2-hero-slide");
    const paginationItems = document.querySelectorAll(
        ".home2-hero-pagination-item"
    );

    /* =====================================================
       SAFETY CHECK
    ====================================================== */

    if (
        !hero ||
        !slider ||
        !slides.length ||
        !paginationItems.length
    ) {
        return;
    }


    /* =====================================================
       SETTINGS
    ====================================================== */

    const totalSlides = slides.length;

    const autoSlideDelay = 6000;

    let currentSlide = 0;
    let autoSlideTimer = null;

    let touchStartX = 0;
    let touchEndX = 0;

    let isAnimating = false;


    /* =====================================================
       CHECK RTL
    ====================================================== */

    function isRTL() {
        return document.documentElement.dir === "rtl";
    }


    /* =====================================================
       SHOW SLIDE
    ====================================================== */

    function showSlide(index, restartTimer = true) {

        if (isAnimating) {
            return;
        }

        if (index < 0) {
            index = totalSlides - 1;
        }

        if (index >= totalSlides) {
            index = 0;
        }

        isAnimating = true;

        currentSlide = index;


        /* ================================================
           UPDATE SLIDES
        ================================================= */

        slides.forEach(function (slide, slideIndex) {

            slide.classList.toggle(
                "active",
                slideIndex === currentSlide
            );

        });


        /* ================================================
           UPDATE PAGINATION
        ================================================= */

        paginationItems.forEach(function (button, buttonIndex) {

            const isActive = buttonIndex === currentSlide;

            button.classList.toggle(
                "active",
                isActive
            );

            if (isActive) {

                button.setAttribute(
                    "aria-current",
                    "true"
                );

            } else {

                button.removeAttribute(
                    "aria-current"
                );

            }

        });


        /* ================================================
           RELEASE ANIMATION LOCK
        ================================================= */

        setTimeout(function () {

            isAnimating = false;

        }, 850);


        /* ================================================
           RESTART AUTO SLIDER
        ================================================= */

        if (restartTimer) {
            startAutoSlide();
        }

    }


    /* =====================================================
       NEXT SLIDE
    ====================================================== */

    function nextSlide() {

        showSlide(
            currentSlide + 1
        );

    }


    /* =====================================================
       PREVIOUS SLIDE
    ====================================================== */

    function previousSlide() {

        showSlide(
            currentSlide - 1
        );

    }


    /* =====================================================
       AUTO SLIDER
    ====================================================== */

    function startAutoSlide() {

        stopAutoSlide();

        autoSlideTimer = setInterval(function () {

            nextSlide();

        }, autoSlideDelay);

    }


    /* =====================================================
       STOP AUTO SLIDER
    ====================================================== */

    function stopAutoSlide() {

        if (autoSlideTimer !== null) {

            clearInterval(
                autoSlideTimer
            );

            autoSlideTimer = null;

        }

    }


    /* =====================================================
       PAGINATION CLICK
    ====================================================== */

    paginationItems.forEach(function (button, index) {

        button.addEventListener(
            "click",
            function () {

                showSlide(index);

            }
        );

    });


    /* =====================================================
       KEYBOARD NAVIGATION
       LEFT / RIGHT ARROW
    ====================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            /* Only respond when hero is visible/focused area */

            if (
                !hero.matches(":hover") &&
                !hero.contains(document.activeElement)
            ) {
                return;
            }


            /* =============================================
               RTL KEYBOARD DIRECTION
            ============================================== */

            if (event.key === "ArrowRight") {

                if (isRTL()) {
                    previousSlide();
                } else {
                    nextSlide();
                }

            }


            if (event.key === "ArrowLeft") {

                if (isRTL()) {
                    nextSlide();
                } else {
                    previousSlide();
                }

            }

        }
    );


    /* =====================================================
       TOUCH START
    ====================================================== */

    hero.addEventListener(
        "touchstart",
        function (event) {

            if (!event.touches.length) {
                return;
            }

            touchStartX =
                event.touches[0].clientX;

            touchEndX =
                touchStartX;

            stopAutoSlide();

        },
        {
            passive: true
        }
    );


    /* =====================================================
       TOUCH MOVE
    ====================================================== */

    hero.addEventListener(
        "touchmove",
        function (event) {

            if (!event.touches.length) {
                return;
            }

            touchEndX =
                event.touches[0].clientX;

        },
        {
            passive: true
        }
    );


    /* =====================================================
       TOUCH END
    ====================================================== */

    hero.addEventListener(
        "touchend",
        function () {

            const swipeDistance =
                touchEndX - touchStartX;

            const minimumSwipeDistance = 50;


            /* =============================================
               IGNORE SMALL SWIPES
            ============================================== */

            if (
                Math.abs(swipeDistance) <
                minimumSwipeDistance
            ) {

                startAutoSlide();

                return;

            }


            /* =============================================
               RTL SWIPE DIRECTION
            ============================================== */

            if (isRTL()) {

                if (swipeDistance > 0) {

                    nextSlide();

                } else {

                    previousSlide();

                }

            } else {

                if (swipeDistance < 0) {

                    nextSlide();

                } else {

                    previousSlide();

                }

            }

        },
        {
            passive: true
        }
    );


    /* =====================================================
       PAUSE ON HOVER
    ====================================================== */

    hero.addEventListener(
        "mouseenter",
        function () {

            stopAutoSlide();

        }
    );


    /* =====================================================
       RESUME AFTER HOVER
    ====================================================== */

    hero.addEventListener(
        "mouseleave",
        function () {

            startAutoSlide();

        }
    );


    /* =====================================================
       PAGE VISIBILITY
       STOP SLIDER WHEN TAB IS HIDDEN
    ====================================================== */

    document.addEventListener(
        "visibilitychange",
        function () {

            if (document.hidden) {

                stopAutoSlide();

            } else {

                startAutoSlide();

            }

        }
    );


    /* =====================================================
       REDUCED MOTION
    ====================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    function handleReducedMotion() {

        if (prefersReducedMotion.matches) {

            stopAutoSlide();

        } else {

            startAutoSlide();

        }

    }


    prefersReducedMotion.addEventListener(
        "change",
        handleReducedMotion
    );


    /* =====================================================
       INITIALIZE
    ====================================================== */

    showSlide(
        0,
        false
    );


    /* =====================================================
       START AUTO SLIDER
    ====================================================== */

    handleReducedMotion();


    /* =====================================================
       RESIZE SAFETY
    ====================================================== */

    window.addEventListener(
        "resize",
        function () {

            /*
             * Reapply active state after orientation/
             * responsive breakpoint changes.
             */

            slides.forEach(function (slide, index) {

                slide.classList.toggle(
                    "active",
                    index === currentSlide
                );

            });

        }
    );

});








/* =========================================================
   HOME 2 — SECTION 8 : GUEST STORIES
   PART 4 — JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const guestStoriesSection =
        document.getElementById("home2GuestStories");

    if (!guestStoriesSection) return;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const stories =
        Array.from(
            guestStoriesSection.querySelectorAll(
                ".home2-guest-story"
            )
        );

    const dots =
        Array.from(
            guestStoriesSection.querySelectorAll(
                ".home2-guest-stories-dot"
            )
        );


    if (!stories.length || !dots.length) return;


    /* =====================================================
       SETTINGS
    ===================================================== */

    const AUTO_SLIDE_TIME = 6000;

    let currentStory = 0;
    let autoSlideTimer = null;
    let isPaused = false;

    let touchStartX = 0;
    let touchEndX = 0;


    /* =====================================================
       RTL CHECK
    ===================================================== */

    function isRTL() {

        return document.documentElement.dir === "rtl";

    }


    /* =====================================================
       DOT GROUPING
       
       6 stories / 3 dots

       Dot 1 → Stories 1–2
       Dot 2 → Stories 3–4
       Dot 3 → Stories 5–6
    ===================================================== */

    function getDotIndex(storyIndex) {

        return Math.floor(storyIndex / 2);

    }


    /* =====================================================
       SHOW STORY
    ===================================================== */

    function showStory(index) {

        if (index < 0) {
            index = stories.length - 1;
        }

        if (index >= stories.length) {
            index = 0;
        }


        currentStory = index;


        /* ---------------------------------------------
           UPDATE STORIES
        --------------------------------------------- */

        stories.forEach(function (story, storyIndex) {

            const isActive =
                storyIndex === currentStory;

            story.classList.toggle(
                "active",
                isActive
            );

            story.setAttribute(
                "aria-hidden",
                isActive ? "false" : "true"
            );

        });


        /* ---------------------------------------------
           UPDATE DOTS
        --------------------------------------------- */

        const activeDot =
            getDotIndex(currentStory);


        dots.forEach(function (dot, dotIndex) {

            const isActive =
                dotIndex === activeDot;

            dot.classList.toggle(
                "active",
                isActive
            );


            if (isActive) {

                dot.setAttribute(
                    "aria-current",
                    "true"
                );

            } else {

                dot.removeAttribute(
                    "aria-current"
                );

            }

        });

    }


    /* =====================================================
       NEXT STORY
    ===================================================== */

    function nextStory() {

        if (isRTL()) {

            showStory(currentStory - 1);

        } else {

            showStory(currentStory + 1);

        }

    }


    /* =====================================================
       PREVIOUS STORY
    ===================================================== */

    function previousStory() {

        if (isRTL()) {

            showStory(currentStory + 1);

        } else {

            showStory(currentStory - 1);

        }

    }


    /* =====================================================
       DOT CLICK
       
       Each dot represents two stories.
    ===================================================== */

    dots.forEach(function (dot, dotIndex) {

        dot.addEventListener("click", function () {

            const firstStoryOfGroup =
                dotIndex * 2;

            showStory(firstStoryOfGroup);

            restartAutoSlide();

        });

    });


    /* =====================================================
       AUTO SLIDE
    ===================================================== */

    function startAutoSlide() {

        stopAutoSlide();


        if (isPaused) return;


        autoSlideTimer = setInterval(function () {

            nextStory();

        }, AUTO_SLIDE_TIME);

    }


    function stopAutoSlide() {

        if (autoSlideTimer) {

            clearInterval(autoSlideTimer);

            autoSlideTimer = null;

        }

    }


    function restartAutoSlide() {

        stopAutoSlide();

        startAutoSlide();

    }


    /* =====================================================
       PAUSE ON HOVER
    ===================================================== */

    guestStoriesSection.addEventListener(
        "mouseenter",
        function () {

            isPaused = true;

            stopAutoSlide();

        }
    );


    guestStoriesSection.addEventListener(
        "mouseleave",
        function () {

            isPaused = false;

            startAutoSlide();

        }
    );


    /* =====================================================
       KEYBOARD NAVIGATION
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            const rect =
                guestStoriesSection.getBoundingClientRect();

            const sectionVisible =
                rect.top <
                window.innerHeight &&
                rect.bottom > 0;


            if (!sectionVisible) return;


            if (event.key === "ArrowRight") {

                event.preventDefault();

                if (isRTL()) {

                    previousStory();

                } else {

                    nextStory();

                }

                restartAutoSlide();

            }


            if (event.key === "ArrowLeft") {

                event.preventDefault();

                if (isRTL()) {

                    nextStory();

                } else {

                    previousStory();

                }

                restartAutoSlide();

            }

        }
    );


    /* =====================================================
       TOUCH START
    ===================================================== */

    guestStoriesSection.addEventListener(
        "touchstart",
        function (event) {

            if (!event.touches.length) return;

            touchStartX =
                event.touches[0].clientX;

        },
        {
            passive: true
        }
    );


    /* =====================================================
       TOUCH END
    ===================================================== */

    guestStoriesSection.addEventListener(
        "touchend",
        function (event) {

            if (!event.changedTouches.length) return;

            touchEndX =
                event.changedTouches[0].clientX;


            const swipeDistance =
                touchStartX - touchEndX;


            const minimumSwipe =
                50;


            if (
                Math.abs(swipeDistance) <
                minimumSwipe
            ) {

                return;

            }


            /* -----------------------------------------
               NORMAL LTR
            ----------------------------------------- */

            if (!isRTL()) {

                if (swipeDistance > 0) {

                    nextStory();

                } else {

                    previousStory();

                }

            }


            /* -----------------------------------------
               RTL
            ----------------------------------------- */

            else {

                if (swipeDistance > 0) {

                    previousStory();

                } else {

                    nextStory();

                }

            }


            restartAutoSlide();

        },
        {
            passive: true
        }
    );


    /* =====================================================
       VISIBILITY CHANGE
    ===================================================== */

    document.addEventListener(
        "visibilitychange",
        function () {

            if (document.hidden) {

                stopAutoSlide();

            } else {

                if (!isPaused) {

                    startAutoSlide();

                }

            }

        }
    );


    /* =====================================================
       REDUCED MOTION
    ===================================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    if (prefersReducedMotion.matches) {

        isPaused = true;

        stopAutoSlide();

    }


    prefersReducedMotion.addEventListener(
        "change",
        function (event) {

            if (event.matches) {

                isPaused = true;

                stopAutoSlide();

            } else {

                isPaused = false;

                startAutoSlide();

            }

        }
    );


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    showStory(0);


    /* =====================================================
       START SLIDER
    ===================================================== */

    if (!prefersReducedMotion.matches) {

        startAutoSlide();

    }

});








/* =========================================================
   HOME 2 — GUEST STORIES
   PART 4 — JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.getElementById("gatherStoriesSlider");
    const pagination = document.getElementById("gatherStoriesPagination");

    if (!slider || !pagination) return;


    /* =====================================================
       ELEMENTS
    ===================================================== */

    const stories = Array.from(
        slider.querySelectorAll(".gather-story")
    );

    const dots = Array.from(
        pagination.querySelectorAll(".gather-stories-dot")
    );


    if (!stories.length || !dots.length) return;


    /* =====================================================
       SETTINGS
    ===================================================== */

    let currentIndex = 0;

    const autoplayDelay = 6000;

    let autoplayTimer = null;

    let touchStartX = 0;
    let touchEndX = 0;

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;


    /* =====================================================
       RTL CHECK
    ===================================================== */

    function isRTL() {

        return document.documentElement.dir === "rtl";

    }


    /* =====================================================
       SHOW STORY
    ===================================================== */

    function showStory(index) {

        if (index < 0) {
            index = stories.length - 1;
        }

        if (index >= stories.length) {
            index = 0;
        }

        currentIndex = index;


        /* ---------------------------------------------
           STORIES
        --------------------------------------------- */

        stories.forEach(function (story, i) {

            const isActive = i === currentIndex;

            story.classList.toggle(
                "active",
                isActive
            );

            story.setAttribute(
                "aria-hidden",
                isActive ? "false" : "true"
            );

        });


        /* ---------------------------------------------
           DOTS
        --------------------------------------------- */

        dots.forEach(function (dot, i) {

            const isActive = i === currentIndex;

            dot.classList.toggle(
                "active",
                isActive
            );

            if (isActive) {

                dot.setAttribute(
                    "aria-current",
                    "true"
                );

            } else {

                dot.removeAttribute(
                    "aria-current"
                );

            }

        });

    }


    /* =====================================================
       NEXT STORY
    ===================================================== */

    function nextStory() {

        let nextIndex;

        if (isRTL()) {

            nextIndex =
                currentIndex - 1;

        } else {

            nextIndex =
                currentIndex + 1;

        }

        showStory(nextIndex);

    }


    /* =====================================================
       PREVIOUS STORY
    ===================================================== */

    function previousStory() {

        let previousIndex;

        if (isRTL()) {

            previousIndex =
                currentIndex + 1;

        } else {

            previousIndex =
                currentIndex - 1;

        }

        showStory(previousIndex);

    }


    /* =====================================================
       DOT CLICK
    ===================================================== */

    dots.forEach(function (dot, index) {

        dot.addEventListener(
            "click",
            function () {

                showStory(index);

                restartAutoplay();

            }
        );

    });


    /* =====================================================
       AUTOPLAY
    ===================================================== */

    function startAutoplay() {

        if (reducedMotion) return;

        stopAutoplay();

        autoplayTimer = setInterval(
            function () {

                nextStory();

            },
            autoplayDelay
        );

    }


    function stopAutoplay() {

        if (autoplayTimer) {

            clearInterval(
                autoplayTimer
            );

            autoplayTimer = null;

        }

    }


    function restartAutoplay() {

        if (reducedMotion) return;

        startAutoplay();

    }


    /* =====================================================
       PAUSE WHILE HOVERING
    ===================================================== */

    slider.addEventListener(
        "mouseenter",
        function () {

            stopAutoplay();

        }
    );


    slider.addEventListener(
        "mouseleave",
        function () {

            startAutoplay();

        }
    );


    /* =====================================================
       KEYBOARD NAVIGATION
    ===================================================== */

    slider.setAttribute(
        "tabindex",
        "0"
    );


    slider.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "ArrowRight" ||
                event.key === "ArrowDown"
            ) {

                event.preventDefault();

                if (isRTL()) {

                    previousStory();

                } else {

                    nextStory();

                }

                restartAutoplay();

            }


            if (
                event.key === "ArrowLeft" ||
                event.key === "ArrowUp"
            ) {

                event.preventDefault();

                if (isRTL()) {

                    nextStory();

                } else {

                    previousStory();

                }

                restartAutoplay();

            }

        }
    );


    /* =====================================================
       TOUCH / SWIPE
    ===================================================== */

    slider.addEventListener(
        "touchstart",
        function (event) {

            touchStartX =
                event.changedTouches[0].screenX;

            stopAutoplay();

        },
        {
            passive: true
        }
    );


    slider.addEventListener(
        "touchend",
        function (event) {

            touchEndX =
                event.changedTouches[0].screenX;

            handleSwipe();

            startAutoplay();

        },
        {
            passive: true
        }
    );


    function handleSwipe() {

        const swipeDistance =
            touchEndX - touchStartX;

        const minimumSwipe =
            50;

        if (
            Math.abs(swipeDistance)
            < minimumSwipe
        ) {

            return;

        }


        /*
         * LTR:
         * Swipe left  = next
         * Swipe right = previous
         *
         * RTL:
         * Swipe right = next
         * Swipe left  = previous
         */

        if (isRTL()) {

            if (swipeDistance > 0) {

                nextStory();

            } else {

                previousStory();

            }

        } else {

            if (swipeDistance < 0) {

                nextStory();

            } else {

                previousStory();

            }

        }

    }


    /* =====================================================
       VISIBILITY API
       PAUSE WHEN TAB IS NOT ACTIVE
    ===================================================== */

    document.addEventListener(
        "visibilitychange",
        function () {

            if (
                document.hidden
            ) {

                stopAutoplay();

            } else {

                startAutoplay();

            }

        }
    );


    /* =====================================================
       INITIAL STATE
    ===================================================== */

    showStory(0);

    startAutoplay();

});















document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       SHARED SETTINGS
       Works for BOTH Login and Register
    ========================================================= */

    const DARK_MODE_KEY = "hotpotDarkMode";
    const RTL_MODE_KEY = "hotpotRTL";


    /* =========================================================
       DETECT CURRENT PAGE
    ========================================================= */

    const isLoginPage =
        document.getElementById("hotpotLoginPage");

    const isRegisterPage =
        document.getElementById("hotpotRegisterPage");


    /* =========================================================
       COMMON DARK MODE
    ========================================================= */

    function applyDarkMode(isDark) {

        document.documentElement.classList.toggle(
            "dark-mode",
            isDark
        );

        document.body.classList.toggle(
            "dark-mode",
            isDark
        );


        /* Login button */

        const loginDarkToggle =
            document.getElementById("loginDarkToggle");

        if (loginDarkToggle) {

            const icon =
                loginDarkToggle.querySelector("i");

            if (icon) {

                icon.className = isDark
                    ? "fa-solid fa-sun"
                    : "fa-solid fa-moon";
            }

            loginDarkToggle.setAttribute(
                "title",
                isDark ? "Light Mode" : "Dark Mode"
            );

            loginDarkToggle.setAttribute(
                "aria-label",
                isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );
        }


        /* Register button */

        const registerDarkToggle =
            document.getElementById(
                "registerDarkToggle"
            );

        if (registerDarkToggle) {

            const icon =
                registerDarkToggle.querySelector("i");

            if (icon) {

                icon.className = isDark
                    ? "fa-solid fa-sun"
                    : "fa-solid fa-moon";
            }

            registerDarkToggle.setAttribute(
                "title",
                isDark ? "Light Mode" : "Dark Mode"
            );

            registerDarkToggle.setAttribute(
                "aria-label",
                isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );
        }
    }


    /* =========================================================
       COMMON RTL
    ========================================================= */

    function applyRTL(isRTL) {

        document.documentElement.dir =
            isRTL ? "rtl" : "ltr";

        /*
         * Keep language English.
         * RTL only changes direction.
         */

        document.documentElement.lang = "en";


        document.documentElement.classList.toggle(
            "rtl-mode",
            isRTL
        );

        document.body.classList.toggle(
            "rtl-mode",
            isRTL
        );


        /* Login RTL button */

        const loginRtlToggle =
            document.getElementById(
                "loginRtlToggle"
            );

        if (loginRtlToggle) {

            loginRtlToggle.setAttribute(
                "title",
                isRTL ? "LTR" : "RTL"
            );

            loginRtlToggle.setAttribute(
                "aria-label",
                isRTL
                    ? "Switch to LTR"
                    : "Switch to RTL"
            );
        }


        /* Register RTL button */

        const registerRtlToggle =
            document.getElementById(
                "registerRtlToggle"
            );

        if (registerRtlToggle) {

            registerRtlToggle.setAttribute(
                "title",
                isRTL ? "LTR" : "RTL"
            );

            registerRtlToggle.setAttribute(
                "aria-label",
                isRTL
                    ? "Switch to LTR"
                    : "Switch to RTL"
            );
        }
    }


    /* =========================================================
       LOAD SAVED SETTINGS
    ========================================================= */

    const savedDarkMode =
        localStorage.getItem(
            DARK_MODE_KEY
        ) === "true";

    const savedRTL =
        localStorage.getItem(
            RTL_MODE_KEY
        ) === "true";


    applyDarkMode(savedDarkMode);
    applyRTL(savedRTL);


    /* =========================================================
       LOGIN DARK MODE
    ========================================================= */

    const loginDarkToggle =
        document.getElementById(
            "loginDarkToggle"
        );

    if (loginDarkToggle) {

        loginDarkToggle.addEventListener(
            "click",
            function () {

                const isDark =
                    !document.documentElement.classList.contains(
                        "dark-mode"
                    );

                localStorage.setItem(
                    DARK_MODE_KEY,
                    isDark
                );

                applyDarkMode(isDark);
            }
        );
    }


    /* =========================================================
       REGISTER DARK MODE
    ========================================================= */

    const registerDarkToggle =
        document.getElementById(
            "registerDarkToggle"
        );

    if (registerDarkToggle) {

        registerDarkToggle.addEventListener(
            "click",
            function () {

                const isDark =
                    !document.documentElement.classList.contains(
                        "dark-mode"
                    );

                localStorage.setItem(
                    DARK_MODE_KEY,
                    isDark
                );

                applyDarkMode(isDark);
            }
        );
    }


    /* =========================================================
       LOGIN RTL
    ========================================================= */

    const loginRtlToggle =
        document.getElementById(
            "loginRtlToggle"
        );

    if (loginRtlToggle) {

        loginRtlToggle.addEventListener(
            "click",
            function () {

                const isRTL =
                    !document.documentElement.classList.contains(
                        "rtl-mode"
                    );

                localStorage.setItem(
                    RTL_MODE_KEY,
                    isRTL
                );

                applyRTL(isRTL);
            }
        );
    }


    /* =========================================================
       REGISTER RTL
    ========================================================= */

    const registerRtlToggle =
        document.getElementById(
            "registerRtlToggle"
        );

    if (registerRtlToggle) {

        registerRtlToggle.addEventListener(
            "click",
            function () {

                const isRTL =
                    !document.documentElement.classList.contains(
                        "rtl-mode"
                    );

                localStorage.setItem(
                    RTL_MODE_KEY,
                    isRTL
                );

                applyRTL(isRTL);
            }
        );
    }


    /* =========================================================
       PASSWORD TOGGLE FUNCTION
       Used by BOTH LOGIN + REGISTER
    ========================================================= */

    function setupPasswordToggle(
        inputId,
        buttonId
    ) {

        const input =
            document.getElementById(inputId);

        const button =
            document.getElementById(buttonId);

        if (!input || !button) return;


        button.addEventListener(
            "click",
            function () {

                const icon =
                    button.querySelector("i");


                if (input.type === "password") {

                    input.type = "text";

                    if (icon) {

                        icon.className =
                            "fa-regular fa-eye-slash";
                    }

                    button.setAttribute(
                        "aria-label",
                        "Hide password"
                    );

                    button.setAttribute(
                        "title",
                        "Hide password"
                    );

                } else {

                    input.type = "password";

                    if (icon) {

                        icon.className =
                            "fa-regular fa-eye";
                    }

                    button.setAttribute(
                        "aria-label",
                        "Show password"
                    );

                    button.setAttribute(
                        "title",
                        "Show password"
                    );
                }
            }
        );
    }


    /* =========================================================
       LOGIN PASSWORD
    ========================================================= */

    setupPasswordToggle(
        "loginPassword",
        "loginPasswordToggle"
    );


    /* =========================================================
       REGISTER PASSWORDS
    ========================================================= */

    setupPasswordToggle(
        "registerPassword",
        "registerPasswordToggle"
    );

    setupPasswordToggle(
        "registerConfirmPassword",
        "registerConfirmPasswordToggle"
    );


    /* =========================================================
       REGISTER PASSWORD MATCH
    ========================================================= */

    const registerPassword =
        document.getElementById(
            "registerPassword"
        );

    const registerConfirmPassword =
        document.getElementById(
            "registerConfirmPassword"
        );


    function checkPasswordMatch() {

        if (
            !registerPassword ||
            !registerConfirmPassword
        ) {
            return;
        }


        if (
            registerPassword.value !==
            registerConfirmPassword.value
        ) {

            registerConfirmPassword.setCustomValidity(
                "Passwords do not match."
            );

        } else {

            registerConfirmPassword.setCustomValidity("");
        }
    }


    if (registerPassword) {

        registerPassword.addEventListener(
            "input",
            checkPasswordMatch
        );
    }


    if (registerConfirmPassword) {

        registerConfirmPassword.addEventListener(
            "input",
            checkPasswordMatch
        );
    }


    /* =========================================================
       LOGIN FORM
    ========================================================= */

    const loginForm =
        document.getElementById(
            "hotpotLoginForm"
        );

    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                if (!loginForm.checkValidity()) {

                    loginForm.reportValidity();

                    return;
                }


                /*
                 * Backend authentication
                 * can be connected here.
                 */

                window.location.href =
                    "dashboard.html";
            }
        );
    }


    /* =========================================================
       REGISTER FORM
    ========================================================= */

    const registerForm =
        document.getElementById(
            "hotpotRegisterForm"
        );

    if (registerForm) {

        registerForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                checkPasswordMatch();


                if (!registerForm.checkValidity()) {

                    registerForm.reportValidity();

                    return;
                }


                /*
                 * Backend registration
                 * can be connected here.
                 */

                window.location.href =
                    "login.html";
            }
        );
    }


    /* =========================================================
       LOGIN — FORGOT PASSWORD
    ========================================================= */

    const forgotPassword =
        document.querySelector(
            ".hotpot-login-forgot"
        );

    if (forgotPassword) {

        forgotPassword.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                alert(
                    "Password reset functionality will be connected here."
                );
            }
        );
    }


    /* =========================================================
       LOGIN SOCIAL BUTTONS
    ========================================================= */

    const loginSocialButtons =
        document.querySelectorAll(
            ".hotpot-login-social-button"
        );

    loginSocialButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    alert(
                        "Social login will be connected here."
                    );
                }
            );
        }
    );


    /* =========================================================
       REGISTER SOCIAL BUTTONS
    ========================================================= */

    const registerSocialButtons =
        document.querySelectorAll(
            ".hotpot-register-social-button"
        );

    registerSocialButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    alert(
                        "Social registration will be connected here."
                    );
                }
            );
        }
    );

});
















/* ============================================================
   SCROLL TO TOP
============================================================ */

document.addEventListener("DOMContentLoaded", function () {

    const scrollTopBtn =
        document.getElementById("scrollTopBtn");


    if (!scrollTopBtn) {
        return;
    }


    /* ========================================================
       SHOW / HIDE BUTTON
    ======================================================== */

    function updateScrollTopButton() {

        if (window.scrollY > 400) {

            scrollTopBtn.classList.add("show");

        } else {

            scrollTopBtn.classList.remove("show");

        }

    }


    /* ========================================================
       SCROLL EVENT
    ======================================================== */

    window.addEventListener(
        "scroll",
        updateScrollTopButton,
        {
            passive: true
        }
    );


    /* ========================================================
       CLICK — SCROLL TO TOP
    ======================================================== */

    scrollTopBtn.addEventListener(
        "click",
        function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    /* ========================================================
       INITIAL CHECK
    ======================================================== */

    updateScrollTopButton();

});











/* =========================================================
   HOME 1 — TESTIMONIAL SLIDER
   3 CARDS PER SLIDE
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const slider = document.getElementById(
        "home1TestimonialsSlider"
    );

    const cards = slider
        ? slider.querySelectorAll(
            ".home1-testimonial-card"
        )
        : [];

    const dots = document.querySelectorAll(
        ".home1-testimonial-dot"
    );

    if (!slider || cards.length === 0) return;

    let currentSlide = 0;
    let autoSlide;


    /* =====================================================
       GET CARDS PER SLIDE
    ===================================================== */

    function getCardsPerSlide() {

        if (window.innerWidth <= 767) {
            return 1;
        }

        if (window.innerWidth <= 1024) {
            return 2;
        }

        return 3;
    }


    /* =====================================================
       MOVE SLIDER
    ===================================================== */

    function moveSlider(slide) {

        const cardsPerSlide = getCardsPerSlide();

        const cardWidth =
            cards[0].getBoundingClientRect().width;

        const gap =
            parseFloat(
                getComputedStyle(slider).gap
            ) || 0;

        const moveDistance =
            slide *
            cardsPerSlide *
            (cardWidth + gap);

        slider.style.transform =
            `translateX(-${moveDistance}px)`;


        /* Update dots */

        dots.forEach(function (dot, index) {

            dot.classList.toggle(
                "active",
                index === slide
            );

            if (index === slide) {

                dot.setAttribute(
                    "aria-current",
                    "true"
                );

            } else {

                dot.removeAttribute(
                    "aria-current"
                );

            }

        });

    }


    /* =====================================================
       DOT CLICK
    ===================================================== */

    dots.forEach(function (dot, index) {

        dot.addEventListener(
            "click",
            function () {

                const cardsPerSlide =
                    getCardsPerSlide();

                const totalSlides =
                    Math.ceil(
                        cards.length /
                        cardsPerSlide
                    );

                currentSlide =
                    index % totalSlides;

                moveSlider(currentSlide);

                restartAutoSlide();

            }
        );

    });


    /* =====================================================
       AUTO SLIDE
    ===================================================== */

    function startAutoSlide() {

        clearInterval(autoSlide);

        autoSlide = setInterval(function () {

            const cardsPerSlide =
                getCardsPerSlide();

            const totalSlides =
                Math.ceil(
                    cards.length /
                    cardsPerSlide
                );

            currentSlide++;

            if (
                currentSlide >= totalSlides
            ) {
                currentSlide = 0;
            }

            moveSlider(currentSlide);

        }, 5000);

    }


    /* =====================================================
       RESTART AUTO SLIDE
    ===================================================== */

    function restartAutoSlide() {

        clearInterval(autoSlide);

        startAutoSlide();

    }


    /* =====================================================
       PAUSE ON HOVER
    ===================================================== */

    const wrapper =
        document.querySelector(
            ".home1-testimonials-slider-wrapper"
        );

    if (wrapper) {

        wrapper.addEventListener(
            "mouseenter",
            function () {
                clearInterval(autoSlide);
            }
        );

        wrapper.addEventListener(
            "mouseleave",
            function () {
                startAutoSlide();
            }
        );

    }


    /* =====================================================
       RESIZE
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            currentSlide = 0;

            moveSlider(0);

            restartAutoSlide();

        }
    );


    /* =====================================================
       INITIAL
    ===================================================== */

    moveSlider(0);

    startAutoSlide();

});