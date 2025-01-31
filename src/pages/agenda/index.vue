<script setup lang="ts">
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";

import createAgendaEvent from "~/composables/event/createEvent";
import deleteAgendaEvent from "~/composables/event/deleteEvent";
import subscribe from "~/composables/mail/subscribe";

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

const email = ref("");
const isSubscribing = ref(false);
const globalError = ref("");
const isSubscribed = ref(false);

// Watch for newCookie change to update isSubscribed
watchEffect(() => {
    if (newsCookie.value) isSubscribed.value = true;
});

const handleNewsletter = async () => {
    if (!email.value) {
        globalError.value = "Veuillez renseigner votre email";
        return;
    }
    isSubscribing.value = true;
    const response = await subscribe(email.value);
    isSubscribing.value = false;
    if (!response || response?.error) {
        globalError.value = "Vous êtes déjà inscrit ou une erreur est survenue";
        return;
    }
    isSubscribed.value = true;
    newsCookie.value = "true";
};
const handleCreateEvent = async (event?: AgendaEvent) => {
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
        externalLink: form.externalLink?.value,
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

definePageMeta({
    middleware: "auth",
});

useHead({
    title: "Nos évènements - Sophia Hack Lab",
});

await handleGetEvents();
if (user?.id) if (!newsCookie.value) newsCookie.value = "true";
</script>

<template>
    <div class="px-5 md:px-20 flex flex-col w-full pt-32 h-full min-h-screen max-w-7xl gap-5 pb-20">
        <h1
            class="text-4xl text-center font-bold uppercase text-white whitespace-nowrap text-shadow shadow-white mt-10 mb-5"
        >
            Nos évènements
        </h1>
        <div class="flex flex-col">
            <div class="flex flex-col md:flex-row items-center justify-center gap-2">
                <input
                    v-if="!isSubscribed && !!!newsCookie"
                    v-model="email"
                    @focus="globalError = ''"
                    type="text"
                    placeholder="Votre email"
                    class="p-3 px-4 bg-white w-full md:w-72 text-black rounded-lg decoration-none outline-none"
                />
                <Button
                    v-if="isSubscribed"
                    :title="'Vous êtes inscrit ✅'"
                    :theme="'primary'"
                    disabled
                    class="self-center"
                    :loading="isSubscribing"
                />
                <Button
                    v-if="!isSubscribed && !!!newsCookie"
                    :title="'S\'inscrire'"
                    :theme="'primary'"
                    class="self-center"
                    :loading="isSubscribing"
                    @click="handleNewsletter"
                />
            </div>
            <p v-if="globalError" class="text-red-500 text-center mt-2">
                {{ globalError }}
            </p>
        </div>

        <div class="w-full md:w-fit self-center">
            <Prompt
                v-if="user?.roles.includes('ADMIN')"
                title="Créer un évènement"
                custom
                actionTitle="Créer l'évènement"
                :action="
                    () =>
                        handleCreateEvent({
                            ...formContent.eventForm,
                            id: null,
                        })
                "
            >
                <template #trigger>
                    <Button title="Créer un évènement +" theme="primary" />
                </template>
                <template #content>
                    <EventEditForm ref="formContent" />
                </template>
            </Prompt>
        </div>

        <!-- <div class="h-[45rem] w-full bg-[#171717] rounded-none overflow-hidden">
            <iframe
                width="100%"
                height="100%"
                class=""
                src="https://cloud.shl.contact/apps/calendar/embed/E6iFBddSPJ6m34EY"
            ></iframe>
        </div> -->
        <div class="w-full flex flex-col items-center gap-5 h-full">
            <EventCard
                v-for="agendaEvent in events.filter((a) => !isEventPassed(a.date))"
                :key="agendaEvent.id"
                :agendaEvent="agendaEvent"
                :events="events"
                :handleCreateEvent="handleCreateEvent"
                :handleGetEvents="handleGetEvents"
            />
            <div class="w-full flex items-center gap-5 my-2 mt-5">
                <div class="w-full h-[2px] bg-white/10" />
                <p class="text-white text-center whitespace-nowrap">Évènements passés</p>
                <div class="w-full h-[2px] bg-white/10" />
            </div>
            <div class="w-full flex flex-col items-center gap-5 h-full">
                <EventCard
                    v-for="agendaEvent in events
                        .filter((a) => isEventPassed(a.date))
                        .sort((a, b) => (a.date > b.date ? -1 : 1))"
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
