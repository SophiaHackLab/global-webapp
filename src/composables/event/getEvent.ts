export default async function getAgendaEvent(eventId: string) {
    const { setUser, logout } = useUserStore();
    const runtimeConfig = useRuntimeConfig();
    const response: any = await $fetch(
        `${runtimeConfig.public.API_URL as string}/event/${eventId}`,
    ).catch((error) => {
        console.log(error?.data);
        if ([404, 401].includes(error?.data?.statusCode)) logout();
        return error?.data;
    });

    return response;
}
