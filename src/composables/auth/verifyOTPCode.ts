export default async function sendSendOTPEmail(email: string, code: number) {
    const runtimeConfig = useRuntimeConfig();

    const response: any = await $fetch(
        `${runtimeConfig.public.API_URL as string}/auth/local/login`,
        {
            method: "POST",
            body: { email: email, otp: code },
            headers: {
                Authorization: `Bearer ${localStorage.getItem("session")}`,
            },
        },
    ).catch((error) => {
        return error.data;
    });

    return response;
}
