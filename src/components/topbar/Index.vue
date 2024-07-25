<script setup lang="ts">
import getEvents from "~/composables/event/getEvents";

const { user } = useUserStore();
const route = useRoute();
const isMenuOpen = ref(false);
const newEventCounts = ref(0);

const isScrolling = ref(false);

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

const handleScroll = () => {
    console.log(route.name);
    if (route.name !== "index") return;
    isScrolling.value = window.scrollY > window.innerHeight / 2;
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
                (event: AgendaEvent) =>
                    new Date(event.date).getTime() > new Date().getTime(),
            )?.length;

            menu.value = menu.value.map((item) => {
                if (item.name === "Agenda") {
                    return { ...item, badge: newEventCounts.value };
                }
                return item;
            });
        }
    });

    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
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
            class="w-full h-full lg:h-fit flex flex-col lg:flex-row items-center justify-between lg:justify-center lg:bg-black lg:px-[calc(5rem-20px)]"
            :class="{
                '!bg-black h-screen': isMenuOpen,
                'h-fit': !isMenuOpen,
            }"
        >
            <div
                class="items-center gap-5 w-full justify-between p-5 bg-black flex lg:hidden"
            >
                <NuxtLink
                    to="/"
                    class="text-white font-normal text-2xl text-shadow shadow-white w-fit"
                    :class="{
                        'opacity-0': !isScrolling && route.name === 'index',
                    }"
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
                class="h-full lg:h-fit whitespace-nowrap p-5 w-full"
                :class="{
                    'hidden lg:flex': !isMenuOpen,
                }"
            >
                <div
                    class="flex flex-col lg:flex-row items-center w-full justify-between gap-8 lg:gap-8"
                >
                    <NuxtLink
                        to="/"
                        class="text-white font-normal text-2xl text-shadow shadow-white w-fit hidden lg:flex transition-all"
                        :class="{
                            'opacity-0': !isScrolling && route.name === 'index',
                        }"
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
                    <div class="flex items-center flex-col lg:flex-row gap-8">
                        <TopbarItem
                            :item="{
                                name: 'Nous rejoindre',
                                link: '/#contact',
                            }"
                        />
                        <TopbarItem
                            :item="{
                                name: 'Nos services',
                                link: '/services',
                            }"
                        />

                        <TopbarItem
                            :item="{
                                name: 'Nos évènements',
                                link: '/agenda',
                                badge: newEventCounts,
                            }"
                        />
                        <TopbarItem
                            :item="{
                                name: 'Nous soutenir',
                                link: 'https://www.helloasso.com/associations/sophi-hack',
                            }"
                        />
                    </div>
                    <span class="lg:hidden"> -</span>
                    <div class="flex items-center flex-col lg:flex-row gap-8">
                        <!-- <TopbarItem
                            :item="{
                                name: 'Nous trouver',
                                link: '/#find-us',
                            }"
                        /> -->
                        <TopbarItem
                            :item="{
                                name: 'Contact',
                                link: '/#contact',
                            }"
                        />
                    </div>
                </div>
            </div>
            <!--  <div
                class="flex items-center gap-5 w-full justify-end p-5"
                :class="{
                    'hidden lg:flex': !isMenuOpen,
                }"
            >
                <NuxtLink v-if="!user" to="/login">Se connecter</NuxtLink>
                <Button theme="ghost" v-else title="Se déconnecter" @click="logout" />
            </div> -->
        </div>
    </nav>
</template>
