<template>
  <div ref="el" class="_default overflow-y-scroll h-screen text-[#516898]">
    <header>
      <nav-app-navbar :y="y" class="bg-[#F0F5FF]" />
    </header>
    <main class="bg-[#E0EBFF] pt-24 md:pb-24">
      <slot/>
    </main>
    <footer>
      <footer-app-footer :y="y" class="bg-[#F0F5FF]" />
    </footer>
  </div>
</template>

<script setup lang="ts">
import {useScroll} from "@vueuse/core";

const el = ref(null);
const {y} = useScroll(el);

</script>
