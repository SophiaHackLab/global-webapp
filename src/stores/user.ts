import { isClient, type RemovableRef } from "@vueuse/core";

export const useUserStore = defineStore("user", {
    state: (): {
        user: User | null;
        token: any;
    } => ({
        user: null,
        token: useLocalStorage('session', null)
    }),
    getters: {
        userEntity: (state) => state.user,
        tokenEntity: (state) => state.token,
    },
    actions: {
        setUser(newUser: User) {
            if (!newUser) return;
            this.user = newUser;
        },
        setToken(newToken: string) {
            if (!newToken) return;
            this.token = newToken;
        },
        logout() {
            if (!isClient) return
            this.token = null
            this.user = null;

            useLocalStorage('session', null)

            useRouter().replace('/')
        },
    },
    hydrate(storeState, initialState) {
        storeState.token = useLocalStorage('session', initialState.token)
    }
});
