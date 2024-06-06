export default async function getUser() {
    const { setUser } = useUserStore();
    const response: any = await $fetch(`/users/me`).catch((error) => {
        console.log(error.data);
        return error.data;
    });

    if (response || response.id) {
        setUser(response);
    }

    return response;
}
