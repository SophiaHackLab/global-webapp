<template>
    <div class="w-full inline-flex flex-nowrap bg-white overflow-hidden h-32">
        <ul
            class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-[infinite-scroll_20s_linear_infinite]""
        >
            <li v-for="i in 3" class="flex items-center justify-center">
             
                <span class="text-2xl md:text-[6rem] font-bold text-black whitespace-nowrap">{{ props.message }}</span>
            </li>
           
        </ul>
    </div>
</template>
<script setup>
const props = defineProps({
    message: {
        type: String,
        default: "HACK FOR GOOD - SOPHIA HACK LAB - SHL -",
    },
    speed: {
        type: Number,
        default: 10,
    },
});
</script>
