<script setup lang="ts">
const username = ref("");
const email = ref("");
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
            S'inscrire
        </h1>
        <form class="flex flex-col gap-2 w-80" :on-submit="handleSubmit">
            <input
                v-model="username"
                type="text"
                name="username"
                placeholder="Nom d'utilisateur"
                class="p-2 bg-white text-black"
            />
            <input
                v-model="email"
                type="email"
                name="email"
                placeholder="Adresse email"
                class="p-2 bg-white text-black"
            />
            <input
                v-model="password"
                type="password"
                name="password"
                placeholder="Mot de passe"
                class="p-2 bg-white text-black"
            />
            <Button theme="primary" title="S'inscrire" :expand="true" type="submit" />
        </form>
    </div>
</template>
