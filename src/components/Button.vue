<script setup lang="ts">
const props = defineProps<{
    title: string;
    theme: "primary" | "ghost" | "secondary";
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
        v-bind="
            button_type() == 'a'
                ? { href: props.link, target: '_blank' }
                : { to: props.link }
        "
        class="font-medium py-4 px-6 w-full md:w-fit text-center hover:no-underline relative leading-none group h-fit items-center justify-center"
        :class="{
            '!w-full': props.expand,
            '!bg-white/10 rounded-lg text-white pointer-events-none':
                props.disabled,
            'bg-green uppercase rounded-lg text-black whitespace-nowrap  pr-8 hover:bg-white/10 hover:text-white transition-colors hover:after:!border-white/10 after:transition-colors before:transition-colors':
                props.theme == 'primary',

            ' hover:text-white/50 transition-colors !px-2 text-lg':
                props.theme == 'secondary',
        }"
        :title="props.title"
        :aria-label="props.title"
    >
        {{ props.title }}
    </component>
</template>

<style>
.triangle_border:after {
    content: "";
    position: absolute;
    bottom: -1em;
    left: 0;
    right: 1em;
    border-width: 0.5em;
    border-style: solid;
    border-color: white;
}

.triangle_border:before {
    content: "";
    position: absolute;
    bottom: -1em;
    right: 0;
    border-width: 1rem 1rem 0 0;
    border-style: solid;
    border-color: white transparent;
}

.triangle_border:hover::before {
    border-color: rgba(255, 255, 255, 0.1) transparent !important;
}

.split_border:after {
    content: "";
    position: absolute;
    left: 0;

    top: 50%;
    transform: translateY(-50%);

    height: 48px;
    width: 10px;

    border-left: 2px solid white;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
}

.split_border:before {
    content: "";
    position: absolute;
    right: 0;

    top: 50%;
    transform: translateY(-50%);

    height: 48px;
    width: 10px;

    border-right: 2px solid white;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
}
</style>
