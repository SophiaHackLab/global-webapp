<script setup lang="ts">
const img = useImage()

const gallery = ref([
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/TWbeRGaDYxXnGKe?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder: "https://cloud.shl.contact/apps/files_sharing/publicpreview/TWbeRGaDYxXnGKe?file=/&fileId=1320&x=50&y=100&a=true",
        span_y: 2,
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/bTSMNG46HkjfZT2?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder: "https://cloud.shl.contact/apps/files_sharing/publicpreview/bTSMNG46HkjfZT2?file=/&fileId=1320&x=50&y=100&a=true",
        span_x: 2,
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/zqp7HLb9tcYdc6Q?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder: "https://cloud.shl.contact/apps/files_sharing/publicpreview/zqp7HLb9tcYdc6Q?file=/&fileId=1320&x=50&y=100&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/x5RcgB2tLkgx2Zq?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder: "https://cloud.shl.contact/apps/files_sharing/publicpreview/x5RcgB2tLkgx2Zq?file=/&fileId=1320&x=50&y=100&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/Ma5ajqgYAxBKtWP?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder: "https://cloud.shl.contact/apps/files_sharing/publicpreview/Ma5ajqgYAxBKtWP?file=/&fileId=1320&x=50&y=100&a=true",
        span_x: 2,
        span_y: 2,
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/P67JoGJCy3LWMyc?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder: "https://cloud.shl.contact/apps/files_sharing/publicpreview/P67JoGJCy3LWMyc?file=/&fileId=1320&x=50&y=100&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/8XRHne4NpXRXqdj?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder: "https://cloud.shl.contact/apps/files_sharing/publicpreview/8XRHne4NpXRXqdj?file=/&fileId=1320&x=50&y=100&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/nMdHwDedRL5QzHe?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder: "https://cloud.shl.contact/apps/files_sharing/publicpreview/nMdHwDedRL5QzHe?file=/&fileId=1320&x=50&y=100&a=true",
        span_y: 2,
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/pdX9kkgr7ekoKHe?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder: "https://cloud.shl.contact/apps/files_sharing/publicpreview/pdX9kkgr7ekoKHe?file=/&fileId=1320&x=50&y=100&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/befESEAbSiziifi?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder: "https://cloud.shl.contact/apps/files_sharing/publicpreview/befESEAbSiziifi?file=/&fileId=1320&x=50&y=100&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/84DWGctKcsDFgcW?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder: "https://cloud.shl.contact/apps/files_sharing/publicpreview/84DWGctKcsDFgcW?file=/&fileId=1320&x=50&y=100&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/q7Q6Ycbmo4gHaaH?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder: "https://cloud.shl.contact/apps/files_sharing/publicpreview/q7Q6Ycbmo4gHaaH?file=/&fileId=1320&x=50&y=100&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/9SjsN9LYJ598LbX?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder: "https://cloud.shl.contact/apps/files_sharing/publicpreview/9SjsN9LYJ598LbX?file=/&fileId=1320&x=50&y=100&a=true",
        span_x: 2,
    },
]);

definePageMeta({
    middleware: "auth",
});
</script>

<template>
    <div class="w-full h-full">
        <header
            class="w-full h-full md:h-screen flex flex-col md:flex-row items-center gap-10 overflow-hidden"
        >
            <div
                class="full md:w-1/2 md:min-w-[50%] flex flex-col gap-8 pt-32 md:pt-0 justify-between pl-5 md:pl-20"
            >
                <div class="flex flex-col gap-8 max-w-3xl">
                    <div class="flex flex-col">
                        <div class="w-24 md:w-32 3xl:w-36 py-10 aspect-[0.76]">
                            <NuxtImg
                                preload
                                src="/logo.png"
                                class="w-full object-contain"
                                alt="Logo rounded shl sophia hack lab"
                            />
                        </div>
                        <h1 class="text-3xl md:text-4xl text-left leading-tight">
                            Le SHL est un
                            <a href="https://fr.wikipedia.org/wiki/Hackerspace" hreflang="fr" target="_blank"
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
                        <p class="text-lg text-left mt-5 text-white/70 w-4/5">
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
            <div class="w-full md:w-1/2 md:min-w-[50%] px-5 md:px-0 md:max-h-screen md:pt-24 overflow-x-auto">
                <div
                    class="grid grid-flow-row grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 gap-3 h-full md:max-h-[calc(100vh+24rem)] hidden-scrollbar w-full md:w-max"
                >
                    <div
                        v-for="(image, index) in gallery"
                        :id="index.toString()"
                        class=" bg-white/10  h-80 md:h-full overflow-hidden"
                        :class="{
                            'md:col-span-2 md:!h-56 3xl:!h-72': image.span_x && !image.span_y,
                            'md:row-span-2 md:!w-56 3xl:!w-72': image.span_y && !image.span_x,
                            'md:!w-56 3xl:!h-72 md:!h-56 3xl:!w-72 md:aspect-square': !image.span_x && !image.span_y,
                            'md:col-span-2 md:row-span-2 md:!w-[28.75rem] 3xl:!w-[36.75rem] md:!h-[28.75rem] 3xl:!h-[36.75rem]': image.span_x && image.span_y,
                        }" 
                    >
                        <NuxtImg
                            loading="lazy"
                            preload
                            class="object-cover h-full w-full hover:scale-105 transition-transform duration-500 ease-in-out"
                            :src="image.src"
                            alt="Sophia Hack Lab"
                            width="3600"
                            height="1800"
                            layout="intrinsic"
                            :placeholder="img.placeholder"
                        />
                    </div>
                </div>
            </div>
        </header>
        <div class="w-full flex flex-col items-center justify-center">
        <section id="about" class="px-5 md:px-20 flex flex-col w-full pt-24 h-full min-h-screen max-w-7xl mt-10">
        <div class="w-full flex items-center flex-col gap-12">
            <div class="flex flex-col gap-10 max-w-xl">
                <h2
                    class="text-4xl text-center font-bold uppercase text-white whitespace-nowrap text-shadow shadow-white"
                >
                    A propos du SHL
                </h2>
                <p class="text-white/70 text-left">
                    Le SHL est un <a href="https://fr.wikipedia.org/wiki/Hackerspace" hreflang="fr" target="_blank">hackerspace</a>, une communauté d'ingénieurs, d'artistes, de
                    scientifiques, d'entrepreneurs et d'autres personnes créatives qui partagent un
                    espace de travail et de socialisation. N'hésitez pas à venir voir par vous-même
                    ce qu'est le SHL.
                </p>

                <div class="flex flex-col gap-2">
                    <h3 class="text-white text-lg font-medium text-left">Adhésion au Sophia Hack Lab</h3>
                    <p class="text-white/70 text-left">
                        Nous sommes une association à but non lucratif et sans le soutien de nos
                        membres, nous cesserions d'exister ! L'adhésion normale est de 180 euros par
                        an pour un accès illimité à l'espace.
                    </p>
                </div>

                <div class="flex flex-col gap-2">
                    <h3 class="text-white text-lg font-medium text-left">Pour devenir membre</h3>
                    <p class="text-white/70 text-left">
                        Venez plusieurs fois aux soirées Open Tuesday ou à nos événements Open Lab.
                        Faites connaissance avec quelques membres, parlez de vos centres d'intérêt.
                        Remplissez le formulaire d'adhésion. Trouvez deux parrains pour signer votre
                        formulaire d'adhésion. Une fois votre demande traitée, vous recevrez un
                        courrier de bienvenue avec les instructions de paiement. Une fois que nous
                        aurons reçu votre paiement, vous aurez accès au hackerspace. L’accès est
                        individuel et ne peut être partagé. Il nécessite que vous possédiez un
                        smartphone (consultez nous si ce n’est pas le cas)
                    </p>
                </div>

                <div class="flex flex-col gap-2">
                    <h3 class="text-white text-lg font-medium text-left">Politique du SHL</h3>
                    <p class="text-white/70 text-left">
                        Lorsque vous devenez membre du SHL, vous acceptez de suivre
                        quelques règles simples.
                    </p>
                </div>
            </div>
        </div>
        </section>
    </div>
</div>
</template>
