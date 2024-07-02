<script setup lang="ts">
import getEvents from "~/composables/event/getEvents";

const { user } = useUserStore();
const route = useRoute();
const isMenuOpen = ref(false);
const newEventCounts = ref(0);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};

const logout = () => {
    localStorage.removeItem("session");
    window.location.href = "/";
};

const menu = ref([
    { name: "A propos", link: "/#about" },
    {
        name: "Coworking",
        link: "/coworking",
    },
    { name: "Agenda", link: "/agenda", badge: newEventCounts.value },
    { name: "Projets", link: "/projects" },
    { name: "Contact", link: "/contact" },
]);

onMounted(() => {
    getEvents().then((events) => {
        if (events) {
            newEventCounts.value = events?.filter(
                (event: AgendaEvent) => new Date(event.date).getTime() > new Date().getTime(),
            )?.length;

            menu.value = menu.value.map((item) => {
                if (item.name === "Agenda") {
                    return { ...item, badge: newEventCounts.value };
                }
                return item;
            });
        }
    });
});

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
                    <NuxtImg
                        src="/logo_rounded.png"
                        width="50"
                        height="50"
                        alt="Logo rounded shl sophia hack lab"
                        class="w-full h-full"
                        preload
                    />
                </NuxtLink>
                <button
                    @click="toggleMenu"
                    class="lg:hidden text-white font-bold text-2xl p-2"
                    title="Open menu links"
                    aria-label="Open menu links"
                >
                    <IconsCross color="white" :size="28" v-if="isMenuOpen" />
                    <IconsMenu color="white" :size="28" v-else />
                </button>
            </div>
            <div
                class="flex flex-col lg:flex-row items-center gap-8 lg:gap-5 whitespace-nowrap p-5"
                :class="{
                    'hidden lg:flex': !isMenuOpen,
                }"
            >
                <NuxtLink v-for="item in menu" :to="item.link" class="flex items-center gap-2"
                    >{{ item.name }}
                    <span
                        v-if="item.badge"
                        class="bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5"
                    >
                        {{ item.badge }}
                    </span>
                </NuxtLink>
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
