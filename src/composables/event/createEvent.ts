export default async function createAgendaEvent(data: AgendaEvent) {
    const { setUser, logout } = useUserStore();
    const runtimeConfig = useRuntimeConfig();
    const response: any = await $fetch(`${runtimeConfig.public.API_URL as string}/event`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("session")}`,
        },
        body: data,
    }).catch((error) => {
        console.log(error?.data);
        if ([404, 401].includes(error?.data?.statusCode)) logout();
        return error?.data;
    });

    return response;
}
