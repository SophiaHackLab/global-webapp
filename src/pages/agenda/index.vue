<script setup lang="ts">
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";

import createAgendaEvent from "~/composables/event/createEvent";
import deleteAgendaEvent from "~/composables/event/deleteEvent";
import getEvents from "~/composables/event/getEvents";
import { addZero, monthNames, truncate, weekDays } from "~/composables/utils/format";

const { user } = useUserStore();
const router = useRouter();
const newsCookie = useCookie("news", {
    expires: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30 * 12),
});

const isGlobalLoading = ref(true);

const formContent = ref();
const events: Ref<AgendaEvent[]> = ref([]);

const handleNewsletter = () => {
    router.push("/auth/login?redirect=/agenda");
};
const handleCreateEvent = async (id?: string) => {
    if (!formContent.value) return;
    const form =
        (formContent.value as any)?.eventForm ||
        (formContent.value as any)?.find((f: any) => f.eventForm.id?.value === id)?.eventForm;
    if (!form) return;
    const result = await createAgendaEvent({
        id: id || undefined,
        name: form.name?.value,
        subtitle: form.subtitle?.value,
        description: form.description?.value,
        location: form.location?.value,
        public: form.public?.value,
        bannerUrl: form.bannerUrl?.value,
        date: form.date?.value,
    });
    if (result) {
        if (form.id?.value) {
            const index = events.value.findIndex((e) => e.id === form.id?.value);
            events.value[index] = result;
        } else {
            events.value = [result, ...events.value];
        }
    }
};

const deleteEvent = async (event: AgendaEvent) => {
    if (!event.id) return;
    const result = await deleteAgendaEvent(event.id as string);
    if (result) {
        events.value = events.value.filter((e) => e.id !== event.id);
    }
};

const isEventPassed = (date: Date) => {
    return (
        new Date(new Date(date).toISOString().slice(0, 10)).getTime() <
        new Date(new Date().toISOString().slice(0, 10)).getTime()
    );
};

const generateEventUrl = (event: AgendaEvent) => {
    return `/agenda/${event.id}-${event.name
        .toLowerCase()
        .replaceAll(/ /g, "-")
        .replaceAll(/[^a-zA-Z0-9-]/g, "")
        .replaceAll(/--/g, "-")
        .slice(0, 50)}`;
};

isGlobalLoading.value = true;
const result = await getEvents();
isGlobalLoading.value = false;
if (result && result?.length) {
    events.value = result;
}

if (user?.id) {
    if (!newsCookie.value) newsCookie.value = "true";
}

definePageMeta({
    middleware: "auth",
});

useHead({
    title: "Nos évènements",
});
</script>

<template>
    <div class="px-5 md:px-20 flex flex-col w-full pt-32 h-full min-h-screen max-w-7xl gap-5">
        <h1
            class="text-4xl text-center font-bold uppercase text-white whitespace-nowrap text-shadow shadow-white mt-10 mb-5"
        >
            Nos évènements
        </h1>
        <Button
            v-if="!user && !newsCookie"
            title="S'inscrire à la newsletter"
            theme="primary"
            class="self-center"
            @click="handleNewsletter"
        />
        <Button
            v-if="newsCookie && !user?.roles.includes('ADMIN') && user"
            title="Vous êtes inscrit à la newsletter"
            theme="primary"
            disabled
            class="self-center"
        />

        <div class="w-full md:w-fit self-center">
            <Prompt
                v-if="user?.roles.includes('ADMIN')"
                title="Créer un évènement"
                custom
                actionTitle="Créer l'évènement"
                :action="() => handleCreateEvent()"
            >
                <template #trigger>
                    <Button title="Créer un évènement +" theme="primary" />
                </template>
                <template #content>
                    <EventEditForm ref="formContent" />
                </template>
            </Prompt>
        </div>

        <div class="w-full flex flex-col items-center gap-5 h-full">
            <div
                v-for="agendaEvent in events.sort(
                    (a, b) => +!isEventPassed(b.date) - +!isEventPassed(a.date),
                )"
                :key="agendaEvent.name"
                class="flex flex-col md:flex-row items-center w-full gap-2 md:gap-5 group"
            >
                <div
                    class="flex flex-row gap-2 md:gap-0 md:flex-col items-center justify-between md:justify-center w-full md:w-32"
                    :class="{
                        'opacity-50': isEventPassed(agendaEvent.date),
                    }"
                >
                    <div class="flex flex-row md:flex-col items-center md:mb-2">
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
                            new Date(new Date().getTime() + 1000 * 60 * 60 * 24)
                                .toISOString()
                                .slice(0, 10)
                        "
                    >
                        <span class="bg-green-400 text-black text-xs px-2 py-0.5 uppercase"
                            >Demain</span
                        >
                    </p>
                    <p v-else-if="isEventPassed(agendaEvent.date)">
                        <span class="bg-white/80 text-black text-xs px-2 py-0.5 uppercase"
                            >Passé</span
                        >
                    </p>
                    <p v-else>
                        <span class="bg-amber-400 text-black text-xs px-2 py-0.5 uppercase"
                            >Bientôt
                        </span>
                    </p>
                </div>
                <div class="w-full border border-white/50 p-4 flex flex-col gap-3">
                    <div class="flex flex-col gap-1.5">
                        <NuxtLink
                            :to="generateEventUrl(agendaEvent)"
                            class="text-lg md:text-2xl font-bold"
                        >
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
                    <div
                        class="flex gap-3 flex-col md:flex-row justify-between items-center w-full"
                    >
                        <div class="flex gap-5 flex-col md:flex-row items-center">
                            <div class="flex gap-2">
                                <IconsLock
                                    v-if="!agendaEvent.public"
                                    class="w-4 h-4 min-w-4 mt-1"
                                />
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
                            <div
                                v-if="user?.roles.includes('ADMIN')"
                                class="flex mt-2 md:mt-0 gap-5"
                            >
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
                                    :action="() => handleCreateEvent(agendaEvent.id)"
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
                            title="Voir la fiche >"
                            :link="generateEventUrl(agendaEvent)"
                            :class="{
                                'opacity-50': isEventPassed(agendaEvent.date),
                            }"
                        />
                    </div>
                </div>
            </div>
            <div
                v-if="!events.length && !isGlobalLoading"
                class="h-full flex items-center justify-center mt-20"
            >
                <p class="text-white/70">Aucun évènement à venir</p>
            </div>
            <div
                v-if="isGlobalLoading"
                class="h-full flex items-center justify-center text-center mt-10"
            >
                <h2 class="text-2xl">Chargement...</h2>
            </div>
        </div>
    </div>
</template>

<style scoped lang="css">
:deep(.ql-editor) {
    min-height: 200px;
}
</style>
