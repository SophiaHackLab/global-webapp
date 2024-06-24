<script setup lang="ts">
const all_repos: any = ref(null);
const isErrored = ref(false);

definePageMeta({
    middleware: "auth",
});
</script>

<template>
    <div class="px-5 md:px-20 flex flex-col w-full pt-32 h-full min-h-screen max-w-7xl">
        <h1
            class="text-4xl text-center font-bold uppercase text-white whitespace-nowrap text-shadow shadow-white mt-10"
        >
            Contact
        </h1>
        <div class="flex flex-col items-center justify-center gap-5 mt-10">
            <div class="flex items-center gap-5">
                <a href="https://www.linkedin.com/company/sophia-hack-lab/" target="_blank">
                    <IconsBrandsLinkedin class="text-white w-12 h-12" />
                </a>
                <a href="https://discord.gg/27GfdV4Jd9" target="_blank">
                    <IconsBrandsDiscord class="text-white w-12 h-12" />
                </a>
                <a href="https://api.whatsapp.com/send?phone=33685926988" target="_blank">
                    <IconsBrandsWhatsapp class="text-white w-12 h-12" />
                </a>
                <a href="https://instagram.com/shl_sophiahacklab" target="_blank">
                    <IconsBrandsInstagram class="text-white w-12 h-12" />
                </a>
                <a href="https://github.com/SophiaHackLab" target="_blank">
                    <IconsBrandsGithub class="text-white w-12 h-12" />
                </a>
            </div>

            <div class="flex flex-col items-center gap-5 max-w-lg">
                <p class="text-white/80 text-center">
                    Pour nous contacter, vous pouvez nous retrouver sur les réseaux sociaux ou nous
                    envoyer un mail à l'adresse suivante :
                </p>
                <a href="mailto:crew@shl.contact" class="text-white text-lg"> crew@shl.contact </a>
            </div>
        </div>
    </div>
</template>
