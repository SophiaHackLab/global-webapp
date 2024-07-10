<script setup lang="ts">
const props = defineProps<{
    item: {
        name: string;
        link: string;
        badge?: number;
    };
}>();
</script>

<template>
    <NuxtLink :to="item.link" class="flex items-center gap-2">
        {{ item.name }}
        <span v-if="item.badge" class="bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
            {{ item.badge }}
        </span>
    </NuxtLink>
</template>
