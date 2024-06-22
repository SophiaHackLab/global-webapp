export default async function deleteAgendaEvent(eventId: string) {
    const { setUser, logout } = useUserStore();
    const runtimeConfig = useRuntimeConfig();
    const response: any = await $fetch(
        `${runtimeConfig.public.API_URL as string}/event/${eventId}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("session")}`,
            },
        },
    ).catch((error) => {
        console.log(error?.data);
        if ([404, 401].includes(error?.data?.statusCode)) logout();
        return error?.data;
    });

    return response;
}
