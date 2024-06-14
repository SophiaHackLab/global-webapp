export default async function getEvents() {
    const { setUser, token, logout } = useUserStore();
    const runtimeConfig = useRuntimeConfig();
    const response: any = await $fetch(`${runtimeConfig.public.API_URL as string}/event`, {}).catch(
        (error) => {
            console.log(error?.data);
            if ([404, 401].includes(error?.data?.statusCode)) logout();
            return error?.data;
        },
    );

    return response;
}
