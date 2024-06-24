<script setup lang="ts">
const gallery = ref([
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/TWbeRGaDYxXnGKe?file=/&fileId=1320&x=3600&y=1800&a=true",
        span_y: 2,
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/bTSMNG46HkjfZT2?file=/&fileId=1320&x=3600&y=1800&a=true",
        span_x: 2,
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/zqp7HLb9tcYdc6Q?file=/&fileId=1320&x=3600&y=1800&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/x5RcgB2tLkgx2Zq?file=/&fileId=1320&x=3600&y=1800&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/Ma5ajqgYAxBKtWP?file=/&fileId=1320&x=3600&y=1800&a=true",
        span_x: 2,
        span_y: 2,
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/P67JoGJCy3LWMyc?file=/&fileId=1320&x=3600&y=1800&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/8XRHne4NpXRXqdj?file=/&fileId=1320&x=3600&y=1800&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/nMdHwDedRL5QzHe?file=/&fileId=1320&x=3600&y=1800&a=true",
        span_y: 2,
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/pdX9kkgr7ekoKHe?file=/&fileId=1320&x=3600&y=1800&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/befESEAbSiziifi?file=/&fileId=1320&x=3600&y=1800&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/84DWGctKcsDFgcW?file=/&fileId=1320&x=3600&y=1800&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/q7Q6Ycbmo4gHaaH?file=/&fileId=1320&x=3600&y=1800&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/9SjsN9LYJ598LbX?file=/&fileId=1320&x=3600&y=1800&a=true",
        span_x: 2,
    },
]);

definePageMeta({
    middleware: "auth",
});
</script>

<template>
    <div>
        <header
            class="w-full h-full md:h-screen flex flex-col md:flex-row items-center gap-10 overflow-hidden"
        >
            <div
                class="full md:w-1/2 flex flex-col gap-8 pt-32 md:pt-0 justify-between pl-5 md:pl-20"
            >
                <div class="flex flex-col gap-8">
                    <div class="flex flex-col">
                        <!--  <p class="uppercase mb-2">BIENVENUE</p> -->
                        <div class="w-32 3xl:w-36 py-10 aspect-[0.76]">
                            <NuxtImg
                                preload
                                src="/logo.png"
                                class="w-full object-contain"
                                alt="Logo rounded shl sophia hack lab"
                            />
                        </div>
                        <h1 class="text-4xl text-left leading-tight">
                            Le SHL est un
                            <a href="https://fr.wikipedia.org/wiki/Hackerspace" target="_blank"
                                >HACKERSPACE</a
                            >.
                            <br />
                            <p>
                                Un environnement pour des projets techniques et
                                <span class="relative border-r-8 border-white animate-typingpulse">
                                    créatifs.
                                </span>
                            </p>
                        </h1>
                        <p class="text-lg text-left mt-5 text-white/80 w-4/5">
                            À Sophia-Antipolis.<br />
                            Géré collaborativement par ses membres.<br />
                            À but non lucratif.
                        </p>
                    </div>
                    <Button title="Voir les évènements >" link="/agenda" theme="primary" />
                </div>
                <div class="w-full flex items-center gap-5">
                    <a
                        href="https://www.linkedin.com/company/sophia-hack-lab/"
                        target="_blank"
                        title="Linkedin shl sophia hack lab"
                    >
                        <IconsBrandsLinkedin class="text-white w-8 h-8" />
                    </a>
                    <a
                        href="https://discord.gg/27GfdV4Jd9"
                        target="_blank"
                        title="Discord shl sophia hack lab"
                    >
                        <IconsBrandsDiscord class="text-white w-8 h-8" />
                    </a>
                    <a
                        href="https://api.whatsapp.com/send?phone=33685926988"
                        target="_blank"
                        title="Whatsapp shl sophia hack lab"
                    >
                        <IconsBrandsWhatsapp class="text-white w-8 h-8" />
                    </a>
                    <a
                        href="https://instagram.com/shl_sophiahacklab"
                        target="_blank"
                        title="Instagram shl sophia hack lab"
                    >
                        <IconsBrandsInstagram class="text-white w-8 h-8" />
                    </a>
                    <a
                        href="https://github.com/SophiaHackLab"
                        target="_blank"
                        title="Github shl sophia hack lab"
                    >
                        <IconsBrandsGithub class="text-white w-8 h-8" />
                    </a>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-5 md:px-0">
                <div
                    class="grid grid-flow-row grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 gap-3 w-full md:max-h-screen overflow-y-auto scroll-pt-28 hidden-scrollbar"
                >
                    <div
                        v-for="(image, index) in gallery"
                        :id="index.toString()"
                        class="h-80 md:h-full w-full md:max-w-full overflow-hidden min-h-44"
                        :class="{
                            'md:col-span-2': image.span_x,
                            'md:row-span-2': image.span_y,
                        }"
                    >
                        <NuxtImg
                            loading="lazy"
                            class="object-cover break-inside-avoid h-full w-full hover:scale-105 transition-transform duration-500 ease-in-out"
                            :src="image.src"
                            alt="Sophia Hack Lab"
                            width="500"
                            height="500"
                            layout="intrinsic"
                        />
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>
