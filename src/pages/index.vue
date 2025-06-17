<script setup lang="ts">
const img = useImage();

const gallery = ref([
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/TWbeRGaDYxXnGKe?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder:
            "https://cloud.shl.contact/apps/files_sharing/publicpreview/TWbeRGaDYxXnGKe?file=/&fileId=1320&x=50&y=100&a=true",
        span_y: 2,
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/bTSMNG46HkjfZT2?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder:
            "https://cloud.shl.contact/apps/files_sharing/publicpreview/bTSMNG46HkjfZT2?file=/&fileId=1320&x=50&y=100&a=true",
        span_x: 2,
    },
    {
        src: "https://cloud.shl.contact/s/7N98sDtmk8epo8d/download/IMG_3085%202.jpeg",
        placeholder:
            "https://cloud.shl.contact/s/7N98sDtmk8epo8d/download/IMG_3085%202.jpeg",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/x5RcgB2tLkgx2Zq?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder:
            "https://cloud.shl.contact/apps/files_sharing/publicpreview/x5RcgB2tLkgx2Zq?file=/&fileId=1320&x=50&y=100&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/Ma5ajqgYAxBKtWP?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder:
            "https://cloud.shl.contact/apps/files_sharing/publicpreview/Ma5ajqgYAxBKtWP?file=/&fileId=1320&x=50&y=100&a=true",
        span_x: 2,
        span_y: 2,
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/P67JoGJCy3LWMyc?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder:
            "https://cloud.shl.contact/apps/files_sharing/publicpreview/P67JoGJCy3LWMyc?file=/&fileId=1320&x=50&y=100&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/8XRHne4NpXRXqdj?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder:
            "https://cloud.shl.contact/apps/files_sharing/publicpreview/8XRHne4NpXRXqdj?file=/&fileId=1320&x=50&y=100&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/nMdHwDedRL5QzHe?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder:
            "https://cloud.shl.contact/apps/files_sharing/publicpreview/nMdHwDedRL5QzHe?file=/&fileId=1320&x=50&y=100&a=true",
        span_y: 2,
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/pdX9kkgr7ekoKHe?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder:
            "https://cloud.shl.contact/apps/files_sharing/publicpreview/pdX9kkgr7ekoKHe?file=/&fileId=1320&x=50&y=100&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/befESEAbSiziifi?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder:
            "https://cloud.shl.contact/apps/files_sharing/publicpreview/befESEAbSiziifi?file=/&fileId=1320&x=50&y=100&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/84DWGctKcsDFgcW?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder:
            "https://cloud.shl.contact/apps/files_sharing/publicpreview/84DWGctKcsDFgcW?file=/&fileId=1320&x=50&y=100&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/q7Q6Ycbmo4gHaaH?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder:
            "https://cloud.shl.contact/apps/files_sharing/publicpreview/q7Q6Ycbmo4gHaaH?file=/&fileId=1320&x=50&y=100&a=true",
    },
    {
        src: "https://cloud.shl.contact/apps/files_sharing/publicpreview/9SjsN9LYJ598LbX?file=/&fileId=1320&x=3600&y=1800&a=true",
        placeholder:
            "https://cloud.shl.contact/apps/files_sharing/publicpreview/9SjsN9LYJ598LbX?file=/&fileId=1320&x=50&y=100&a=true",
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
                class="full md:w-1/2 md:min-w-[50%] flex flex-col gap-8 pt-32 md:pt-0 justify-between pr-5 md:pr-0 pl-5 md:pl-20"
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
                        <h1 class="text-2xl md:text-4xl font-medium">
                            Le SHL est un
                            <a
                                href="https://fr.wikipedia.org/wiki/Hackerspace"
                                hreflang="fr"
                                target="_blank"
                                >HACKERSPACE</a
                            >.
                            <br />
                            Un environnement pour des projets techniques et
                            <span
                                class="relative border-r-8 border-white animate-typingpulse"
                            >
                                créatifs.
                            </span>
                        </h1>
                        <p class="text-base mt-5 text-white/70 w-4/5">
                            Association à but non lucratif.<br />
                            Situé à Sophia-Antipolis.<br />
                            Géré collaborativement par ses membres.
                        </p>
                    </div>
                    <div
                        class="flex flex-col md:flex-row gap-2 md:gap-5 pt-3 w-full"
                    >
                        <Button
                            title="Découvrir"
                            link="/#discover"
                            theme="primary"
                        />
                        <Button
                            title="Nos prochains évènements >"
                            link="/agenda"
                            theme="secondary"
                        />
                    </div>
                </div>
                <div class="w-full items-center gap-5 pt-10 hidden">
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
            <div
                class="w-full md:w-1/2 md:min-w-[50%] px-5 md:px-0 md:max-h-screen md:pt-24 overflow-x-auto"
            >
                <div
                    class="grid grid-flow-row grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 gap-3 h-full md:max-h-[calc(100vh+24rem)] hidden-scrollbar w-full md:w-max"
                >
                    <div
                        v-for="(image, index) in gallery"
                        :id="index.toString()"
                        class="bg-white/10 h-80 md:h-full overflow-hidden"
                        :class="{
                            'md:col-span-2 md:!h-56 3xl:!h-72':
                                image.span_x && !image.span_y,
                            'md:row-span-2 md:!w-56 3xl:!w-72':
                                image.span_y && !image.span_x,
                            'md:!w-56 3xl:!h-72 md:!h-56 3xl:!w-72 md:aspect-square':
                                !image.span_x && !image.span_y,
                            'md:col-span-2 md:row-span-2 md:!w-[28.75rem] 3xl:!w-[36.75rem] md:!h-[28.75rem] 3xl:!h-[36.75rem]':
                                image.span_x && image.span_y,
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
        <section
            id="discover"
            class="w-full flex flex-col items-center justify-center"
        >
            <div
                class="px-5 flex flex-col w-full pt-24 h-full min-h-screen max-w-[56rem] mt-10"
            >
                <div class="w-full flex items-center flex-col gap-12">
                    <section id="about" class="flex flex-col gap-5">
                        <div class="flex items-center w-fit gap-3">
                            <IconsInfos class="w-8 h-8 text-green" />
                            <h2
                                class="text-2xl text-left font-medium text-white whitespace-nowrap text-shadow shadow-white"
                            >
                                A propos du SHL
                            </h2>
                        </div>
                        <div class="pl-[44px] flex flex-col gap-8">
                            <p class="text-white/70 text-left">
                                Le SHL est un
                                <a
                                    href="https://fr.wikipedia.org/wiki/Hackerspace"
                                    hreflang="fr"
                                    target="_blank"
                                    >hackerspace</a
                                >, une communauté d'ingénieurs, d'artistes, de
                                scientifiques, d'entrepreneurs et d'autres
                                personnes créatives qui partagent un espace de
                                travail et de socialisation. N'hésitez pas à
                                venir voir par vous-même ce qu'est le SHL.
                            </p>
                            <p class="text-white/70 text-left">
                                Le SHL dispose de plusieurs espaces sur une
                                surface totale de 300m² : un lab équipé pour le
                                prototypage et la réalisation de tout type de
                                projet, un espace de coworking et une salle de
                                réunion.
                            </p>
                            <!--
                            <div class="flex flex-col gap-2">
                                <h3 class="text-white text-lg font-medium text-left">
                                    Adhésion au Sophia Hack Lab
                                </h3>
                                <p class="text-white/70 text-left">
                                    Nous sommes une association à but non lucratif et sans le
                                    soutien de nos membres, nous cesserions d'exister ! L'adhésion
                                    normale est de 180 euros par an pour un accès illimité à
                                    l'espace.
                                </p>
                            </div>

                            <div class="flex flex-col gap-2">
                                <h3 class="text-white text-lg font-medium text-left">
                                    Pour devenir membre
                                </h3>
                                <p class="text-white/70 text-left">
                                    Venez plusieurs fois aux soirées Open Tuesday ou à nos
                                    événements Open Lab. Faites connaissance avec quelques membres,
                                    parlez de vos centres d'intérêt. Remplissez le formulaire
                                    d'adhésion. Trouvez deux parrains pour signer votre formulaire
                                    d'adhésion. Une fois votre demande traitée, vous recevrez un
                                    courrier de bienvenue avec les instructions de paiement. Une
                                    fois que nous aurons reçu votre paiement, vous aurez accès au
                                    hackerspace. L’accès est individuel et ne peut être partagé. Il
                                    nécessite que vous possédiez un smartphone (consultez nous si ce
                                    n’est pas le cas)
                                </p>
                            </div> -->

                            <!--  <div class="flex flex-col gap-2">
                                <h3 class="text-white text-lg font-medium text-left">
                                    Politique du SHL
                                </h3>
                                <p class="text-white/70 text-left">
                                    Lorsque vous devenez membre du SHL, vous acceptez de suivre
                                    quelques règles simples.
                                </p>
                            </div> -->
                        </div>
                    </section>
                    <section id="find-us" class="flex flex-col gap-5 w-full">
                        <div class="flex items-center w-fit gap-3">
                            <IconsPin class="w-8 h-8 text-green" />
                            <h2
                                class="text-2xl text-left font-medium text-white whitespace-nowrap text-shadow shadow-white"
                            >
                                Nous trouver
                            </h2>
                        </div>
                        <div class="pl-[44px] flex flex-col gap-8">
                            <div class="flex flex-col">
                                <p class="text-white/70">
                                    2323 Chem. de Saint-Bernard
                                </p>
                                <p class="text-white/70">
                                    Space Antipolis Batiment 9
                                </p>
                                <p class="text-white/70">
                                    06220 Vallauris - Sophia Antipolis, France
                                </p>
                            </div>
                            <div class="flex flex-col gap-2">
                                <a
                                    href="https://www.openstreetmap.org/node/12045964453"
                                    target="_blank"
                                    class="text-sky-500 text-lg font-medium"
                                >
                                    Ouvrir dans OpenStreetMap
                                </a>
                                <a
                                    href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x12cc2bdc665f9519:0xbec2c67e303a5bbb?sa=X&ved=1t:8290&ictx=111"
                                    target="_blank"
                                    class="text-sky-500 text-lg font-medium"
                                >
                                    Ouvrir dans Google Maps
                                </a>
                            </div>
                        </div>
                    </section>
                    <section id="contact" class="flex flex-col gap-5 w-full">
                        <div class="flex items-center w-fit gap-3">
                            <IconsMail class="w-8 h-8 text-green" />
                            <h2
                                class="text-2xl text-left font-medium text-white whitespace-nowrap text-shadow shadow-white"
                            >
                                Contact
                            </h2>
                        </div>
                        <div class="pl-[44px] flex flex-col gap-8">
                            <p class="text-white/70">
                                Pour nous contacter, vous pouvez nous retrouver
                                sur les réseaux sociaux ou nous envoyer un mail
                                à l'adresse suivante :
                            </p>

                            <a
                                href="mailto:crew@shl.contact"
                                class="text-sky-500 font-medium underline"
                            >
                                crew@shl.contact
                            </a>
                            <div class="flex flex-col gap-2">
                                <h3
                                    class="text-white text-lg font-normal text-left pb-2"
                                >
                                    Réseaux sociaux
                                </h3>

                                <div class="flex flex-col gap-1.5">
                                    <p class="text-white/70 text-left">
                                        Pour discuter avec nous :
                                    </p>

                                    <div class="text-left">
                                        <a
                                            href="https://discord.gg/27GfdV4Jd9"
                                            target="_blank"
                                            class="flex items-center gap-3 text-sky-500 font-medium"
                                        >
                                            Rejoignez notre serveur Discord
                                        </a>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-1.5 pt-3">
                                    <p class="text-white/70 text-left">
                                        Pour suivre notre actualité :
                                    </p>

                                    <div class="flex items-center gap-3">
                                        <a
                                            href="https://www.linkedin.com/company/sophia-hack-lab/"
                                            target="_blank"
                                            class="flex items-center gap-3 text-sky-500 font-medium"
                                        >
                                            Inscrivez-vous à notre page LinkedIn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </div>
</template>
