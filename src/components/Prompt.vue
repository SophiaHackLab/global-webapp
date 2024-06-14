<script setup lang="ts">
const props = defineProps<{
    title: string;
    subtitle?: string;
    action: () => void;
}>();

const isPromptOpen = ref(false);

const handleClose = () => {
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
            class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center"
        >
            <div class="bg-black p-5 w-full max-w-lg border border-white/50 gap-3 flex flex-col">
                <div class="flex justify-between items-center">
                    <h2 class="text-2xl font-bold">{{ props.title }}</h2>
                </div>
                <p class="text-white/80">{{ props.subtitle }}</p>
                <div class="flex justify-end gap-5 mt-5">
                    <Button title="Annuler" theme="ghost" @click="handleClose" />
                    <Button title="Oui, supprimer" theme="primary" @click="props.action" />
                </div>
            </div>
        </div>
    </div>
</template>
