<script setup lang="ts">
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { addZero, monthNames, truncate, weekDays } from "~/composables/utils/format";
import { toDate, toZonedTime, format } from "date-fns-tz";

const props = defineProps<{
    event?: AgendaEvent;
}>();

const event = ref<AgendaEvent | undefined>(props.event);

const newEventId = ref(event.value?.id || undefined);
const newEventName = ref(event.value?.name || "Titre de l'évènement");
const newEventSubtitle = ref(event.value?.subtitle || "Sous-titre de l'évènement");
const newEventDescription = ref(
    event.value?.description ||
        "## Super description de l'évènement à venir!\n\n### Sous-titre\n\n- Point 1\n- Point 2\n- Point 3",
);
const newEventBannerUrl = ref(event.value?.bannerUrl || "");
const newEventExternalLink = ref(event.value?.externalLink || "");
const newEventLocation = ref(
    event.value?.location ||
        "SHL // Sophia Hack Lab - 2323 Chemin de Saint Bernard Space Antipolis Bat 9 06220 Vallauris, FR",
);
const newEventPublic = ref(event.value?.public === undefined ? true : !!event.value?.public);
const newEventDate = ref(
    event.value?.date ? new Date(event.value?.date || "") : new Date(new Date().setHours(17)),
);

const formatDateForInput = (date: Date) => {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        date = new Date();
    }

    const parisDate = toZonedTime(date, "Europe/Paris");
    return format(parisDate, "yyyy-MM-dd'T'HH:mm:ss", { timeZone: "Europe/Paris" });
};

defineExpose({
    eventForm: {
        id: newEventId,
        name: newEventName,
        subtitle: newEventSubtitle,
        description: newEventDescription,
        bannerUrl: newEventBannerUrl,
        externalLink: newEventExternalLink,
        location: newEventLocation,
        public: newEventPublic,
        date: newEventDate,
    },
});
</script>

<template>
    <div class="flex flex-col gap-5 w-full md:px-2">
        <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-1">
                <label for="neweventname" class="text-white/70">Nom de l'évènement</label>
                <input
                    id="neweventname"
                    type="text"
                    class="text-lg md:text-2xl font-bold bg-white/10 px-2"
                    v-model="newEventName"
                />
            </div>
            <div class="flex flex-col gap-1">
                <label for="neweventsubtitle" class="text-white/70">Sous-titre (SEO)</label>
                <input
                    id="neweventsubtitle"
                    type="text"
                    class="text-base md:text-lg font-bold bg-white/10 px-2"
                    v-model="newEventSubtitle"
                />
            </div>
        </div>
        <div class="flex flex-col gap-1">
            <label for="neweventbannerurl" class="text-white/70">URL Bannière (opt)</label>
            <input
                id="neweventbannerurl"
                type="text"
                class="text-white bg-white/10 w-full px-2"
                v-model="newEventBannerUrl"
            />
        </div>
        <div class="flex flex-col gap-1">
            <label for="neweventexternalurl" class="text-white/70">Lien d'inscription (opt)</label>
            <input
                id="neweventexternalurl"
                type="text"
                class="text-white bg-white/10 w-full px-2"
                v-model="newEventExternalLink"
            />
        </div>

        <div class="flex flex-row gap-1">
            <label for="neweventbannerurl" class="text-white/70">Public :</label>
            <input
                id="neweventbannerurl"
                type="checkbox"
                class="text-white bg-white/10 px-2"
                v-model="newEventPublic"
            />
            {{ newEventPublic }}
        </div>

        <div class="flex flex-col gap-2 pt-2 text-white font-medium">
            <div class="flex gap-2 items-center">
                <IconsCalendar class="w-4 h-4 min-w-4 mt-1" />
                <p class="">
                    <input
                        ref="newEventDateInput"
                        id="neweventdate"
                        type="datetime-local"
                        class="px-1.5 text-white bg-white/10"
                        :value="formatDateForInput(newEventDate)"
                        @input="
                            (e: any) => {
                                const inputDate = e?.target?.value;
                                newEventDate = toDate(new Date(inputDate), {
                                    timeZone: 'Europe/Paris',
                                });
                            }
                        "
                    />
                </p>
            </div>
            <div class="flex gap-2">
                <IconsPin class="w-4 h-4 min-w-4 mt-1" />
                <input
                    v-model="newEventLocation"
                    type="text"
                    class="text-white bg-white/10 w-full px-2"
                />
            </div>
        </div>

        <div class="w-full !text-white">
            <ClientOnly>
                <MdEditor
                    :noUploadImg="true"
                    language="en-US"
                    theme="dark"
                    v-model="newEventDescription"
                />
            </ClientOnly>
        </div>
    </div>
</template>

<style scoped lang="css">
:deep(.md-editor-content) {
    display: flex;
    flex-direction: row;
}

@media (max-width: 768px) {
    :deep(#md-editor-v3_4-preview-wrapper) {
        display: none;
    }
    :deep(.md-editor-input-wrapper) {
        width: 100% !important;
    }

    :deep(.md-editor-resize-operate) {
        display: none !important;
    }
}

:deep(.md-editor-preview) {
    word-break: inherit !important;
}
:deep(.md-editor-resize-operate) {
    background-color: rgb(255 255 255 / 0.1);
}
</style>
