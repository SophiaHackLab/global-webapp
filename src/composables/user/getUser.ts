export default async function getUser() {
    const { setUser, token, tokenEntity, logout } = useUserStore();
    console.log(tokenEntity, token);
    const runtimeConfig = useRuntimeConfig();
    const response: any = await $fetch(`${runtimeConfig.public.API_URL as string}/users/me`, {
        headers: {
            Authorization: `Bearer ${tokenEntity}`,
        },
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
