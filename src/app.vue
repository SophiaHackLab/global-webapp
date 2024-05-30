<script setup lang="ts">
const head = {
    title: "SHL - Sophia HackLab",
    link: [{ id: "favicon", rel: "icon", href: "/favicon.ico" }],
    meta: [
        {
            id: "description",
            property: "description",
            content:
                "Le SHL (Sophia Hack Lab) est un hackerspace. Un lieu géré collaborativement par ses membres. Il fournit à Sophia Antipolis un environnement pour des projets techniques-créatifs.",
        },
    ],
};

const router = useRouter();

// Handle error
router.onError((error) => {
    console.error(error);
});
</script>

<template>
    <div class="app">
        <Html lang="fr">
            <Head>
                <Title>{{ head.title }}</Title>
                <Link
                    v-for="link in head.link"
                    :id="link.id"
                    :key="link.id"
                    :rel="link.rel"
                    :href="link.href"
                />
                <Meta
                    v-for="meta in head.meta"
                    :id="meta.id"
                    :key="meta.id"
                    :property="meta.property"
                    :content="meta.content"
                />
            </Head>
            <Body class="h-full w-full">
                <NuxtLayout>
                    <NuxtPage />
                </NuxtLayout>
            </Body>
        </Html>
    </div>
</template>
