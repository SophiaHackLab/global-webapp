<script setup lang="ts">
import { MdPreview } from "md-editor-v3";
import "md-editor-v3/lib/preview.css";

import getAgendaEvent from "~/composables/event/getEvent";
import { addZero, monthNames } from "~/composables/utils/format";

const route = useRoute();

const agendaEvent: Ref<AgendaEvent | undefined> = ref();
const isGlobalLoading = ref(true);

const handleGetAgenda = async () => {
    isGlobalLoading.value = true;
    const result = await getAgendaEvent(route.params.id as string);
    isGlobalLoading.value = false;
    if (result?.id) {
        agendaEvent.value = result;
    }
};

await handleGetAgenda();
</script>

<template>
    <div
        class="px-5 md:px-20 flex flex-col w-full pt-32 h-full md:min-h-screen justify-center items-center max-w-7xl gap-5"
    >
        <div v-if="!isGlobalLoading" class="flex flex-col gap-5 max-w-[680px] w-full mt-10">
            <div class="flex flex-col gap-3">
                <NuxtLink to="/agenda" class="text-white text-lg">< Retour à l'agenda</NuxtLink>
                <h1
                    class="text-3xl lg:text-4xl font-bold uppercase text-white text-shadow shadow-white"
                >
                    {{ agendaEvent?.name }}
                </h1>
            </div>
            <!-- <h2 class="text-lg lg:text-xl text-white/80">{{ agendaEvent?.subtitle }}</h2> -->
            <div class="flex gap-2 pt-2 flex-col font-medium text-white/80">
                <div class="flex gap-2">
                    <LucideCalendar class="w-4 h-4 min-w-4 mt-1" />
                    <p class="">
                        {{ new Date(agendaEvent?.date as Date).getDate() }}
                        {{ monthNames[new Date(agendaEvent?.date as Date).getMonth()] }}
                        {{ new Date(agendaEvent?.date as Date).getFullYear() }}
                        À {{ new Date(agendaEvent?.date as Date).getHours() }}:{{
                            addZero(new Date(agendaEvent?.date as Date).getMinutes())
                        }}
                    </p>
                </div>
                <div class="flex gap-2">
                    <LucideMapPin class="w-4 h-4 min-w-4 mt-1" />
                    <p class="">{{ agendaEvent?.location }}</p>
                </div>
            </div>
            <div class="pt-5 mb-20">
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
}
</style>
