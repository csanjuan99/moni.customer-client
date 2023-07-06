<template>
    <section class="flex w-full flex-col gap-3">
      <header class="flex flex-col gap-5">
          <p class="text-2xl lg:text-4xl font-semibold">{{data?.attributes?.name}}</p>
          <span class="flex gap-3">
              <p v-if="data?.attributes?.discount" class="text-2xl lg:text-4xl text-red-600">
                {{
                  useDiscount(
                    data?.attributes?.price,
                    data?.attributes?.discount
                  )
                }}
              </p>
              <p :class="data?.attributes?.discount ? 'text-gray-300 line-through':'font-semibold'" class="text-2xl lg:text-4xl"> {{ useCurrency(data?.attributes?.price) }} </p>
              <p v-if="data?.attributes?.discount" class="text-lg lg:text-xl flex items-center text-white bg-green-600 px-5 rounded-xl">-{{ data?.attributes?.discount }}%</p>
          </span>
      </header>
      <main class="flex flex-col gap-5">
        <article class="flex flex-col gap-3">
          <p class="text-xl"> 
            {{data?.attributes?.brand}}
          </p>
          <article class="flex gap-4">
            <span class="bg-gray-100 px-3 py-1 rounded-md" v-for="(tag) in data?.attributes?.tags?.data" :key="tag.id">
              {{ tag?.attributes?.name }}
            </span>
          </article>
        </article>
        <article>
            <p class="text-lg">
              {{data?.attributes?.description}}
            </p>
        </article>
        <article class="flex flex-col gap-3">
          <p class="font-medium text-xl">Cantidad</p>
          <div class="flex items-center justify-center p-4 bg-[F9FAFB] border-2 border-black rounded-lg max-w-min gap-8">
            <button class="text-4xl" @click="decrement">-</button>
            <div class="text-xl font-semibold">{{ count }}</div>
            <button class="text-4xl" @click="increment">+</button>
          </div>
        </article>
      </main>
      <footer>
        <button
        class="block mx-auto bg-secondary-color-40 ease-in-out duration-150 bg-gray-800 hover:bg-opacity-90 text-white whitespace-nowrap w-full px-5 py-3 mt-5 rounded-lg"
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
        </nuxt-link>
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