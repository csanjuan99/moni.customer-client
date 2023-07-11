<template>
  <div ref="el" class="_default overflow-y-scroll h-screen text-[#516898]">
    <header>
      <nav-app-navbar :y="y"/>
    </header>
    <main class="mt-20 bg-[#E0EBFF]">
      <slot/>
    </main>
    <footer>
      <footer-app-footer :y="y"/>
    </footer>
  </div>
</template>

<script setup lang="ts">
import {useScroll} from "@vueuse/core";

const el = ref(null);
const {y} = useScroll(el);

</script>
