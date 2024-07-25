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
    <NuxtLink
        :to="item.link"
        :target="item.link.startsWith('http') ? '_blank' : '_self'"
        class="flex items-center gap-2 font-medium"
    >
        {{ item.name }}
        <span
            v-if="item.badge"
            class="bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5"
        >
            {{ item.badge }}
        </span>
        <IconsExternal
            v-if="item.link.startsWith('http')"
            class="w-4 h-4 text-white"
        />
    </NuxtLink>
</template>
