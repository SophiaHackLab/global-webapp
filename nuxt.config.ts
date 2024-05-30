// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    srcDir: "src/",
    typescript: {
        strict: true,
        typeCheck: true,
    },
    devServer: {
        host: "0.0.0.0",
    },
    routeRules: {
        "/login": {
            redirect: "/auth/login",
        },
        "/register": {
            redirect: "/auth/register",
        },
        "/logout": {
            redirect: "/auth/logout",
        },
    },
    css: ["~/assets/css/tailwind.css", "~/assets/css/global.css"],
    modules: [
        "@vueuse/nuxt",
        "@nuxtjs/tailwindcss",
        "@tresjs/nuxt",
        "@nuxt/image",
        "nuxt-lucide-icons",
    ],
});
