export const useUserStore = defineStore("user", () => {
    const router = useRouter();

    const user = ref<User | null>(null);
    const token = useCookie("session", {
        maxAge: 60 * 60 * 24 * 30,
    });

    const setUser = (newUser: User) => {
        user.value = newUser;
    };

    const setToken = (newToken: string) => {
        token.value = newToken;
    };

    const logout = () => {
        token.value = null;
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
