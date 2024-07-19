<script setup lang="ts">
import deleteAgendaEvent from "~/composables/event/deleteEvent";
import getEvents from "~/composables/event/getEvents";
import { addZero, monthNames, truncate, weekDays, isEventPassed } from "~/composables/utils/format";
const { user } = useUserStore();

const props = defineProps<{
    agendaEvent: AgendaEvent;
    handleCreateEvent: (event: AgendaEvent) => void;
    handleGetEvents: () => void;
}>();

const agendaEvent = ref(props.agendaEvent);
const formContent = ref();

const deleteEvent = async (event: AgendaEvent) => {
    if (!event.id) return;
    const result = await deleteAgendaEvent(event.id as string);
    if (result) props.handleGetEvents();
};

const generateEventUrl = (event: AgendaEvent) => {
    return `/agenda/${event.id}-${event.name
        .toLowerCase()
        .replaceAll(/ /g, "-")
        .replaceAll(/[^a-zA-Z0-9-]/g, "")
        .replaceAll(/--/g, "-")
        .slice(0, 50)}`;
};

watch(
    () => props.agendaEvent,
    () => {
        agendaEvent.value = props.agendaEvent;
    },
);
</script>

<template>
    <div class="flex flex-col md:flex-row items-center w-full gap-2 md:gap-5 group">
        <div
            class="flex flex-row gap-2 md:gap-0 md:flex-col items-center justify-between md:justify-center w-full md:w-32"
            :class="{
                'opacity-50': isEventPassed(agendaEvent.date),
            }"
        >
            <div class="flex flex-row md:flex-col items-center md:mb-2 gap-2 md:gap-0">
                <p class="text-lg md:text-xl text-white/70">
                    {{ weekDays[new Date(agendaEvent.date).getDay()] }}
                </p>

                <p class="text-lg md:text-4xl font-bold text-white">
                    {{ new Date(agendaEvent.date).getDate() }}
                </p>
                <p class="text-lg md:text-xl text-white/70">
                    {{ monthNames[new Date(agendaEvent.date).getMonth()] }}
                </p>
            </div>
            <p
                v-if="
                    new Date(agendaEvent.date).toISOString().slice(0, 10) ===
                    new Date().toISOString().slice(0, 10)
                "
            >
                <span class="bg-green-400 text-black text-xs px-2 py-0.5 uppercase"
                    >Aujourd'hui</span
                >
            </p>
            <p
                v-else-if="
                    new Date(agendaEvent.date).toISOString().slice(0, 10) ===
                    new Date(new Date().getTime() + 1000 * 60 * 60 * 24).toISOString().slice(0, 10)
                "
            >
                <span class="bg-green-400 text-black text-xs px-2 py-0.5 uppercase">Demain</span>
            </p>
            <p v-else-if="isEventPassed(agendaEvent.date)">
                <span class="bg-white/80 text-black text-xs px-2 py-0.5 uppercase">Passé</span>
            </p>
            <p v-else>
                <span class="bg-amber-400 text-black text-xs px-2 py-0.5 uppercase">Bientôt </span>
            </p>
        </div>
        <div class="w-full border border-white/50 p-4 flex flex-col gap-3">
            <div class="flex flex-col gap-1.5">
                <NuxtLink :to="generateEventUrl(agendaEvent)" class="text-lg md:text-2xl font-bold">
                    {{ agendaEvent.name }}
                </NuxtLink>
                <p class="text-sm md:text-base font-normal text-white/70 line-clamp-2">
                    {{ agendaEvent.subtitle }}
                </p>
            </div>
            <div class="flex flex-col gap-2 pt-2 text-white font-medium">
                <div class="flex gap-2">
                    <IconsClock class="w-4 h-4 min-w-4 md:mt-1" />
                    <p class="text-sm md:text-base">
                        À
                        {{ new Date(agendaEvent.date).getHours() }}:{{
                            addZero(new Date(agendaEvent.date).getMinutes())
                        }}
                    </p>
                </div>
                <div class="flex gap-2">
                    <IconsPin class="w-4 h-4 min-w-4 mt-1" />
                    <p class="text-sm md:text-base">
                        {{ truncate(agendaEvent.location, 70) }}
                    </p>
                </div>
            </div>
            <div class="flex gap-3 flex-col md:flex-row justify-between items-center w-full">
                <div class="flex gap-5 flex-col md:flex-row items-center">
                    <div class="flex gap-2">
                        <IconsLock v-if="!agendaEvent.public" class="w-4 h-4 min-w-4 mt-1" />
                        <IconsBeer v-else class="w-4 h-4 min-w-4 mt-1" />
                        <p
                            class="text-sm md:text-base text-white/70"
                            :class="{
                                'text-red-400': !agendaEvent.public,
                            }"
                        >
                            {{ agendaEvent.public ? "Public" : "Réservé aux membres" }}
                        </p>
                    </div>
                    <div v-if="user?.roles.includes('ADMIN')" class="flex mt-2 md:mt-0 gap-5">
                        <Prompt
                            title="Supprimer l'évènement"
                            subtitle="Cette action est irréversible."
                            :action="() => deleteEvent(agendaEvent)"
                        >
                            <template #trigger>
                                <button
                                    class="text-red-500 flex items-center gap-1.5 hover:underline"
                                    title="Supprimer l'évènement"
                                >
                                    <IconsTrash />
                                    <p class="text-sm">Supprimer</p>
                                </button>
                            </template>
                        </Prompt>
                        <Prompt
                            title="Modifier l'évènement"
                            custom
                            actionTitle="Modifier l'évènement"
                            :action="
                                () =>
                                    handleCreateEvent({
                                        ...formContent.eventForm,
                                        id: agendaEvent.id,
                                    })
                            "
                        >
                            <template #trigger>
                                <button
                                    class="text-blue-500 flex items-center gap-1.5 hover:underline"
                                    title="Modifier l'évènement"
                                >
                                    <IconsEdit />
                                    <p class="text-sm">Modifier</p>
                                </button>
                            </template>
                            <template #content>
                                <EventEditForm ref="formContent" :event="agendaEvent" />
                            </template>
                        </Prompt>
                    </div>
                </div>
                <Button
                    theme="primary"
                    title="Voir la fiche"
                    :link="generateEventUrl(agendaEvent)"
                    :class="{
                        'opacity-50': isEventPassed(agendaEvent.date),
                    }"
                />
            </div>
        </div>
    </div>
</template>
