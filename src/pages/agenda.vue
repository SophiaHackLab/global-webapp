<script setup lang="ts">
import { addZero, monthNames } from "~/composables/utils/format";

const events = [
    {
        title: "Hackpéro: 3e édition encore plus interactive + CTF accessible à tous.",
        date: {
            year: 2024,
            month: 5,
            day: 24,
            hour: 19,
            minute: 0,
        },
        description: `🚀 Hackpéro at 06 is back! Le rendez-vous devenu incontournable de la Cyber et du Hacking Ethique à Sophia Antipolis et dans le 06... Convivialité et partage🍺 🍕 🎵 garantis!
Avec une 3e édition encore plus interactive 👾 puisque notre coworking sera utilisé le temps de la soirée pour un CTF (Capture The Flag 🚩 🚩🚩) accessible à tous. 
Si vous découvrez la discipline, pas de soucis, nos membres seront là pour vous guider 🆘 et animer quelques mini-conf... Pensez donc à amener vos laptops (même si nous en auront quelques uns sur place)`,
        link: "https://www.linkedin.com/posts/sophia-hack-lab_web-reverse-forensic-activity-7198946441900228608-eZbP",
        location: "Vallauris, FR",
    },
    {
        title: "CTF (Capture The Flag): soirée de challenges de sécurité informatique.",
        date: {
            year: 2024,
            month: 5,
            day: 19,
            hour: 19,
            minute: 0,
        },
        description: `Amateurs de CTF (Capture The Flag) et de pentesting, à vos agendas 
pour un rendez-vous désormais récurrent de Hacking Ethique / Cybersécu unique à Sophia Antipolis et dans le 06 ! 
Le SHL, notre hackerspace associatif vous ouvre ses portes pour une soirée où vous vous confronterez ensemble aux challenges du moment, dans une ambiance décontractée et une atmosphère unique où chaque flag collecté est l'occasion de débriefer sur les méthodes d'intrusion utilisées par chacun et pourrez progresser en apprenant ensemble de vos pairs.

RDV au SHL - Sophia Hack Lab mercredi 19 juin vers 19h00 
`,
        link: "https://www.linkedin.com/posts/sophia-hack-lab_ctf-activity-7197312422666194944-_apZ?utm_source=share&utm_medium=member_desktop",
        location: "Vallauris, FR",
    },
    {
        title: "Talk with O.Thomas // IC Reverse Engineering & Data Extraction",
        date: {
            year: 2024,
            month: 4,
            day: 16,
            hour: 19,
            minute: 0,
        },
        description:
            "Un talk très attendu au @SHL... Olivier Thomas, CTO de Texplained, un laboratoire de recherche en sécurité hardware indépendant à Sophia Antipolis vous parlera de son activité d'Expert en Sécurité Hardware.",
        link: "https://www.linkedin.com/events/talkwitho-thomas-icreverseengin7183789788708098048/about/",
        location: "Vallauris, FR",
    },
    {
        title: "Talk with O.Thomas // IC Reverse Engineering & Data Extraction",
        date: {
            year: 2024,
            month: 4,
            day: 16,
            hour: 19,
            minute: 0,
        },
        description:
            "Un talk très attendu au @SHL... Olivier Thomas, CTO de Texplained, un laboratoire de recherche en sécurité hardware indépendant à Sophia Antipolis vous parlera de son activité d'Expert en Sécurité Hardware.",
        link: "https://www.linkedin.com/events/talkwitho-thomas-icreverseengin7183789788708098048/about/",
        location: "Vallauris, FR",
    },
    {
        title: "Talk with O.Thomas // IC Reverse Engineering & Data Extraction",
        date: {
            year: 2024,
            month: 4,
            day: 16,
            hour: 19,
            minute: 0,
        },
        description:
            "Un talk très attendu au @SHL... Olivier Thomas, CTO de Texplained, un laboratoire de recherche en sécurité hardware indépendant à Sophia Antipolis vous parlera de son activité d'Expert en Sécurité Hardware.",
        link: "https://www.linkedin.com/events/talkwitho-thomas-icreverseengin7183789788708098048/about/",
        location: "Vallauris, FR",
    },
    {
        title: "Talk with O.Thomas // IC Reverse Engineering & Data Extraction",
        date: {
            year: 2024,
            month: 4,
            day: 16,
            hour: 19,
            minute: 0,
        },
        description:
            "Un talk très attendu au @SHL... Olivier Thomas, CTO de Texplained, un laboratoire de recherche en sécurité hardware indépendant à Sophia Antipolis vous parlera de son activité d'Expert en Sécurité Hardware.",
        link: "https://www.linkedin.com/events/talkwitho-thomas-icreverseengin7183789788708098048/about/",
        location: "Vallauris, FR",
    },
    {
        title: "Talk with O.Thomas // IC Reverse Engineering & Data Extraction",
        date: {
            year: 2024,
            month: 4,
            day: 16,
            hour: 19,
            minute: 0,
        },
        description:
            "Un talk très attendu au @SHL... Olivier Thomas, CTO de Texplained, un laboratoire de recherche en sécurité hardware indépendant à Sophia Antipolis vous parlera de son activité d'Expert en Sécurité Hardware.",
        link: "https://www.linkedin.com/events/talkwitho-thomas-icreverseengin7183789788708098048/about/",
        location: "Vallauris, FR",
    },
];
</script>

<template>
    <div class="px-5 md:px-20 flex flex-col w-full pt-32 h-full md:h-screen max-w-7xl">
        <h1
            class="text-4xl text-center font-bold uppercase text-white whitespace-nowrap text-shadow shadow-white mt-10"
        >
            Agenda
        </h1>
        <div class="w-full flex flex-col items-center gap-5 mt-10">
            <div v-for="event in events" :key="event.title" class="flex items-center w-full gap-5">
                <div class="flex flex-col items-center justify-center w-12 md:w-20">
                    <p class="text-2xl md:text-4xl font-bold text-white">{{ event.date.day }}</p>
                    <p class="text-lg md:text-xl text-white/80">
                        {{ monthNames[event.date.month - 1] }}
                    </p>
                </div>
                <div class="w-full border border-white p-4 flex flex-col gap-3">
                    <h2 class="text-lg md:text-2xl font-bold">{{ event.title }}</h2>
                    <p class="text-sm md:text-base text-white/80 line-clamp-2">
                        {{ event.description }}
                    </p>
                    <div class="flex items-center gap-2 pt-2">
                        <div class="flex items-center gap-2">
                            <LucideMapPin class="text-white w-4 h-4" />
                            <p class="text-white">{{ event.location }}</p>
                        </div>
                        -
                        <div class="flex items-center gap-2">
                            <p class="text-white">
                                {{ event.date.hour }}:{{ addZero(event.date.minute) }}
                            </p>
                        </div>
                    </div>
                    <a :href="event.link" target="_blank" class="text-red-500">Voir plus d'infos</a>
                </div>
            </div>
        </div>
    </div>
</template>
