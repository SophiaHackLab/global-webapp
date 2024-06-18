<script setup lang="ts">
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";

import createAgendaEvent from "~/composables/event/createEvent";
import deleteAgendaEvent from "~/composables/event/deleteEvent";
import getEvents from "~/composables/event/getEvents";
import { addZero, monthNames, truncate, weekDays } from "~/composables/utils/format";

const router = useRouter();
const { user } = useUserStore();
const newsCookie = useCookie("news", {
    expires: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30 * 12),
});

const eventCreationOpened = ref(false);
const isGlobalLoading = ref(true);

const defaultNewEventValue = {
    name: "Titre de l'évènement",
    subtitle: "Sous-titre de l'évènement",
    description:
        "# Super description de l'évènement à venir!\n\n## Sous-titre\n\n- Point 1\n- Point 2\n- Point 3",
    date: new Date(),
    location: "Vallauris, FR",
};
const newEventId = ref();
const newEventName = ref(defaultNewEventValue.name);
const newEventSubtitle = ref(defaultNewEventValue.subtitle);
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
        subtitle: newEventSubtitle.value,
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
        newEventSubtitle.value = defaultNewEventValue.subtitle;
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
    newEventSubtitle.value = event.subtitle;
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

    if (user?.id) {
        if (!newsCookie.value) newsCookie.value = "true";
    }
});

definePageMeta({
    middleware: "auth",
});
</script>

<template>
    <div class="px-5 md:px-20 flex flex-col w-full pt-32 h-full md:min-h-screen max-w-7xl gap-5">
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
                <div class="w-full border border-white/50 border-dashed p-4 flex flex-col gap-5">
                    <div class="flex flex-col gap-3">
                        <input
                            type="text"
                            class="text-lg md:text-2xl font-bold bg-white/10"
                            v-model="newEventName"
                        />
                        <input
                            type="text"
                            class="text-base md:text-lg font-bold bg-white/10"
                            v-model="newEventSubtitle"
                        />
                    </div>
                    <div class="w-full !text-white">
                        <ClientOnly>
                            <MdEditor
                                :noUploadImg="true"
                                theme="dark"
                                v-model="newEventDescription"
                            />
                        </ClientOnly>
                    </div>

                    <div class="flex flex-col gap-2 pt-2 text-white font-medium">
                        <div class="flex gap-2">
                            <LucideClock class="w-4 h-4 min-w-4 mt-1" />
                            <p class="">
                                À
                                <span>{{ newEventDate.getHours() }}</span
                                >:<span>{{ addZero(newEventDate.getMinutes()) }}</span>
                            </p>
                        </div>
                        <div class="flex gap-2">
                            <LucideMapPin class="w-4 h-4 min-w-4 mt-1" />
                            <input
                                v-model="newEventLocation"
                                type="text"
                                class="text-white bg-white/10 w-full"
                            />
                        </div>
                    </div>
                    <div class="w-full flex justify-between">
                        <input
                            ref="newEventDateInput"
                            id="neweventdate"
                            type="datetime-local"
                            :min="new Date().toISOString().slice(0, 16)"
                            class="px-5 h-[40px] bg-white text-black"
                            :value="
                                new Date(new Date(newEventDate).getTime() + 1000 * 60 * 60 * 2)
                                    .toISOString()
                                    .slice(0, 16)
                            "
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
                class="flex items-center w-full gap-5 group"
                :class="{
                    'opacity-50 grayscale':
                        new Date(agendaEvent.date).getTime() < new Date().getTime(),
                }"
            >
                <div class="flex flex-col items-center justify-center w-12 md:w-20">
                    <p
                        v-if="new Date(agendaEvent.date).getTime() > new Date().getTime()"
                        class="text-lg md:text-xl text-white/80"
                    >
                        {{ weekDays[new Date(agendaEvent.date).getDay()] }}
                    </p>

                    <p class="text-2xl md:text-4xl font-bold text-white">
                        {{ new Date(agendaEvent.date).getDate() }}
                    </p>
                    <p class="text-lg md:text-xl text-white/80">
                        {{ monthNames[new Date(agendaEvent.date).getMonth() - 1] }}
                    </p>
                    <p v-if="new Date(agendaEvent.date).getTime() < new Date().getTime()">
                        <span class="bg-white/80 text-black text-xs px-1 py-0.5 uppercase"
                            >Passé</span
                        >
                    </p>
                    <p v-else>
                        <span class="bg-amber-400 text-black text-xs px-1 py-0.5 uppercase"
                            >Bientôt</span
                        >
                    </p>
                    <div v-if="user?.roles.includes('ADMIN')" class="flex gap-2 mt-2">
                        <Prompt
                            title="Voulez-vous vraiment supprimer l'évènement ?"
                            subtitle="Cette action est irréversible."
                            :action="() => deleteEvent(agendaEvent)"
                        >
                            <template #trigger>
                                <button class="text-red-500" title="Supprimer l'évènement">
                                    <LucideTrash />
                                </button>
                            </template>
                        </Prompt>
                        <button
                            @click="() => editEvent(agendaEvent)"
                            class="text-blue-500"
                            title="Modifier l'évènement"
                        >
                            <LucideEdit />
                        </button>
                    </div>
                </div>
                <NuxtLink
                    :to="`/agenda/${agendaEvent.id}-${agendaEvent.name
                        .toLowerCase()
                        .replaceAll(/ /g, '-')
                        .replaceAll(/[^a-zA-Z0-9-]/g, '')
                        .replaceAll(/--/g, '-')
                        .slice(0, 50)}`"
                    class="w-full border border-white/50 p-4 flex flex-col gap-3 group-hover:bg-white/5 cursor-pointer hover:!no-underline"
                >
                    <div class="flex flex-col gap-1">
                        <h2 class="text-lg md:text-2xl font-bold">
                            {{ agendaEvent.name }}
                        </h2>
                        <p class="text-sm md:text-base font-normal text-white/80 line-clamp-2">
                            {{ agendaEvent.subtitle }}
                        </p>
                    </div>
                    <div class="flex flex-col gap-2 pt-2 text-white font-medium">
                        <div class="flex gap-2">
                            <LucideClock class="w-4 h-4 min-w-4 mt-1" />
                            <p class="">
                                À
                                {{ new Date(agendaEvent.date).getHours() }}:{{
                                    addZero(new Date(agendaEvent.date).getMinutes())
                                }}
                            </p>
                        </div>
                        <div class="flex gap-2">
                            <LucideMapPin class="w-4 h-4 min-w-4 mt-1" />
                            <p class="">
                                {{ truncate(agendaEvent.location, 70) }}
                            </p>
                        </div>
                    </div>
                    <NuxtLink
                        :to="`/agenda/${agendaEvent.id}`"
                        class="text-red-500"
                        :class="{
                            'text-white/80':
                                new Date(agendaEvent.date).getTime() < new Date().getTime(),
                        }"
                        >Voir plus d'infos
                    </NuxtLink>
                </NuxtLink>
            </div>
            <div
                v-if="!events.length && !eventCreationOpened && !isGlobalLoading"
                class="h-full flex items-center justify-center mt-20"
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

<style scoped lang="css">
:deep(.ql-editor) {
    min-height: 200px;
}
</style>
