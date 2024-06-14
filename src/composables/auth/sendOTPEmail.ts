export default async function sendSendOTPEmail(email: string) {
    const { token } = useUserStore();
    const runtimeConfig = useRuntimeConfig();

    const response: any = await $fetch(`${runtimeConfig.public.API_URL as string}/auth/otp`, {
        method: "POST",
        body: { email: email },
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }).catch((error) => {
        console.log(error.data);
        return error.data;
    });

    return response;
}
