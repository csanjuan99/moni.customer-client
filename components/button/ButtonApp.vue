<template>
  <a :href="linkCta"
     class="font-poppins inline-flex px-5 py-3 gap-2 rounded-lg text-base font-medium leading-normal text-gray-800 bg-white hover:text-primary-600 focus:text-primary-600 hover:bg-gray-200 transition-all ease-in-out duration-150">
    {{
      textCta
    }}
    <BackDoorIcon class="my-auto text-primary focus:text-primary"/>
  </a>
</template>

<script>
import BackDoorIcon from "~/components/icon/BackDoorIcon.vue";

export default {
  name: 'ButtonApp',
  props: {
    textCta: {
      type: String,
      required: true
    },
    linkCta: {
      type: String,
      required: true
    }
  },
  components: {
    BackDoorIcon,
  }
}
</script>
