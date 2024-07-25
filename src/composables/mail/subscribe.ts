export default async function subscribeMail(email: string) {
    const runtimeConfig = useRuntimeConfig();

    const response: any = await $fetch(
        `${runtimeConfig.public.API_URL as string}/mail/subscribe`,
        {
            method: "POST",
            body: { email: email },
        },
    ).catch((error) => {
        return error.data;
    });

    return response;
}
