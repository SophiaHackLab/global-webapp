export default async function getUser() {
    const { setUser, token, logout } = useUserStore();
    const runtimeConfig = useRuntimeConfig();
    if (!token) return;
    const response: any = await $fetch(`${runtimeConfig.public.API_URL as string}/users/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
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
