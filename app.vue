<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { initFlowbite} from "flowbite";

const cart =  useCart()

onMounted(() => {
  initFlowbite()
  cart.sync()
});
</script>
