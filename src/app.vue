<script setup lang="ts">
const head = {
    title: "SHL - Sophia Hack Lab",
    link: [
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
                "Le SHL (Sophia Hack Lab) est un hackerspace. Un lieu géré collaborativement par ses membres. Il fournit à Sophia Antipolis un environnement pour des projets techniques-créatifs.",
        },
        {
            name: "keywords",
            content:
                "SHL, Sophia Hack Lab, hackerspace, Sophia Antipolis, makerspace, hackerspace, hackerspace Sophia Antipolis, hackerspace France, hackerspace Alpes-Maritimes, hackerspace PACA, hackerspace Côte d'Azur, hackerspace French Riviera, hackerspace 06, hackerspace Vallauris, hackerspace Antibes, hackerspace Biot, hackerspace Valbonne, hackerspace Mougins, hackerspace Cannes, hackerspace Grasse, hackerspace Nice",
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
