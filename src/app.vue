<script setup lang="ts">
const head = {
    title: "SHL - Sophia HackLab",
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
