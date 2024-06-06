import getUser from "~/composables/user/getUser";

export default defineNuxtPlugin(async (nuxtApp) => {
    const { user } = useUserStore();

    if (!user) {
        await getUser();
    }
});
