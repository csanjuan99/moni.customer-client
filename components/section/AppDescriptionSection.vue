<template>
    <section class="flex w-full flex-col gap-0 md:gap-3 font-poppins">
      <header class="flex flex-col gap-2 md:gap-3">
          <p class="text-2xl lg:text-4xl font-semibold">{{data?.attributes?.name}}</p>
          <span class="flex gap-3">
              <p v-if="data?.attributes?.discount" class="text-2xl lg:text-3xl text-pink-800 font-semibold">
                {{
                  useDiscount(
                    data?.attributes?.price,
                    data?.attributes?.discount
                  )
                }}
              </p>
              <p :class="data?.attributes?.discount ? 'text-gray-500 line-through':'font-semibold text-gray-800'" class="text-2xl"> {{ useCurrency(data?.attributes?.price) }} </p>
              <p v-if="data?.attributes?.discount" class="text-lg flex items-center text-white bg-green-600 px-5 rounded-xl">-{{ data?.attributes?.discount }}%</p>
          </span>
      </header>
      <main class="flex flex-col gap-2 md:gap-3">
        <article class="flex flex-col gap-2 md:gap-3">
          <p class="text-xl"> 
            Marca: {{data?.attributes?.brand}}.
          </p>
          <article class="flex gap-4">
            <span class="bg-pink-50 text-pink-800 px-3 py-1 rounded-md" v-for="(tag) in data?.attributes?.tags?.data" :key="tag.id">
              {{ tag?.attributes?.name }}
            </span>
          </article>
        </article>
        <article>
            <p class="text-lg">
              {{data?.attributes?.description}}
            </p>
        </article>
        <article class="flex flex-col gap-2 md:gap-3 mb-4">
          <p class="font-medium text-xl">Cantidad</p>
          <div class="flex items-center justify-center p-2 border-2 border-candles-heavy text-candles-heavy rounded-lg max-w-min px-8 gap-6">
            <button class="text-4xl flex items-center" @click="decrement"> 
              <IconMinus />
            </button>
            <div class="text-xl font-semibold">{{ count }}</div>
            <button class="text-2xl" @click="increment">
              <IconPlus />
            </button>
          </div>
        </article>
      </main>
      <footer class="gap-2 md:gap-3 flex flex-col">
        <ButtonAppButton :textCta="'Añadir al carrito'" type="3" @click="onAdd(data,count)"/>
        <ButtonAppButton :textCta="'Comprar ahora'" :linkCta="'/cart'" type="1" @click="onAdd(data,count)" />

        <!-- <button
        class="block mx-auto bg-secondary-color-40 ease-in-out duration-150 bg-gray-800 hover:bg-opacity-90 text-white whitespace-nowrap w-full px-5 py-3 rounded-lg"
        @click="onAdd(data,count)"
        >
          Añadir al carrito
        </button>
        <nuxt-link to="/cart">
          <button
            class="bg-white border-2 border-black text-black text-center w-full px-5 py-3 mt-2.5 hover:text-[#007880] hover:bg-opacity-20 focus:bg-green-500 focus:text-white focus:border-green-500 ease-in-out duration-150 rounded-lg"
            @click="onAdd(data,count)"
          >
            Comprar Ahora
          </button>
        </nuxt-link> -->
      </footer>
    </section>
</template>

<script setup lang="ts">
const cart = useCart()
// Methods
    const onAdd = (item: any, quantity:any) => {
      cart.add(item,quantity)
    }
    const increment = ()=> {
      count.value++;
    }

    const decrement = ()=> {
      if (count.value > 1) {
        count.value--;
      }
    }

    const count = ref(1);
    
  // props

  const props = defineProps({
    data: {
      type: Object,
      required: true
    }
  })

</script>


<style scoped>

</style>