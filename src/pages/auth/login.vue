<script setup lang="ts">
import sendSendOTPEmail from "~/composables/auth/sendOTPEmail";
import verifyOTPCode from "~/composables/auth/verifyOTPCode";
import getUser from "~/composables/user/getUser";

const router = useRouter();
const route = useRoute();
const { setUser } = useUserStore();

const email = ref("");
const otp = ref("");
const globalError = ref("");

const emailSent = ref(false);

const sendOTPEmail = async (e: any) => {
    globalError.value = "";
    e.preventDefault();
    if (!email.value || email.value.length < 3 || !email.value.includes("@")) {
        return (globalError.value = "Veuillez entrer votre email");
    }
    const result = await sendSendOTPEmail(email.value);
    if (result.statusCode && result.statusCode !== 200) {
        globalError.value = result.message;
    } else {
        emailSent.value = true;
    }
};

const login = async (e: any) => {
    globalError.value = "";
    e.preventDefault();
    if (!otp.value || !parseInt(otp.value)) {
        return (globalError.value = "Veuillez entrer le code magique");
    }

    const result = await verifyOTPCode(email.value, parseInt(otp.value));
    if (result.statusCode && result.statusCode !== 200) {
        globalError.value = result.message;
    } else {
        localStorage.setItem("session", result.access_token);
        getUser();
        if (route.query.redirect) window.location.href = route.query.redirect as string;
        else window.location.href = "/";
    }
};

definePageMeta({
    middleware: "auth",
});

useHead({
    title: "Se connecter - Sophia Hack Lab",
});
</script>
<template>
    <div class="h-screen w-full flex items-center justify-center flex-col gap-5">
        <h1
            class="text-4xl text-center font-bold uppercase text-white whitespace-nowrap text-shadow shadow-white"
        >
            SE CONNECTER
        </h1>
        <p v-if="emailSent" class="text-white text-center">
            Un code magique a été envoyé à votre email :<br />
            <span class="font-bold">{{ email }}</span>
        </p>
        <form class="flex flex-col gap-2 w-80">
            <input
                v-if="!emailSent"
                v-model="email"
                @focus="globalError = ''"
                type="text"
                placeholder="Entrez votre email"
                class="p-2 bg-white text-black rounded-none decoration-none outline-none"
            />
            <input
                v-if="emailSent"
                v-model="otp"
                @focus="globalError = ''"
                type="text"
                placeholder="Code magique"
                class="p-2 bg-white text-black rounded-none decoration-none outline-none"
            />
            <Button
                v-if="!emailSent"
                theme="primary"
                title="Envoyer code magique"
                :expand="true"
                @click="sendOTPEmail"
            />
            <Button
                v-if="emailSent"
                theme="primary"
                title="Connexion"
                :expand="true"
                @click="login"
            />
        </form>
        <p v-if="globalError" class="text-red-500 text-center">{{ globalError }}</p>
    </div>
</template>
