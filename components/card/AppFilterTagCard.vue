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
                            <input :id="element.id"  v-if="element?.attributes?.groupTag === tag" type="checkbox" :value="element?.attributes?.name"
                                class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500" />

                            <label :for="element.id" class="ml-2 text-sm font-medium text-gray-900" v-if="element?.attributes?.groupTag === tag">
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
const emits = defineEmits([
  'mutateProducts'
])
const props = defineProps({
  tags: {
    type: Object,
  },
  tag: {
    type: String,
  }
})

const mutateProducts = (name:any)=>{
    emits('mutateProducts',name)
}
</script>