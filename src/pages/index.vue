<script setup lang="ts">
const gallery = ref([
    {
        src: "https://media.licdn.com/dms/image/D4D22AQFHLHpu3r9cgQ/feedshare-shrink_1280/0/1714973047672?e=1719446400&v=beta&t=54FJiTaXeA1QJCr0Kg5wKXNPGqd9H7AdARSx6GgzwkA",
        span_y: 2,
    },
    {
        src: "https://media.licdn.com/dms/image/D4D22AQHwzA1CJ80bSw/feedshare-shrink_2048_1536/0/1714973045367?e=1719446400&v=beta&t=qNSYJCfu1IIoYzHlO6JH7ZKO0XDl3WIDZ3oR0cTikMs",
        span_x: 2,
    },
    {
        src: "https://media.licdn.com/dms/image/D4D22AQE4k50M68L6jg/feedshare-shrink_1280/0/1714973048262?e=1719446400&v=beta&t=8v9Umq9r1_lRkFSxL8rH6C5YlJ7Kq4ob4pRztu7DyXU",
    },
    {
        src: "https://media.licdn.com/dms/image/D4E05AQE6W9EcDjGQ4Q/videocover-low/0/1710353790315?e=1717344000&v=beta&t=bCNdS13bxEM3qF613bG8yVNW8A9Bk70Y0cqMwqi6NQs",
    },
    {
        src: "https://media.licdn.com/dms/image/D4D22AQFaNkLt1KP0yw/feedshare-shrink_2048_1536/0/1703060882428?e=1719446400&v=beta&t=KTO3o0cosy1-Tda2rSAUE4NFpuFM8t0q1AKmEeNutcM",
        span_x: 2,
        span_y: 2,
    },
    {
        src: "https://media.licdn.com/dms/image/D4D22AQEbcoWKta1lYA/feedshare-shrink_1280/0/1701765040370?e=1719446400&v=beta&t=tc3CFsDcQqCrAFT-YsHxbU1r_AU2q95mqKM71yC23M8",
    },
    {
        src: "https://media.licdn.com/dms/image/D4D22AQETnkRCz4SIZA/feedshare-shrink_2048_1536/0/1703060878959?e=1719446400&v=beta&t=CVi9oWsHgGfidsEv0aTw7S5GYFsdIUEmLQeaVOYFrlg",
    },
    {
        src: "https://media.licdn.com/dms/image/D4D22AQHvvNELVsXw4w/feedshare-shrink_1280/0/1703060885086?e=1719446400&v=beta&t=-SFkOe1PndyA8MCXt_gAdQZOf6esVjFOSloQW5tDArc",
        span_y: 2,
    },
    {
        src: "https://media.licdn.com/dms/image/D4D22AQFe-NCLa1GQzA/feedshare-shrink_2048_1536/0/1703060878664?e=1719446400&v=beta&t=aCHv19sWBRJ0Xyw9hMFW02zth52IBdraeMa2v0AUsBc",
    },
    {
        src: "https://media.licdn.com/dms/image/D4D22AQF3-OsO-A4h5g/feedshare-shrink_1280/0/1714973047483?e=1719446400&v=beta&t=Z7n-qsT5wPRhd9PazyoL2mtBg9RlN3ybIe2z_3EIbcA",
    },
    {
        src: "https://media.licdn.com/dms/image/D4D22AQEODpvTdvlRKg/feedshare-shrink_2048_1536/0/1703060878692?e=1719446400&v=beta&t=SIg7nH0H3ACbXKAce1yrKFTwZ3TZtpixr8C6N59vLr0",
    },
    {
        src: "https://media.licdn.com/dms/image/D4D22AQHXAz0GIkh2_Q/feedshare-shrink_2048_1536/0/1703060878475?e=1719446400&v=beta&t=KPh1eFsMbUMuX_YCBnLo8mI_-S2RiBJbpf4V-4T8o3w",
    },
    {
        src: "https://media.licdn.com/dms/image/D4D22AQGtbQiCi-nfGA/feedshare-shrink_2048_1536/0/1703060878723?e=1719446400&v=beta&t=T885iydlmcc0Tk80TZdTKpVosr44lmAJQCrcjnRc8Qw",
        span_x: 2,
    },
    {
        src: "https://media.licdn.com/dms/image/D4D22AQHz-U0AYiLt2A/feedshare-shrink_1280/0/1714973049100?e=1719446400&v=beta&t=p4PwIOkLuVHpv29z8NXJbJCib91t7u3VZYwUGdhaXS4",
    },
]);
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
                        <NuxtImg
                            src="/logo_rounded.png"
                            width="100"
                            height="100"
                            class="w-44 h-44"
                        />
                        <h1 class="text-4xl text-left leading-tight">
                            Le SHL est un
                            <a href="https://fr.wikipedia.org/wiki/Hackerspace" target="_blank"
                                >HACKERSPACE</a
                            >.
                            <br />
                            <span class="">
                                Un environnement pour des projets

                                <span
                                    class="after:h-[40px] after:w-3 after:bg-white after:absolute after:-right-3.5 relative after:animate-typingpulse"
                                >
                                    techniques et créatifs.
                                </span>
                            </span>
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
                    <a href="https://www.linkedin.com/company/sophia-hack-lab/" target="_blank">
                        <IconsBrandsLinkedin class="text-white w-6 h-6" />
                    </a>
                    <a href="https://discord.gg/27GfdV4Jd9" target="_blank">
                        <IconsBrandsDiscord class="text-white w-6 h-6" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=33685926988" target="_blank">
                        <IconsBrandsWhatsapp class="text-white w-6 h-6" />
                    </a>
                    <a href="https://instagram.com/shl_sophiahacklab" target="_blank">
                        <IconsBrandsInstagram class="text-white w-6 h-6" />
                    </a>
                    <a href="https://github.com/SophiaHackLab" target="_blank">
                        <IconsBrandsGithub class="text-white w-6 h-6" />
                    </a>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-5 md:px-0">
                <div
                    class="grid grid-flow-row grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-3 w-full h-screen overflow-y-auto scroll-pt-28 hidden-scrollbar"
                >
                    <div
                        v-for="(image, index) in gallery"
                        :id="index.toString()"
                        class="h-full max-w-full overflow-hidden min-h-44"
                        :class="{
                            'col-span-2': image.span_x,
                            'row-span-2': image.span_y,
                        }"
                    >
                        <NuxtImg
                            loading="lazy"
                            class="object-cover break-inside-avoid h-full max-w-full hover:scale-105 transition-transform duration-500 ease-in-out"
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
