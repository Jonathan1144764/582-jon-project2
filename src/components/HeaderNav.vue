<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/public">Parks</router-link> |
    <router-link v-if="userStore.isAuthenticated" to="/admin"
      >Admin</router-link
    >
  </nav>
</template>

<script>
import { useUserStore } from "../store/userStore";

export default {
  name: "HeaderNav",
  setup() {
    const userStore = useUserStore();

    return { userStore };
  },
};
</script>
