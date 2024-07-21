<script setup lang="ts">
const props = defineProps<{
    title: string;
    subtitle?: string;
    custom?: boolean;

    actionTitle?: string;
    action?: () => void;
}>();

const isPromptOpen = ref(false);

const handleClose = () => {
    isPromptOpen.value = false;
};

const handleAction = async () => {
    if (props.action) {
        await props.action();
    }
    isPromptOpen.value = false;
};
</script>

<template>
    <div>
        <div class="cursor-pointer" @click="isPromptOpen = true">
            <slot name="trigger" />
        </div>
        <div
            v-if="isPromptOpen"
            class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center px-5 z-50"
        >
            <div
                class="bg-black p-5 border border-white/50 gap-3 flex flex-col w-full lg:w-fit"
            >
                <div class="gap-3 flex flex-col">
                    <div class="flex justify-between items-center">
                        <h2
                            class="text-3xl text-center font-bold uppercase text-white whitespace-nowrap text-shadow shadow-white"
                        >
                            {{ props.title }}
                        </h2>
                    </div>

                    <p v-if="props.subtitle" class="text-white/80">
                        {{ props.subtitle }}
                    </p>

                    <div
                        class="mt-3 w-full max-h-[calc(100vh-15rem)] overflow-y-auto"
                    >
                        <slot name="content" />
                    </div>

                    <div class="flex justify-end gap-5 mt-5">
                        <Button
                            title="Annuler"
                            theme="ghost"
                            @click="handleClose"
                        />
                        <Button
                            :title="props.actionTitle ?? 'Oui, supprimer'"
                            theme="primary"
                            @click="handleAction"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
