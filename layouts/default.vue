<template>
  <div ref="el" class="_default overflow-y-scroll h-screen">
    <header>
      <nav-app-navbar :y="y"/>
    </header>
    <main class="py-2">
      <slot/>
    </main>
    <footer>
    </footer>
  </div>
</template>

<script setup lang="ts">
import {useScroll} from "@vueuse/core";

const el = ref(null);
const {y} = useScroll(el);

</script>
