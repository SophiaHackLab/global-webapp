<script setup lang="ts">
const all_repos: any = ref(null);
const isErrored = ref(false);

const fetchRepos = async () => {
    const response = await fetch("https://api.github.com/users/sophiahacklab/repos")
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            isErrored.value = true;
            throw new Error("Network response was not ok.");
        })
        .catch((error) => {
            isErrored.value = true;
        });
    if (response)
        all_repos.value = response.filter(
            (repo: any) => !repo.fork && !repo.archived && repo.name !== ".github",
        );
};

onMounted(() => {
    fetchRepos();
});

definePageMeta({
    middleware: "auth",
});
</script>

<template>
    <div class="px-5 md:px-20 flex flex-col w-full pt-32 h-full min-h-screen max-w-7xl">
        <h1
            class="text-4xl text-center font-bold uppercase text-white whitespace-nowrap text-shadow shadow-white mt-10"
        >
            Les projets
        </h1>
        <div
            v-if="all_repos?.length && !isErrored"
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10"
        >
            <div
                v-for="repo in all_repos"
                :key="repo.id"
                class="border border-white/50 p-5 flex flex-col gap-5 justify-between h-full"
            >
                <div class="flex flex-col gap-5">
                    <h2 class="text-xl font-bold">{{ repo.name }}</h2>
                    <p class="text-white/70">{{ repo.description }}</p>
                </div>
                <a :href="repo.html_url" target="_blank" class="text-blue-500">Voir le projet</a>
            </div>
        </div>
        <div v-else-if="isErrored" class="text-center mt-10">
            <h2 class="text-2xl">Une erreur est survenue</h2>
            <p class="text-white/70">Veuillez réessayer plus tard</p>
        </div>
        <div v-else class="text-center mt-10">
            <h2 class="text-2xl">Chargement...</h2>
        </div>
    </div>
</template>
