import i18n, { Module} from "i18next";
import { initReactI18next } from "react-i18next";

// IMPORT EN
import sidebar_EN from "./locale/en/sidebar.json"
import experience_EN from "./locale/en/experience.json"
import testimonials_EN from "./locale/en/testimonials.json"
import navbar_EN from "./locale/en/navbar.json"
import home_EN from "./locale/en/home.json"
import resume_EN from "./locale/en/resume.json"
import proyects_EN from "./locale/en/proyects.json"

// IMPORT ES 
import sidebar_ES from "./locale/es/sidebar.json"
import experience_ES from "./locale/es/experience.json"
import testimonials_ES from "./locale/es/testimonials.json"
import navbar_ES from "./locale/es/navbar.json"
import home_ES from "./locale/es/home.json"
import resume_ES from "./locale/es/resume.json"
import proyects_ES from "./locale/es/proyects.json"

const resources = {
    en: {
        sidebar: sidebar_EN,
        experience: experience_EN,
        testimonials: testimonials_EN,
        navbar: navbar_EN,
        home: home_EN,
        resume: resume_EN,
        projects: proyects_EN
    },
    es: {
        sidebar: sidebar_ES,
        experience: experience_ES,
        testimonials: testimonials_ES,
        navbar: navbar_ES,
        home: home_ES,
        resume: resume_ES,
        projects: proyects_ES
    }
}

i18n.use(initReactI18next)
    .init({
        resources,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    })

export default i18n