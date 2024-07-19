<script setup lang="ts">
const router = useRouter();
onMounted(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push({ name: "auth-login" });
});
</script>
