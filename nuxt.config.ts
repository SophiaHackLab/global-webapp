// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    srcDir: "src",
    typescript: {
        shim: false,
    },
    imports: {
        dirs: ["stores"],
    },

    /* devServer: {
        host: "0.0.0.0",
    }, */
    runtimeConfig: {
        public: {
            API_URL: process.env.NUXT_PUBLIC_API_URL || "https://api.shl.contact",
        },
    },
    routeRules: {
        "/": {
            prerender: true,
        },
        "/agenda": {
            swr: true,
        },
        "/agenda/:id": {
            ssr: true,
        },
        "/login": {
            redirect: "/auth/login",
        },
        "/register": {
            redirect: "/auth/register",
        },
        "/logout": {
            redirect: "/auth/logout",
        },
         "/keepitopen": {
            redirect: "https://www.helloasso.com/associations/sophi-hack/formulaires/2", // Replace with your external URL
        },
    },
    css: ["~/assets/css/tailwind.css", "~/assets/css/global.css"],
    modules: [
        "@vueuse/nuxt",
        "@pinia/nuxt",
        "@nuxtjs/tailwindcss",
        "@tresjs/nuxt",
        "@nuxt/image",
        "nuxt-particles",
    ],
    pinia: {
        autoImports: ["defineStore", "storeToRefs"],
    },
});
