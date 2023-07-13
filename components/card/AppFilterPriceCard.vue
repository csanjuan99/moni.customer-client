<script setup lang="ts">
// Setup

const config = useRuntimeConfig()
const route = useRoute()

//Emits

const emits = defineEmits([
  'mutateMinPrice',
  'mutateMaxPrice'
])

// Data
const prices = ref(null)

if (!route.query.category) {
  const {data:price} = await useFetch(`${config.public.baseURL}/api/products?fields[0]=price`)
  prices.value = price.value
}else{
  const {data:price} = await useFetch(`${config.public.baseURL}/api/products?filters[category][name][$eq]=${route.query.category}&fields[0]=price`)
  prices.value = price.value
}

const arrayPrices = Array.from(new Set(prices?.value?.data?.map((price:any) => price.attributes.price)));

const biggerNumber = Math.max(...arrayPrices);
const minorNumber = Math.min(...arrayPrices);

const ActiveSection = ref(false)
const notFound = ref(false)
const invalidRange = ref(false)

const minPriceLocal = ref(minorNumber)
const maxPriceLocal = ref(biggerNumber)

// Methods
  const searchPrice = ()=>{
    console.log(minPriceLocal.value, maxPriceLocal.value);
    if (minPriceLocal.value < minorNumber || maxPriceLocal.value > biggerNumber || minPriceLocal.value > maxPriceLocal.value || minPriceLocal.value === maxPriceLocal.value) {
      invalidRange.value = true
    }else {
      invalidRange.value = false
      emits('mutateMinPrice', parseInt(minPriceLocal.value))
      emits('mutateMaxPrice', parseInt(maxPriceLocal.value))
    }
  }
  searchPrice()

</script>

<template>
  <section>
    <h2>
      <button
        type="button"
        class="flex items-center justify-between w-full py-2 text-sm font-medium text-left text-gray-500 border-b border-gray-200"
        @click="ActiveSection = !ActiveSection"
      >
        <span>Precio</span>
        <IconUpArrow v-if="ActiveSection" />
        <IconDownArrow v-else />
      </button>
    </h2>
    <div :class="ActiveSection ? 'flex':'hidden'">
      <div
        class="py-5 font-light border-b border-gray-200"
      >
        <div class="grid grid-cols-1 gap-3">
          <div class="flex flex-col md:col-span-2 gap-2.5">
            <section class="flex gap-2.5">
              <article class="w-full flex flex-col gap-1">
                <input
                id="min-price"
                type="range"
                :min="minorNumber"
                :max="biggerNumber"
                v-model="minPriceLocal"
                step="1000"
                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                @change="searchPrice"
                />
                <label
                  for="min-price-input"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Minimo</label
                >
                <input
                  type="number"
                  id="min-price-input"
                  min="20000"
                  max="70000"
                  v-model="minPriceLocal"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder=""
                  @change="searchPrice"
                />
              </article>
              <article class="w-full flex flex-col gap-1">
                <input
                id="max-price"
                type="range"
                :min="minPriceLocal"
                :max="biggerNumber"
                v-model="maxPriceLocal"
                step="1000"
                class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                @change="searchPrice"
                />
                <label
                  for="max-price-input"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Maximo</label
                >
                <input
                  type="number"
                  id="max-price-input"
                  :min="minPriceLocal"
                  max="70000"
                  v-model="maxPriceLocal"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder=""
                  @change="searchPrice"
                />
              </article>
            </section>

            <section>
                <p
                  v-if="invalidRange"
                  class="text-red-600"
                >
                  Ingrese un rango válido
                </p>
                <p v-if="notFound" class="text-red-600">
                  No se encuentran productos en este rango. Por favor ingrese otros
                  valores
                </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


