export default async function sendSendOTPEmail(email: string) {
    const response: any = await $fetch(`/auth/otp`, {
        method: "POST",
        body: { email: email },
    }).catch((error) => {
        console.log(error.data);
        return error.data
    });

    return response;
}
