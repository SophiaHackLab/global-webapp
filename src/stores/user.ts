import { client } from "process";

export const useUserStore = defineStore("user", () => {
    const router = useRouter();

    const user = ref<User | null>(null);

    const setUser = (newUser: User) => {
        if (!newUser) return;
        user.value = newUser;
    };

    const logout = () => {
        localStorage.removeItem("session");
        user.value = null;

        window.location.reload();
    };

    return {
        user,
        setUser,
        logout,
    };
});
