export default async function sendSendOTPEmail(email: string, code: number) {
    const response: any = await $fetch(`/auth/login`, {
        method: "POST",
        body: { email: email, otp: code },
    }).catch((error) => {
        console.log(error.data);
        return error.data;
    });

    return response;
}
