/* ============================================================
   HOT POT RESTAURANT
   MEMBER DASHBOARD
   PART 4 — COMPLETE JAVASCRIPT
============================================================ */

document.addEventListener("DOMContentLoaded", function () {

    /* ========================================================
       GLOBAL STORAGE KEYS
    ======================================================== */

    const DARK_MODE_KEY = "hotpotDarkMode";
    const RTL_MODE_KEY = "hotpotRTL";


    /* ========================================================
       DASHBOARD ELEMENTS
    ======================================================== */

    const dashboard =
        document.getElementById("hotpotDashboard");

    const sidebar =
        document.getElementById("dashboardSidebar");

    const sidebarOverlay =
        document.getElementById("dashboardSidebarOverlay");

    const sidebarClose =
        document.getElementById("dashboardSidebarClose");

    const menuToggle =
        document.getElementById("dashboardMenuToggle");

    const darkToggle =
        document.getElementById("dashboardDarkToggle");

    const rtlToggle =
        document.getElementById("dashboardRtlToggle");

    const notificationButton =
        document.getElementById(
            "dashboardNotificationButton"
        );

    const settingsButton =
        document.getElementById(
            "dashboardSettingsButton"
        );

    const navLinks =
        document.querySelectorAll(
            ".dashboard-nav-link"
        );

    const logoutLink =
        document.querySelector(
            ".dashboard-logout-link"
        );


    /* ========================================================
       MOBILE / TABLET CHECK
    ======================================================== */

    function isMobileLayout() {

        return window.innerWidth <= 1100;

    }


    /* ========================================================
       OPEN SIDEBAR
    ======================================================== */

    function openSidebar() {

        if (!sidebar || !isMobileLayout()) {
            return;
        }


        sidebar.classList.add(
            "sidebar-open"
        );


        if (sidebarOverlay) {

            sidebarOverlay.classList.add(
                "sidebar-overlay-active"
            );

        }


        document.body.classList.add(
            "dashboard-sidebar-is-open"
        );


        if (menuToggle) {

            menuToggle.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    }


    /* ========================================================
       CLOSE SIDEBAR
    ======================================================== */

    function closeSidebar() {

        if (sidebar) {

            sidebar.classList.remove(
                "sidebar-open"
            );

        }


        if (sidebarOverlay) {

            sidebarOverlay.classList.remove(
                "sidebar-overlay-active"
            );

        }


        document.body.classList.remove(
            "dashboard-sidebar-is-open"
        );


        if (menuToggle) {

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }


    /* ========================================================
       TOGGLE SIDEBAR
    ======================================================== */

    function toggleSidebar() {

        if (!sidebar || !isMobileLayout()) {
            return;
        }


        if (
            sidebar.classList.contains(
                "sidebar-open"
            )
        ) {

            closeSidebar();

        } else {

            openSidebar();

        }

    }


    /* ========================================================
       MENU TOGGLE
    ======================================================== */

    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            function () {

                toggleSidebar();

            }
        );

    }


    /* ========================================================
       SIDEBAR CLOSE BUTTON
    ======================================================== */

    if (sidebarClose) {

        sidebarClose.addEventListener(
            "click",
            function () {

                closeSidebar();

            }
        );

    }


    /* ========================================================
       SIDEBAR OVERLAY
    ======================================================== */

    if (sidebarOverlay) {

        sidebarOverlay.addEventListener(
            "click",
            function () {

                closeSidebar();

            }
        );

    }


    /* ========================================================
       CLOSE SIDEBAR WHEN NAVIGATION LINK IS CLICKED
    ======================================================== */

    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (isMobileLayout()) {

                    closeSidebar();

                }

            }
        );

    });


    /* ========================================================
       RESIZE
    ======================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (!isMobileLayout()) {

                closeSidebar();

            }

        }
    );


    /* ========================================================
       DARK MODE
    ======================================================== */

    function applyDarkMode(isDark) {

        document.documentElement.classList.toggle(
            "dark-mode",
            isDark
        );


        document.body.classList.toggle(
            "dark-mode",
            isDark
        );


        if (darkToggle) {

            const icon =
                darkToggle.querySelector("i");


            if (icon) {

                icon.className = isDark
                    ? "fa-solid fa-sun"
                    : "fa-solid fa-moon";

            }


            darkToggle.setAttribute(
                "title",
                isDark
                    ? "Light Mode"
                    : "Dark Mode"
            );


            darkToggle.setAttribute(
                "aria-label",
                isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

        }

    }


    /* ========================================================
       RTL MODE
    ======================================================== */

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


        document.body.classList.toggle(
            "rtl-mode",
            isRTL
        );


        if (rtlToggle) {

            rtlToggle.setAttribute(
                "title",
                isRTL
                    ? "LTR"
                    : "RTL"
            );


            rtlToggle.setAttribute(
                "aria-label",
                isRTL
                    ? "Switch to LTR"
                    : "Switch to RTL"
            );

        }

    }


    /* ========================================================
       LOAD SAVED SETTINGS
    ======================================================== */

    const savedDarkMode =
        localStorage.getItem(
            DARK_MODE_KEY
        ) === "true";


    const savedRTL =
        localStorage.getItem(
            RTL_MODE_KEY
        ) === "true";


    applyDarkMode(
        savedDarkMode
    );


    applyRTL(
        savedRTL
    );


    /* ========================================================
       DARK MODE TOGGLE
    ======================================================== */

    if (darkToggle) {

        darkToggle.addEventListener(
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


                applyDarkMode(
                    isDark
                );

            }
        );

    }


    /* ========================================================
       RTL TOGGLE
    ======================================================== */

    if (rtlToggle) {

        rtlToggle.addEventListener(
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


                applyRTL(
                    isRTL
                );

            }
        );

    }


    /* ========================================================
       NOTIFICATION BUTTON
    ======================================================== */

    if (notificationButton) {

        notificationButton.addEventListener(
            "click",
            function () {

                notificationButton.classList.toggle(
                    "notification-active"
                );

            }
        );

    }


    /* ========================================================
       SETTINGS BUTTON
    ======================================================== */

    if (settingsButton) {

        settingsButton.addEventListener(
            "click",
            function () {

                settingsButton.classList.toggle(
                    "settings-active"
                );

            }
        );

    }


    /* ========================================================
       CREATE LOGOUT MODAL
    ======================================================== */

    function createLogoutModal() {

        /* If modal already exists, use it */

        let modal =
            document.getElementById(
                "dashboardLogoutModal"
            );


        if (modal) {

            return modal;

        }


        /* Create modal */

        modal =
            document.createElement("div");


        modal.id =
            "dashboardLogoutModal";


        modal.className =
            "dashboard-logout-modal";


        modal.setAttribute(
            "aria-hidden",
            "true"
        );


        modal.innerHTML = `

            <!-- BACKDROP -->

            <div
                class="dashboard-logout-backdrop"
                id="dashboardLogoutBackdrop"
            ></div>


            <!-- DIALOG -->

            <div
                class="dashboard-logout-dialog"
                role="dialog"
                aria-modal="true"
                aria-labelledby="dashboardLogoutTitle"
            >

                <!-- ICON -->

                <div class="dashboard-logout-icon">

                    <i class="fa-solid fa-right-from-bracket"></i>

                </div>


                <!-- TITLE -->

                <div class="dashboard-logout-content">

                    <h2 id="dashboardLogoutTitle">
                        Are you sure you want to<br>
                        logout?
                    </h2>

                </div>


                <!-- BUTTONS -->

                <div class="dashboard-logout-actions">

                    <button
                        type="button"
                        class="dashboard-logout-yes"
                        id="dashboardLogoutYes"
                    >
                        Yes
                    </button>


                    <button
                        type="button"
                        class="dashboard-logout-no"
                        id="dashboardLogoutNo"
                    >
                        No
                    </button>

                </div>

            </div>

        `;


        document.body.appendChild(
            modal
        );


        return modal;

    }


    /* ========================================================
       OPEN LOGOUT MODAL
    ======================================================== */

    function openLogoutModal() {

        const modal =
            createLogoutModal();


        if (!modal) {
            return;
        }


        /* Close mobile sidebar */

        closeSidebar();


        /* Show modal */

        modal.classList.add(
            "logout-modal-active"
        );


        modal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "dashboard-logout-modal-open"
        );


        /* Focus No button */

        const noButton =
            document.getElementById(
                "dashboardLogoutNo"
            );


        if (noButton) {

            setTimeout(
                function () {

                    noButton.focus();

                },
                100
            );

        }

    }


    /* ========================================================
       CLOSE LOGOUT MODAL
    ======================================================== */

    function closeLogoutModal() {

        const modal =
            document.getElementById(
                "dashboardLogoutModal"
            );


        if (!modal) {
            return;
        }


        modal.classList.remove(
            "logout-modal-active"
        );


        modal.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "dashboard-logout-modal-open"
        );

    }


    /* ========================================================
       LOGOUT LINK
    ======================================================== */

    if (logoutLink) {

        logoutLink.addEventListener(
            "click",
            function (event) {

                /*
                 * IMPORTANT:
                 * Stop href="login.html"
                 * from navigating immediately.
                 */

                event.preventDefault();


                /*
                 * Stop the click from triggering
                 * any parent navigation behavior.
                 */

                event.stopPropagation();


                openLogoutModal();

            }
        );

    }


    /* ========================================================
       LOGOUT MODAL BUTTONS
    ======================================================== */

    document.addEventListener(
        "click",
        function (event) {

            /* -----------------------------------------------
               YES
            ----------------------------------------------- */

            if (
                event.target.closest(
                    "#dashboardLogoutYes"
                )
            ) {

                event.preventDefault();


                /*
                 * YES = GO TO LOGIN
                 */

                window.location.href =
                    "login.html";


                return;

            }


            /* -----------------------------------------------
               NO
            ----------------------------------------------- */

            if (
                event.target.closest(
                    "#dashboardLogoutNo"
                )
            ) {

                event.preventDefault();


                /*
                 * NO = CLOSE POPUP
                 */

                closeLogoutModal();


                return;

            }


            /* -----------------------------------------------
               BACKDROP
            ----------------------------------------------- */

            if (
                event.target.closest(
                    "#dashboardLogoutBackdrop"
                )
            ) {

                closeLogoutModal();

            }

        }
    );


    /* ========================================================
       ESCAPE KEY
    ======================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                const modal =
                    document.getElementById(
                        "dashboardLogoutModal"
                    );


                if (
                    modal &&
                    modal.classList.contains(
                        "logout-modal-active"
                    )
                ) {

                    closeLogoutModal();

                } else {

                    closeSidebar();

                }

            }

        }
    );


    /* ========================================================
       BODY SCROLL LOCK
    ======================================================== */

    const dashboardStyle =
        document.createElement("style");


    dashboardStyle.textContent = `

        body.dashboard-sidebar-is-open {
            overflow: hidden;
        }

        body.dashboard-logout-modal-open {
            overflow: hidden;
        }

    `;


    document.head.appendChild(
        dashboardStyle
    );


    /* ========================================================
       INITIAL ARIA STATE
    ======================================================== */

    if (menuToggle) {

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    /* ========================================================
       DASHBOARD READY
    ======================================================== */

    if (dashboard) {

        dashboard.classList.add(
            "dashboard-ready"
        );

    }

});












