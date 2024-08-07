<script setup lang="ts">
import { MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";

import getAgendaEvent from "~/composables/event/getEvent";
import { addZero, monthNames, weekDays } from "~/composables/utils/format";

const route = useRoute();

const agendaEvent: Ref<AgendaEvent | undefined> = ref();
const isGlobalLoading = ref(true);

const handleGetAgenda = async () => {
    const full_id = (route.params.id as string).split("-");
    const only_id =
        full_id[0] + "-" + full_id[1] + "-" + full_id[2] + "-" + full_id[3] + "-" + full_id[4];
    if (!only_id) return;
    isGlobalLoading.value = true;
    const result = await getAgendaEvent(only_id);
    isGlobalLoading.value = false;
    if (result?.id) {
        agendaEvent.value = result;
    }
};

const isImgUrl = (url: string): boolean => {
    return (
        /\.(jpg|jpeg|png|webp|avif|gif)$/.test(url) ||
        url.includes("data:image") ||
        url.endsWith("/preview")
    );
};

await handleGetAgenda();
useHead({
    title: agendaEvent.value?.name,
    meta: [
        {
            name: "description",
            content: agendaEvent.value?.subtitle,
        },
    ],
});
</script>

<template>
    <div
        class="px-5 md:px-20 flex flex-col w-full pt-32 h-full md:min-h-screen items-center max-w-7xl gap-5"
    >
        <div v-if="!isGlobalLoading" class="flex flex-col gap-5 max-w-[680px] w-full">
            <div class="flex flex-col gap-3">
                <NuxtLink to="/agenda" class="text-white text-base pb-5"
                    >< Retour à l'agenda</NuxtLink
                >
                <h1
                    class="text-3xl lg:text-4xl font-bold uppercase text-white text-shadow shadow-white"
                >
                    {{ agendaEvent?.name }}
                </h1>
            </div>
            <!-- <h2 class="text-lg lg:text-xl text-white/70">{{ agendaEvent?.subtitle }}</h2> -->
            <div class="flex gap-2 pt-2 flex-col font-medium text-white/70 mb-2">
                <div class="flex gap-2.5">
                    <IconsCalendar class="w-5 h-5 min-w-5 mt-0.5 text-white" />
                    <time
                        :datetime="new Date(agendaEvent?.date as Date).toString()"
                        class="text-sm"
                    >
                        {{ weekDays[new Date(agendaEvent?.date as Date).getDay()] }}
                        {{ new Date(agendaEvent?.date as Date).getDate() }}
                        {{ monthNames[new Date(agendaEvent?.date as Date).getMonth()] }}
                        {{ new Date(agendaEvent?.date as Date).getFullYear() }}
                        À {{ new Date(agendaEvent?.date as Date).getHours() }}:{{
                            addZero(new Date(agendaEvent?.date as Date).getMinutes())
                        }}
                    </time>
                </div>
                <div class="flex gap-2.5">
                    <IconsPin class="w-5 h-5 min-w-5 mt-0.5 text-white" />
                    <a
                        :href="'http://maps.google.com/?q=' + agendaEvent?.location"
                        target="_blank"
                        class="text-sm"
                        >{{ agendaEvent?.location }}</a
                    >
                </div>
            </div>
            <Button
                v-if="agendaEvent?.externalLink"
                theme="primary"
                title="Participer"
                :link="agendaEvent?.externalLink"
                expand
            />
            <div
                class="w-full h-80"
                v-if="agendaEvent?.bannerUrl && isImgUrl(agendaEvent?.bannerUrl)"
            >
                <NuxtImg
                    :src="agendaEvent?.bannerUrl"
                    :alt="agendaEvent?.name + ' banner'"
                    layout="fill"
                    object-fit="cover"
                    width="680"
                    height="382"
                />
            </div>
            <div v-else-if="agendaEvent?.bannerUrl" class="w-full aspect-video">
                <video class="w-full h-full" autoplay muted controls loop width="680" height="382">
                    <source :src="agendaEvent?.bannerUrl" type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
            </div>
            <div class="pt-10 mb-20">
                <MdPreview
                    theme="dark"
                    previewTheme="default"
                    codeTheme="github"
                    :modelValue="agendaEvent?.description"
                />
            </div>
        </div>
        <div v-if="isGlobalLoading" class="text-center mt-10">
            <h2 class="text-2xl">Chargement en cours</h2>
        </div>
    </div>
</template>

<style scoped lang="css">
:deep(.md-editor-preview-wrapper) {
    padding: 0 !important;
}
:deep(.md-editor-preview) {
    word-break: inherit !important;
    font-family: "Noto Sans Mono", monospace !important;
}
</style>
