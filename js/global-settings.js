/* ============================================================
   HOT POT RESTAURANT
   GLOBAL DARK MODE + RTL
   WORKS ON ALL PAGES
============================================================ */

(function () {

    "use strict";


    /* ============================================================
       SHARED STORAGE KEYS
    ============================================================ */

    const DARK_KEY = "hotpotDarkMode";
    const RTL_KEY = "hotpotRTL";


    /* ============================================================
       BUTTON SELECTORS
    ============================================================ */

    const DARK_BUTTONS =
        "#darkModeToggle, " +
        "#mobileDarkModeToggle, " +
        "#loginDarkToggle, " +
        "#registerDarkToggle, " +
        "#dashboardDarkToggle";


    const RTL_BUTTONS =
        "#rtlToggle, " +
        "#mobileRtlToggle, " +
        "#loginRtlToggle, " +
        "#registerRtlToggle, " +
        "#dashboardRtlToggle";


    /* ============================================================
       GET SAVED DARK MODE
    ============================================================ */

    function getDarkMode() {

        return (
            localStorage.getItem(DARK_KEY) === "true"
        );

    }


    /* ============================================================
       GET SAVED RTL
    ============================================================ */

    function getRTL() {

        return (
            localStorage.getItem(RTL_KEY) === "true"
        );

    }


    /* ============================================================
       UPDATE DARK MODE BUTTONS
    ============================================================ */

    function updateDarkButtons(isDark) {

        document
            .querySelectorAll(DARK_BUTTONS)
            .forEach(function (button) {

                const icon =
                    button.querySelector("i");


                if (icon) {

                    icon.className = isDark
                        ? "fa-solid fa-sun"
                        : "fa-solid fa-moon";

                }


                button.setAttribute(
                    "aria-pressed",
                    String(isDark)
                );


                button.setAttribute(
                    "title",
                    isDark
                        ? "Light Mode"
                        : "Dark Mode"
                );


                button.setAttribute(
                    "aria-label",
                    isDark
                        ? "Switch to light mode"
                        : "Switch to dark mode"
                );

            });

    }


    /* ============================================================
       UPDATE RTL BUTTONS
    ============================================================ */

    function updateRTLButtons(isRTL) {

        document
            .querySelectorAll(RTL_BUTTONS)
            .forEach(function (button) {

                button.setAttribute(
                    "aria-pressed",
                    String(isRTL)
                );


                button.setAttribute(
                    "title",
                    isRTL
                        ? "LTR"
                        : "RTL"
                );


                button.setAttribute(
                    "aria-label",
                    isRTL
                        ? "Switch to LTR"
                        : "Switch to RTL"
                );

            });

    }


    /* ============================================================
       APPLY DARK MODE
    ============================================================ */

    function applyDarkMode(isDark) {

        document.documentElement.classList.toggle(
            "dark-mode",
            isDark
        );


        if (document.body) {

            document.body.classList.toggle(
                "dark-mode",
                isDark
            );

        }


        updateDarkButtons(isDark);

    }


    /* ============================================================
       APPLY RTL
    ============================================================ */

    function applyRTL(isRTL) {

        document.documentElement.lang = "en";


        document.documentElement.dir =
            isRTL
                ? "rtl"
                : "ltr";


        document.documentElement.classList.toggle(
            "rtl-mode",
            isRTL
        );


        if (document.body) {

            document.body.classList.toggle(
                "rtl-mode",
                isRTL
            );

        }


        updateRTLButtons(isRTL);

    }


    /* ============================================================
       APPLY SAVED SETTINGS
    ============================================================ */

    function applySavedSettings() {

        applyDarkMode(
            getDarkMode()
        );


        applyRTL(
            getRTL()
        );

    }


    /* ============================================================
       DARK MODE CLICK
       
       CAPTURE = TRUE
       This makes this controller run BEFORE old page JS.
    ============================================================ */

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    DARK_BUTTONS
                );


            if (!button) {

                return;

            }


            /*
             * Stop the old Login/Register/Dashboard
             * Dark Mode handlers from running again.
             */

            event.preventDefault();

            event.stopImmediatePropagation();


            const newValue =
                !getDarkMode();


            localStorage.setItem(
                DARK_KEY,
                String(newValue)
            );


            applyDarkMode(
                newValue
            );

        },
        true
    );


    /* ============================================================
       RTL CLICK
    ============================================================ */

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    RTL_BUTTONS
                );


            if (!button) {

                return;

            }


            /*
             * Stop old page RTL handlers.
             */

            event.preventDefault();

            event.stopImmediatePropagation();


            const newValue =
                !getRTL();


            localStorage.setItem(
                RTL_KEY,
                String(newValue)
            );


            applyRTL(
                newValue
            );

        },
        true
    );


    /* ============================================================
       INITIAL LOAD
    ============================================================ */

    function initialize() {

        applySavedSettings();

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initialize
        );

    } else {

        initialize();

    }


    /* ============================================================
       STORAGE EVENT
       Sync between browser tabs.
    ============================================================ */

    window.addEventListener(
        "storage",
        function (event) {

            if (
                event.key === DARK_KEY
            ) {

                applyDarkMode(
                    event.newValue === "true"
                );

            }


            if (
                event.key === RTL_KEY
            ) {

                applyRTL(
                    event.newValue === "true"
                );

            }

        }
    );


})();