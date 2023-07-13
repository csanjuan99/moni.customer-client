<template>
  <section class="bg-[#516898] rounded-3xl">
    <article class="mx-auto px-6 py-14 gap-14 w-full">
      <h1 class="mb-4 xs:text-2xl md:text-6xl 2xl:text-6xl font-inter tracking-tight font-bold leading-10 text-center  text-white">
        {{ section.attributes.title }}
      </h1>
      <p class="mb-4 text-base xs:mt-3 md:text-3xl 2xl:px-72 font-inter leading-8 text-center text-white mt-6">
        {{
          section.attributes.description
        }}
      </p>
      <span class="flex w-1/2 md:w-4/12 lg:w-3/12 xl:w-2/12 mx-auto">
        <ButtonAppButton :text-cta="section.attributes.textCta" :link-cta="section.attributes.linkCta" type="1">
          <IconBackDoorIcon class="my-auto text-primary focus:text-primary"/>
        </ButtonAppButton>
      </span>
    </article>
  </section>
</template>

<script>

export default {
  name: 'RegistrationFormSection',
  props: {
    section: {
      type: Object,
      required: true
    }
  }
}
</script>
