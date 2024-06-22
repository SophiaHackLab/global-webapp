export default async function getUser() {
    const { setUser, token, tokenEntity, logout } = useUserStore();
    const runtimeConfig = useRuntimeConfig();
    const response: any = await $fetch(`${runtimeConfig.public.API_URL as string}/users/me`, {
        headers: {
            Authorization: `Bearer ${tokenEntity}`,
        },
    }).catch((error) => {
        if ([404, 401].includes(error?.data?.statusCode)) logout();
        return error?.data;
    });

    if (response && response?.id) {
        setUser(response);
    }

    return response;
}
