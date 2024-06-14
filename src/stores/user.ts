export const useUserStore = defineStore("user", () => {
    const router = useRouter();

    const user = ref<User | null>(null);
    const token = useCookie("session", {
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    });

    const setUser = (newUser: User) => {
        if (!newUser) return;
        user.value = newUser;
    };

    const setToken = (newToken: string) => {
        token.value = newToken;
    };

    const logout = () => {
        token.value = undefined;
        user.value = null;

        router.push("/auth/login");
    };

    return {
        user,
        token,
        setUser,
        setToken,
        logout,
    };
});
