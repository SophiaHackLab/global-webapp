<script setup lang="ts">
import getUser from "~/composables/user/getUser";

onBeforeMount(async () => {
    await getUser();
});
</script>

<template>
    <main class="flex flex-col items-center">
        <Topbar />
        <slot />
        <Footer />
    </main>
</template>
