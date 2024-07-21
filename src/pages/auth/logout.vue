<script setup lang="ts">
const router = useRouter();
onMounted(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("session");
    localStorage.removeItem("user");
    window.location.href = "/";
});
</script>
