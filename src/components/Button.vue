<script setup lang="ts">
const props = defineProps<{
    title: string;
    theme: "primary" | "ghost";
    link?: string;
    expand?: boolean;
    disabled?: boolean;
}>();

const button_type = () => {
    if (props.link?.startsWith("http")) {
        return "a";
    } else if (props.link) {
        return "router-link";
    } else {
        return "button";
    }
};
</script>

<template>
    <component
        :is="button_type()"
        v-bind="button_type() == 'a' ? { href: props.link, target: '_blank' } : { to: props.link }"
        class="font-bold py-2 px-5 w-full md:w-fit hover:animate-glitch text-center hover:underline"
        :class="{
            '!w-full': props.expand,
            'bg-white  text-black whitespace-nowrap': props.theme == 'primary',
            'bg-white/10 text-white pointer-events-none': props.disabled,
        }"
        :title="props.title"
        :aria-label="props.title"
    >
        {{ props.title }}
    </component>
</template>
