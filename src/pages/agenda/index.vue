<script setup lang="ts">
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";

import createAgendaEvent from "~/composables/event/createEvent";
import deleteAgendaEvent from "~/composables/event/deleteEvent";
import getEvents from "~/composables/event/getEvents";
import { addZero, monthNames, truncate, weekDays, isEventPassed } from "~/composables/utils/format";

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
const handleCreateEvent = async (event?: AgendaEvent) => {
    console.log(event);
    if (!event) return;
    const form = event as any;
    const result = await createAgendaEvent({
        id: event.id || undefined,
        name: form.name?.value,
        subtitle: form.subtitle?.value,
        description: form.description?.value,
        location: form.location?.value,
        public: form.public?.value,
        bannerUrl: form.bannerUrl?.value,
        date: form.date?.value,
    });
    if (result) handleGetEvents();
};

const handleGetEvents = async (): Promise<AgendaEvent[]> => {
    isGlobalLoading.value = true;
    const result: AgendaEvent[] | null = await getEvents();
    isGlobalLoading.value = false;
    if (result && result?.length) {
        events.value = result;
    }
    return result as AgendaEvent[];
};

await handleGetEvents();
if (user?.id) if (!newsCookie.value) newsCookie.value = "true";

definePageMeta({
    middleware: "auth",
});

useHead({
    title: "Nos évènements - Sophia Hack Lab",
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
            v-if="newsCookie && !user?.roles.includes('ADMIN')"
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
            <EventCard
                v-for="agendaEvent in events.filter((a) => !isEventPassed(a.date))"
                :key="agendaEvent.id"
                :agendaEvent="agendaEvent"
                :events="events"
                :handleCreateEvent="handleCreateEvent"
                :handleGetEvents="handleGetEvents"
            />
            <div class="w-full flex items-center gap-5 my-2">
                <div class="w-full h-[2px] bg-white/10" />
                <p class="text-white text-center whitespace-nowrap">Évènements passés</p>
                <div class="w-full h-[2px] bg-white/10" />
            </div>
            <div class="w-full flex flex-col items-center gap-5 h-full">
                <EventCard
                    v-for="agendaEvent in events.filter((a) => isEventPassed(a.date))"
                    :key="agendaEvent.id"
                    :agendaEvent="agendaEvent"
                    :events="events"
                    :handleCreateEvent="handleCreateEvent"
                    :handleGetEvents="handleGetEvents"
                />
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
