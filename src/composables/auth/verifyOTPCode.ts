export default async function sendSendOTPEmail(email: string, code: number) {
    const { token } = useUserStore();
    const runtimeConfig = useRuntimeConfig();

    const response: any = await $fetch(`${runtimeConfig.public.API_URL as string}/auth/login`, {
        method: "POST",
        body: { email: email, otp: code },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).catch((error) => {
        console.log(error.data);
        return error.data;
    });

    return response;
}
