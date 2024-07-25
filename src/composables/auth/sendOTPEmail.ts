export default async function sendSendOTPEmail(email: string) {
    const runtimeConfig = useRuntimeConfig();

    const response: any = await $fetch(
        `${runtimeConfig.public.API_URL as string}/auth/local/otp`,
        {
            method: "POST",
            body: { email: email },
            headers: {
                Authorization: `Bearer ${localStorage.getItem("session")}`,
            },
        },
    ).catch((error) => {
        return error.data;
    });

    return response;
}
