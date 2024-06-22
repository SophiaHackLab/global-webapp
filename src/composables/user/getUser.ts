export default async function getUser() {
    const { setUser, logout } = useUserStore();
    const runtimeConfig = useRuntimeConfig();
    const response: any = await $fetch(`${runtimeConfig.public.API_URL as string}/users/me`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("session")}`,
        },
        retry: 0,
    }).catch((error) => {
        console.log(error?.data);
        if ([404, 401].includes(error?.data?.statusCode)) logout();
        return error?.data;
    });

    if (response && response?.id) {
        setUser(response);
    }

    return response;
}
