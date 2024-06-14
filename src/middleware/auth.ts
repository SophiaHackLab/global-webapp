export default defineNuxtRouteMiddleware((to, from) => {
    const { token } = useUserStore();

    if (["/auth/login", "/auth/register"].includes(to.path) && token) {
        return navigateTo("/");
    }
});
