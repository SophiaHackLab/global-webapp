<script setup lang="ts">
const word = ref("ERREUR #404 Page introuvable");
</script>

<template>
    <div class="h-screen w-full flex items-center justify-center flex-col gap-2">
        <div class="w-96 h-96 border border-white overflow-hidden flex items-end group">
            <h1
                class="text-4xl text-center font-bold uppercase text-white whitespace-nowrap space-x-1.5 animate-inftranslate text-shadow shadow-white"
            >
                <span
                    v-for="(letter, index) in word"
                    class="animate-megabounce inline-block"
                    :style="'animation-delay: ' + index * 100 + 'ms;'"
                >
                    {{ letter }}
                </span>
            </h1>
        </div>
        <NuxtLink to="/">< Retour à l'accueil</NuxtLink>
    </div>
</template>
