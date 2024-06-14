<script setup lang="ts">
import createAgendaEvent from "~/composables/event/createEvent";
import deleteAgendaEvent from "~/composables/event/deleteEvent";
import getEvents from "~/composables/event/getEvents";
import { addZero, monthNames } from "~/composables/utils/format";

const router = useRouter();
const { user } = useUserStore();

const eventCreationOpened = ref(false);
const isGlobalLoading = ref(true);

const defaultNewEventValue = {
    name: "Titre de l'évènement",
    description: "Super description de l'évènement à venir!",
    date: new Date(),
    location: "Vallauris, FR",
};
const newEventId = ref();
const newEventName = ref(defaultNewEventValue.name);
const newEventDescription = ref(defaultNewEventValue.description);
const newEventLocation = ref(defaultNewEventValue.location);
const newEventDate = ref(defaultNewEventValue.date);

const events: Ref<AgendaEvent[]> = ref([]);

const handleNewsletter = () => {
    router.push("/auth/login?redirect=/agenda");
};
const handleCreateEvent = async (id?: string) => {
    const result = await createAgendaEvent({
        id: newEventId.value,
        name: newEventName.value,
        description: newEventDescription.value,
        date: newEventDate.value,
        location: newEventLocation.value,
    });
    if (result) {
        if (newEventId.value) {
            const index = events.value.findIndex((e) => e.id === newEventId.value);
            events.value[index] = result;
        } else {
            events.value = [result, ...events.value];
        }
        newEventName.value = defaultNewEventValue.name;
        newEventDescription.value = defaultNewEventValue.description;
        newEventLocation.value = defaultNewEventValue.location;
        newEventDate.value = new Date();
        eventCreationOpened.value = false;
    }
};

const deleteEvent = async (event: AgendaEvent) => {
    if (!event.id) return;
    const result = await deleteAgendaEvent(event.id as string);
    if (result) {
        events.value = events.value.filter((e) => e.id !== event.id);
    }
};

const editEvent = (event: AgendaEvent) => {
    newEventId.value = event.id;
    newEventName.value = event.name;
    newEventDescription.value = event.description;
    newEventLocation.value = event.location;
    newEventDate.value = new Date(event.date);
    eventCreationOpened.value = true;
};

onMounted(async () => {
    isGlobalLoading.value = true;
    const result = await getEvents();
    isGlobalLoading.value = false;
    if (result && result?.length) {
        events.value = result;
    }
});

definePageMeta({
    middleware: "auth",
});
</script>

<template>
    <div class="px-5 md:px-20 flex flex-col w-full pt-32 h-full md:min-h-screen max-w-7xl gap-5">
        <h1
            class="text-4xl text-center font-bold uppercase text-white whitespace-nowrap text-shadow shadow-white mt-10"
        >
            Agenda
        </h1>
        <Button
            v-if="!user"
            title="S'inscrire à la newsletter"
            theme="primary"
            class="self-center"
            @click="handleNewsletter"
        />
        <Button
            v-if="user && !user?.roles.includes('ADMIN')"
            title="✅ Vous êtes inscrit à la newsletter"
            theme="primary"
            disabled
            class="self-center"
        />
        <Button
            v-if="user?.roles.includes('ADMIN')"
            title="+ Ajouter un évènement"
            theme="primary"
            class="self-center"
            @click="eventCreationOpened = true"
        />
        <div class="w-full flex flex-col items-center gap-5 h-full">
            <div v-if="eventCreationOpened" class="flex items-center w-full gap-5">
                <div class="flex flex-col items-center justify-center w-12 md:w-20">
                    <p class="text-2xl md:text-4xl font-bold text-white">
                        {{ newEventDate.getDate() }}
                    </p>
                    <p class="text-lg md:text-xl text-white/80">
                        {{ monthNames[newEventDate.getMonth() - 1] }}
                    </p>
                </div>
                <div class="w-full border border-white border-dashed p-4 flex flex-col gap-3">
                    <input
                        type="text"
                        class="text-lg md:text-2xl font-bold bg-white/10"
                        v-model="newEventName"
                    />
                    <input
                        type="text"
                        class="text-sm md:text-base text-white/80 line-clamp-2 bg-white/10"
                        v-model="newEventDescription"
                    />
                    <div class="flex items-center gap-2 pt-2">
                        <div class="flex items-center gap-2">
                            <LucideMapPin class="text-white w-4 h-4" />
                            <input
                                v-model="newEventLocation"
                                type="text"
                                class="text-white bg-white/10"
                            />
                        </div>
                        -
                        <div class="flex items-center gap-2">
                            <p class="text-white">
                                <span>{{ newEventDate.getHours() }}</span
                                >:<span>{{ newEventDate.getMinutes() }}</span>
                            </p>
                        </div>
                    </div>
                    <div class="w-full flex justify-between">
                        <input
                            ref="newEventDateInput"
                            id="neweventdate"
                            type="datetime-local"
                            :min="new Date().toISOString().slice(0, 16)"
                            class="px-5 h-[40px] bg-white text-black"
                            @input="(e: any) => (newEventDate = new Date(e?.target?.value))"
                        />
                        <Button
                            :title="newEventId ? 'Modifier l\'évènement' : 'Créer l\'évènement'"
                            theme="primary"
                            class="self-end"
                            @click="handleCreateEvent"
                        />
                    </div>
                </div>
            </div>
            <div
                v-for="agendaEvent in events"
                :key="agendaEvent.name"
                class="flex items-center w-full gap-5"
            >
                <div class="flex flex-col items-center justify-center w-12 md:w-20">
                    <p class="text-2xl md:text-4xl font-bold text-white">
                        {{ new Date(agendaEvent.date).getDate() }}
                    </p>
                    <p class="text-lg md:text-xl text-white/80">
                        {{ monthNames[new Date(agendaEvent.date).getMonth() - 1] }}
                    </p>
                    <div v-if="user?.roles.includes('ADMIN')" class="flex gap-2 mt-2">
                        <button
                            @click="deleteEvent(agendaEvent)"
                            class="text-red-500"
                            title="Supprimer l'évènement"
                        >
                            <LucideTrash />
                        </button>
                        <button
                            @click="editEvent(agendaEvent)"
                            class="text-blue-500"
                            title="Modifier l'évènement"
                        >
                            <LucideEdit />
                        </button>
                    </div>
                </div>
                <div class="w-full border border-white p-4 flex flex-col gap-3">
                    <h2 class="text-lg md:text-2xl font-bold">{{ agendaEvent.name }}</h2>
                    <p class="text-sm md:text-base text-white/80 line-clamp-2">
                        {{ agendaEvent.description }}
                    </p>
                    <div class="flex items-center gap-2 pt-2">
                        <div class="flex items-center gap-2">
                            <LucideMapPin class="text-white w-4 h-4" />
                            <p class="text-white">{{ agendaEvent.location }}</p>
                        </div>
                        -
                        <div class="flex items-center gap-2">
                            <p class="text-white">
                                {{ new Date(agendaEvent.date).getHours() }}:{{
                                    addZero(new Date(agendaEvent.date).getMinutes())
                                }}
                            </p>
                        </div>
                    </div>
                    <a
                        v-if="agendaEvent.externalLink"
                        :href="agendaEvent.externalLink"
                        target="_blank"
                        class="text-red-500"
                        >Voir plus d'infos</a
                    >
                </div>
            </div>
            <div
                v-if="!events.length && !eventCreationOpened && !isGlobalLoading"
                class="h-full flex items-center justify-center"
            >
                <p class="text-white/80">Aucun évènement à venir</p>
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
