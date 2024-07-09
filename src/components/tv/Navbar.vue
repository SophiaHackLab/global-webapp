<script setup lang="ts">
const isNavbarHidden = ref(false);

onMounted(() => {
    // Automatically hide the navbar after 5 seconds
    setTimeout(() => {
        isNavbarHidden.value = true;
    }, 3000);

    // Automatically show the navbar when the mouse is moved
    window.addEventListener("mousemove", () => {
        isNavbarHidden.value = false;
    });
});
</script>

<template>
    <div class="fixed h-screen items-center justify-center left-0 flex flex-col top-0 z-50">
        <div
            class="flex flex-col h-fit bg-black border border-l-0 border-white transition-all duration-500 ease-in-out"
            :class="{
                '-translate-x-full': isNavbarHidden,
            }"
        >
            <NuxtLink
                to="/tvmode"
                class="text-white w-20 aspect-square p-5 active:text-white/70 transition-all"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-tv-minimal-play w-full h-full"
                >
                    <path
                        d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"
                    />
                    <path d="M7 21h10" />
                    <rect width="20" height="14" x="2" y="3" rx="2" />
                </svg>
            </NuxtLink>
            <NuxtLink
                to="/tvmode/qr"
                class="text-white w-20 aspect-square p-5 active:text-white/70 transition-all"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-qr-code w-full h-full"
                >
                    <rect width="5" height="5" x="3" y="3" rx="1" />
                    <rect width="5" height="5" x="16" y="3" rx="1" />
                    <rect width="5" height="5" x="3" y="16" rx="1" />
                    <path d="M21 16h-3a2 2 0 0 0-2 2v3" />
                    <path d="M21 21v.01" />
                    <path d="M12 7v3a2 2 0 0 1-2 2H7" />
                    <path d="M3 12h.01" />
                    <path d="M12 3h.01" />
                    <path d="M12 16v.01" />
                    <path d="M16 12h1" />
                    <path d="M21 12v.01" />
                    <path d="M12 21v-1" />
                </svg>
            </NuxtLink>
        </div>
    </div>
</template>
