<script setup lang="ts">
const ActiveSection = ref(false)

defineEmits(['mutateFilterModal'])

const props = defineProps({
  activeModalFilter: Boolean
})

</script>
<template>
    <section class="flex relative">
        <div :class="activeModalFilter ? 'flex':'hidden'" class="flex-col gap-3 absolute z-30 px-3 pt-1 bg-white rounded-lg shadow w-80 -left-24 top-5">
          <div class="flex items-center justify-between pt-2">
            <h6 class="text-sm font-medium text-black dark:text-white">Filters</h6>
          </div>
          <div>
            <article>
                <button type="button"
                  class="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200"
                  @click="()=>{ ActiveSection = !ActiveSection }"
                  >
                  <span>Category</span>
                  <IconUpArrow :class="ActiveSection ? 'flex' : 'hidden'" />
                  <IconDownArrow :class="ActiveSection ? 'hidden' :'flex'" />
                </button>
                <div :class="ActiveSection ? 'flex':'hidden'">
                  <div class="py-2 font-light border-b border-gray-200 dark:border-gray-600">
                    <ul class="space-y-2">

                      <li class="flex items-center">
                        <input id="apple" type="checkbox" value=""
                          class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />

                        <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                          Apple (56)
                        </label>
                      </li>

                    </ul>
                  </div>
                </div>
            </article>
            <article>
              <h2>
                <button type="button"
                  class="flex items-center justify-between w-full py-2 px-1.5 text-sm font-medium text-left text-gray-500 border-b border-gray-200"
                  @click="ActiveSection = !ActiveSection">
                  <span>Price</span>
                  <IconUpArrow v-if="ActiveSection" />
                  <IconDownArrow v-else/>
                </button>
              </h2>
              <div :class="ActiveSection ? 'flex':'hidden'">
                <div class="flex items-center py-2 space-x-3 font-light border-b border-gray-200 dark:border-gray-600">
                  <select id="price-from"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option disabled selected>From</option>
                    <option>$500</option>
                    <option>$2500</option>
                    <option>$5000</option>
                  </select>

                  <select id="price-to"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                    <option disabled selected>To</option>
                    <option>$500</option>
                    <option>$2500</option>
                    <option>$5000</option>
                  </select>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div :class="activeModalFilter ? 'flex':'hidden'" class="fixed left-0 top-0 z-20 px-3 pt-1 bg-black/40 rounded-lg shadow w-screen h-screen" @click="$emit('mutateFilterModal',false)"></div>
    </section>
</template>