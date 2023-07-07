<template>
    <section>
        <article>
            <button type="button"
                class="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200"
                @click="()=>{ ActiveSection = !ActiveSection }"
                >
                <span>{{tag}}</span>
                <IconUpArrow :class="ActiveSection ? 'flex' : 'hidden'" />
                <IconDownArrow :class="ActiveSection ? 'hidden' :'flex'" />
            </button>
            <div :class="ActiveSection ? 'flex':'hidden'">
                <div class="py-2 font-light border-b border-gray-200 dark:border-gray-600">
                <ul>
                    <li class="flex items-center" v-for="(element) in tags?.data" :key="element.id">
                    <input id="apple"  v-if="element?.attributes?.groupTag === tag" type="checkbox" value=""
                        class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                    <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100" v-if="element?.attributes?.groupTag === tag">
                        {{ element?.attributes?.name }}
                    </label>
                    </li>

                </ul>
                </div>
            </div>
        </article>
    </section>
</template>

<script setup lang="ts">

const ActiveSection = ref(false)

const props = defineProps({
  tags: {
    type: Object,
  },
  tag: {
    type: String,
  }
})
</script>