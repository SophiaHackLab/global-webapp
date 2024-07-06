<script setup lang="ts">
const head = {
    title: "SHL - Sophia Hack Lab : Un hackerspace à Sophia Antipolis",
    link: [
        {
            rel: "canonical",
            href: "https://www.shl.contact/",
        },
        { id: "favicon", rel: "icon", href: "/favicon.ico" },
        {
            rel: "preconnect",
            href: "https://fonts.gstatic.com",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@400;500;700&display=swap",
        },

    ],
    meta: [
        {
            name: "description",
            content:
                "SHL (Sophia Hack Lab), hackerspace collaboratif basé à Sophia Antipolis. Il fournit un environnement pour des projets techniques-créatifs.",
        },
        {
            name: "keywords",
            content:
                "Sophia Hack Lab, SHL, hackerspace, Sophia Antipolis, coworking, hackerspace Sophia Antipolis, hackerspace France, hackerspace Alpes-Maritimes, hackerspace PACA, hackerspace Côte d'Azur, hackerspace French Riviera, hackerspace 06, hackerspace Vallauris, hackerspace Antibes, hackerspace Biot, hackerspace Valbonne, hackerspace Mougins, hackerspace Cannes, hackerspace Grasse, hackerspace Nice",
        },
        {
            name: "author",
            content: "SHL - Sophia Hack Lab",
        },
        {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
        },
        {
            name: "theme-color",
            content: "#000000",
        },
        {
            name: "apple-touch-icon",
            content: "/logo.png",
        },
       
    ],
};

useHead(head);
</script>

<template>
    <div class="app">
        <Html lang="fr">
            <Body class="h-full w-full">
                <NuxtLoadingIndicator color="white" />
                <NuxtLayout>
                    <NuxtPage />
                </NuxtLayout>
            </Body>
        </Html>
    </div>
</template>
