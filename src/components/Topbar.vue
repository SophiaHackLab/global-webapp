<script setup lang="ts">
const { user, logout } = useUserStore();
const route = useRoute();
const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};

const menu = ref([
    { name: "A propos", link: "/about" },
    {
        name: "Coworking",
        link: "/coworking",
    },
    { name: "Agenda", link: "/agenda" },
    { name: "Projets", link: "/projects" },
    { name: "Contact", link: "/contact" },
]);

watch(
    () => route.fullPath,
    () => {
        closeMenu();
    },
);
</script>

<template>
    <nav class="w-full flex items-center justify-center fixed top-0 z-10">
        <div
            class="w-full lg:h-fit flex flex-col lg:flex-row items-center justify-between lg:bg-black lg:px-[calc(5rem-20px)]"
            :class="{
                '!bg-black h-screen': isMenuOpen,
                'h-fit': !isMenuOpen,
            }"
        >
            <div class="flex items-center gap-5 w-full justify-between p-5 bg-black">
                <NuxtLink
                    to="/"
                    class="text-white font-normal text-2xl text-shadow shadow-white w-fit"
                >
                    <NuxtImg src="/logo_rounded.png" width="50" height="50" class="w-full h-full" />
                </NuxtLink>
                <button @click="toggleMenu" class="lg:hidden text-white font-bold text-2xl p-2">
                    <LucideX color="white" :size="28" v-if="isMenuOpen" />
                    <LucideMenu color="white" :size="28" v-else />
                </button>
            </div>
            <div
                class="flex flex-col lg:flex-row items-center gap-8 lg:gap-5 whitespace-nowrap p-5"
                :class="{
                    'hidden lg:flex': !isMenuOpen,
                }"
            >
                <NuxtLink v-for="item in menu" :to="item.link">{{ item.name }}</NuxtLink>
            </div>
            <div
                class="flex items-center gap-5 w-full justify-end p-5"
                :class="{
                    'hidden lg:flex': !isMenuOpen,
                }"
            >
                <NuxtLink v-if="!user" to="/login">Se connecter</NuxtLink>
                <Button theme="ghost" v-else title="Se déconnecter" @click="logout" />
            </div>
        </div>
    </nav>
</template>
