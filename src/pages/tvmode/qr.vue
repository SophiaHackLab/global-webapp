<script setup lang="ts">
import vueQr from "vue-qr/src/packages/vue-qr.vue";

definePageMeta({
    layout: "tv",
});
</script>

<template>
    <NuxtParticles id="tsparticles" url="/particles.json"></NuxtParticles>
    <div class="flex flex-col gap-5 items-center pt-20 z-20">
        <div class="flex flex-col items-center">
            <div class="w-24 md:w-32 3xl:w-36 py-10 aspect-[0.76]">
                <NuxtImg
                    preload
                    src="/logo.png"
                    class="w-full object-contain"
                    alt="Logo rounded shl sophia hack lab"
                />
            </div>
            <h1
                class="text-4xl text-center font-bold uppercase text-white whitespace-nowrap text-shadow shadow-white"
            >
                Rejoignez-nous
                <span class="relative border-r-8 border-white animate-typingpulse">!</span>
            </h1>
        </div>
        <div class="flex gap-2.5">
            <IconsPin class="w-6 h-6 min-w-6 mt-0.5 text-white" />
            <a target="_blank" class="text-lg text-center font-normal">
                Space 9 Antipolis, 2323 Chem. Saint-Bernard 06220 Vallauris
            </a>
        </div>
        <div class="w-fit flex flex-row items-center justify-center gap-10 mt-10">
            <div class="flex flex-col items-center justify-center">
                <ClientOnly>
                    <vueQr text="https://www.shl.contact" backgroundColor="#000000" />
                </ClientOnly>
                <p class="text-white text-center text-xl">www.shl.contact</p>
            </div>
        </div>
    </div>
</template>
