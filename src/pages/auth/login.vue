<script setup lang="ts">
const username = ref("");
const password = ref("");

const handleSubmit = () => {
    console.log(username, password);
};
</script>
<template>
    <div class="h-screen w-full flex items-center justify-center flex-col gap-5">
        <h1
            class="text-4xl text-center font-bold uppercase text-white whitespace-nowrap text-shadow shadow-white"
        >
            Connexion
        </h1>
        <form class="flex flex-col gap-2 w-80" :on-submit="handleSubmit">
            <input
                v-model="username"
                type="text"
                placeholder="Nom d'utilisateur"
                class="p-2 bg-white text-black"
            />
            <input
                v-model="password"
                type="password"
                placeholder="Mot de passe"
                class="p-2 bg-white text-black"
            />
            <Button theme="primary" title="Se connecter" :expand="true" type="submit" />
            <NuxtLink class="text-sm text-white/80 mt-1 text-center">Tu as oublié ton mdp ? Tant pis.</NuxtLink>
        </form>
    </div>
</template>
