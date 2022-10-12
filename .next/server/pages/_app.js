"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WL": () => (/* binding */ fadeInUPSkills),
/* harmony export */   "ih": () => (/* binding */ fadeInUP),
/* harmony export */   "zk": () => (/* binding */ fadeInUpChildrens)
/* harmony export */ });
const fadeInUP = {
    initial: {
        opacity: 0,
        y: 60
    },
    animate: {
        opacity: 1,
        y: 0
    }
};
const fadeInUpChildrens = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};
const fadeInUPSkills = {
    initial: {
        opacity: 0,
        y: 60
    },
    animate: {
        opacity: 1,
        y: -35
    }
};


/***/ }),

/***/ 7184:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Navbar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(9709);
;// CONCATENATED MODULE: ./src/components/Navbar.tsx





// component link
const NavItem = ({ activeItem , name , route , handleSelecLink  })=>{
    const { t  } = (0,external_react_i18next_.useTranslation)("navbar");
    return activeItem.toLocaleLowerCase() !== t(name).toLocaleLowerCase() ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: route,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "hover:text-green dark:text-white dark:hover:text-green",
                onClick: ()=>handleSelecLink(name),
                children: t(name)
            })
        })
    }) : null;
};
// Render navbar 
const Navbar = ()=>{
    const { t  } = (0,external_react_i18next_.useTranslation)("navbar");
    const { 0: activeItem , 1: setActiveItem  } = (0,external_react_.useState)("");
    const { pathname  } = (0,router_namespaceObject.useRouter)();
    (0,external_react_.useEffect)(()=>{
        if (pathname === "/") setActiveItem(t("about"));
        if (pathname === "/projects") setActiveItem(t("projects"));
        if (pathname === "/resume") setActiveItem(t("resume"));
    }, [
        pathname
    ]);
    const navData = [
        {
            name: "about",
            route: "/"
        },
        {
            name: "projects",
            route: "/projects"
        },
        {
            name: "resume",
            route: "/resume"
        }, 
    ];
    const handleSelecLink = ()=>{};
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between px-5 py-3 my-3",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-xl font-bold border-b-4 text-green border-green md:text-2xl",
                children: activeItem
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex space-x-5 text-lg",
                children: navData.map((item, index)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                        activeItem: activeItem,
                        name: item.name,
                        route: item.route,
                        handleSelecLink: handleSelecLink
                    }, index);
                })
            })
        ]
    });
};
/* harmony default export */ const components_Navbar = (Navbar);


/***/ }),

/***/ 706:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5856);
/* harmony import */ var react_icons_go__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_go__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6197);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8514);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_5__]);
framer_motion__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Sidebar = ()=>{
    const { t , i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)("sidebar");
    const { theme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const { 0: lenguage , 1: setLenguaje  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)();
    const handleChangeTheme = ()=>{
        setTheme(theme === "light" ? "dark" : "light");
    };
    console.log(i18n.language, "asdsadsadsa");
    const handleChangeLenguage = ()=>{
        let lenguaje = i18n.language;
        setLenguaje(lenguaje);
        if (lenguaje === "es") {
            i18n.changeLanguage("en");
        } else {
            i18n.changeLanguage("es");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
        variants: _animations__WEBPACK_IMPORTED_MODULE_6__/* .fadeInUpChildrens */ .zk,
        animate: "animate",
        initial: "initial",
        className: "font-bold",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: "/img/avatar.jpeg",
                alt: "fede",
                width: 100,
                height: 100,
                className: "mx-auto rounded-full"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.h3, {
                variants: _animations__WEBPACK_IMPORTED_MODULE_6__/* .fadeInUP */ .ih,
                className: "my-4 text-2xl font-extrabold tracking-wider dark:text-white",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-extrabold text-green",
                        children: "Federico "
                    }),
                    "Castro"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.p, {
                variants: _animations__WEBPACK_IMPORTED_MODULE_6__/* .fadeInUP */ .ih,
                className: "px-1 py-1 my-3 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-white",
                children: "Frontend developer"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.a, {
                variants: _animations__WEBPACK_IMPORTED_MODULE_6__/* .fadeInUP */ .ih,
                className: "flex items-center justify-center gap-2 px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-white",
                href: "mailto:fgc_castro@live.com",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiMailSend, {
                        className: "w-6 h-6 dark:text-white"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: t("email")
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                variants: _animations__WEBPACK_IMPORTED_MODULE_6__/* .fadeInUP */ .ih,
                className: "flex justify-around w-9/12 mx-auto my-5 md:w-full",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "https://github.com/FedericoGabrielCastro",
                        rel: "nofollow noreferrer",
                        target: "_blank",
                        children: [
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillGithub, {
                                className: "w-10 h-10 cursor-pointer text-black-500 dark:text-black"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "https://www.linkedin.com/in/federico-gabriel-castro-837417186/",
                        rel: "nofollow noreferrer",
                        target: "_blank",
                        children: [
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillLinkedin, {
                                className: "w-10 h-10 text-blue-500 cursor-pointer"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                variants: _animations__WEBPACK_IMPORTED_MODULE_6__/* .fadeInUP */ .ih,
                className: "py-4 my-5 bg-gray-200 dark:bg-gray-700",
                style: {
                    marginLeft: "-1rem",
                    marginRight: "-1rem"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-center space-x-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_go__WEBPACK_IMPORTED_MODULE_3__.GoLocation, {
                                className: "dark:text-white"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "dark:text-white",
                                children: " Buenos Aires "
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "my-1 dark:text-white",
                        children: "fgc_castro@live.com"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "my-1 dark:text-white",
                        children: "011 1530556626"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
                variants: _animations__WEBPACK_IMPORTED_MODULE_6__/* .fadeInUP */ .ih,
                className: "flex flex-col items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: "relative inline-flex items-center mb-5 cursor-pointer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "checkbox",
                                value: "",
                                onChange: handleChangeLenguage,
                                id: "small-toggle",
                                className: "sr-only peer"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300",
                                children: lenguage === "es" ? "En" : "Es"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                        className: "relative inline-flex items-center gap-3 mb-5 cursor-pointer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "checkbox",
                                onChange: handleChangeTheme,
                                value: "",
                                id: "small-toggle",
                                className: "sr-only peer"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__.FaSun, {
                                className: "dark:text-yellow-300"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9766:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2021);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9709);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _locale_en_sidebar_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(860);
/* harmony import */ var _locale_en_experience_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6986);
/* harmony import */ var _locale_en_testimonials_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6878);
/* harmony import */ var _locale_en_navbar_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9968);
/* harmony import */ var _locale_en_home_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5564);
/* harmony import */ var _locale_en_resume_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3408);
/* harmony import */ var _locale_es_sidebar_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3756);
/* harmony import */ var _locale_es_experience_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(821);
/* harmony import */ var _locale_es_testimonials_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(141);
/* harmony import */ var _locale_es_navbar_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4000);
/* harmony import */ var _locale_es_home_json__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9626);
/* harmony import */ var _locale_es_resume_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6130);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__]);
i18next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// IMPORT EN






// IMPORT ES 






const resources = {
    en: {
        sidebar: _locale_en_sidebar_json__WEBPACK_IMPORTED_MODULE_2__,
        experience: _locale_en_experience_json__WEBPACK_IMPORTED_MODULE_3__,
        testimonials: _locale_en_testimonials_json__WEBPACK_IMPORTED_MODULE_4__,
        navbar: _locale_en_navbar_json__WEBPACK_IMPORTED_MODULE_5__,
        home: _locale_en_home_json__WEBPACK_IMPORTED_MODULE_6__,
        resume: _locale_en_resume_json__WEBPACK_IMPORTED_MODULE_7__
    },
    es: {
        sidebar: _locale_es_sidebar_json__WEBPACK_IMPORTED_MODULE_8__,
        experience: _locale_es_experience_json__WEBPACK_IMPORTED_MODULE_9__,
        testimonials: _locale_es_testimonials_json__WEBPACK_IMPORTED_MODULE_10__,
        navbar: _locale_es_navbar_json__WEBPACK_IMPORTED_MODULE_11__,
        home: _locale_es_home_json__WEBPACK_IMPORTED_MODULE_12__,
        resume: _locale_es_resume_json__WEBPACK_IMPORTED_MODULE_13__
    }
};
i18next__WEBPACK_IMPORTED_MODULE_0__["default"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({
    resources,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    }
});
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (i18n)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(706);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7184);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1162);
/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9766);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__, _i18n_i18n__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__, _i18n_i18n__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const MyApp = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_themes__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {
        attribute: "class",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid grid-cols-12 gap-6 px-5 my-10 lg:px-50 sm:px-20 md:px-45",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-span-12 p-4 text-center bg-white dark:bg-gray-800 lg:col-span-3 rounded-2xl",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col col-span-12 overflow-hidden bg-white dark:bg-gray-800 lg:col-span-9 rounded-2xl",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.appWithTranslation)(MyApp));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1377:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9709:
/***/ ((module) => {

module.exports = require("react-i18next");

/***/ }),

/***/ 9847:
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 5856:
/***/ ((module) => {

module.exports = require("react-icons/go");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 2021:
/***/ ((module) => {

module.exports = import("i18next");;

/***/ }),

/***/ 6986:
/***/ ((module) => {

module.exports = JSON.parse('{"descriptionItTech":"Development of an online casino covering the games Poker, blackjack and Roulette","descriptionUpjaunt":"Development of a mobile and web travel app to connect with other travelers and share their experiences"}');

/***/ }),

/***/ 5564:
/***/ ((module) => {

module.exports = JSON.parse('{"skills":"Skills","textOne":"I am a Front-end developer with advanced knowledge in website development with good JavaScript and TypeScript skills.","textTwo":"In my experience I have been in charge of various professional challenges for which I consider myself a versatile programmer.","textThree":"I am passionate about computers. I am willing to learn new technologies."}');

/***/ }),

/***/ 9968:
/***/ ((module) => {

module.exports = JSON.parse('{"resume":"Resume","about":"About","projects":"Projects"}');

/***/ }),

/***/ 3408:
/***/ ((module) => {

module.exports = JSON.parse('{"work":"Work experience"}');

/***/ }),

/***/ 860:
/***/ ((module) => {

module.exports = JSON.parse('{"email":"Send Email"}');

/***/ }),

/***/ 6878:
/***/ ((module) => {

module.exports = JSON.parse('{"martinDescription":"Federico ha demostrado dominar el arte místico de la programación, usando Django, React, Redux, React Native y muchas otras tecnologías más. Además, tiene la capacidad de aprender rápidamente tecnologías nuevas.","maxiDescription":"Federico por sobre todo es un colaborador leal en la empresa. Siempre tiene animos de aprender y aportar los conocimientos que va adquiriendo. Tiene capacidades excepcionales para su trayectoría y cumple cada cosa demandada, sobre entregando. Un placer trabajar con él.","joaquinDescription":"Trabajé con Federico durante 6 meses y puedo dar fe de que es un excelente compañero de equipo; mostrándose siempre con una actitud positiva, seria y sobretodo responsable para con las tareas a desarrollar. Destacandose con sus habilidades en el Frontend de distintos proyectos como juegos online."}');

/***/ }),

/***/ 821:
/***/ ((module) => {

module.exports = JSON.parse('{"descriptionItTech":"Desarrollo de un casino en línea que cubre los juegos de póquer, blackjack y ruleta","descriptionUpjaunt":"Desarrollo de una aplicación móvil y web de viajes para conectarse con otros viajeros y compartir sus experiencias"}');

/***/ }),

/***/ 9626:
/***/ ((module) => {

module.exports = JSON.parse('{"skills":"Habilidades","textOne":"Soy un desarrollador Front-end con conocimiento avanzado en el desarrollo de sitios web con buenas habilidades en el manejo de JavaScript y TypeScript.","textTwo":"En mi experiencia me he encargado de diversos retos profesionales por lo cual me considero un programador versátil.","textThree":"Soy un apasionado de la informática. Tengo disposición de aprender nuevas tecnologías."}');

/***/ }),

/***/ 4000:
/***/ ((module) => {

module.exports = JSON.parse('{"resume":"Resumen","about":"Acerca","projects":"Proyectos"}');

/***/ }),

/***/ 6130:
/***/ ((module) => {

module.exports = JSON.parse('{"work":"Experiencia laboral"}');

/***/ }),

/***/ 3756:
/***/ ((module) => {

module.exports = JSON.parse('{"email":"Enviar Email"}');

/***/ }),

/***/ 141:
/***/ ((module) => {

module.exports = JSON.parse('{"martinDescription":"Federico has proven to master the mystical art of programming, using Django, React, Redux, React Native and many other technologies. In addition, he has the ability to quickly learn new technologies.","maxiDescription":"Federico above all is a loyal collaborator in the company. He is always eager to learn and contribute the knowledge he acquires. It has exceptional capabilities for its trajectory and fulfills everything demanded, over delivering. A pleasure to work with him.","joaquinDescription":"I worked with Federico for 6 months and I can attest that he is an excellent teammate; always showing a positive, serious and above all responsible attitude towards the tasks to be carried out. Standing out with his skills in the Frontend of different projects such as online games."}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [598,675,676,664], () => (__webpack_exec__(2957)));
module.exports = __webpack_exports__;

})();