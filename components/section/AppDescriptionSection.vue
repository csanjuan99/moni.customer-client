<template>
    <section class="flex w-full flex-col gap-3">
      <header class="flex flex-col gap-5">
          <p class="text-2xl lg:text-4xl">Marea Denim Jacket</p>
          <span class="flex gap-3">
              <p class="text-2xl lg:text-4xl text-red-600">$90.000</p>
              <p class="text-2xl lg:text-4xl text-gray-300 line-through">$110.000</p>
              <p class="text-lg lg:text-xl flex items-center text-white bg-green-600 px-5 rounded-xl">-23%</p>
          </span>
      </header>
      <main class="flex flex-col gap-5">
        <article>
          <div>
            <p class="text-lg">
              Knitted mid-calf dress with light draping. Model with a high turtleneck
              and a concealed zip at the back. Seam with a detachable tie belt at the waist, slightly flared skirt and a high slit in the side. no lining
              Size Model is 175cm/5'9" and is wearing a size CH
              Composition polyester 98%, elastane 2%
            </p>
          </div>
        </article>
        <article class="flex flex-col">
          <p>Color</p>
          <div class="flex flex-row">
            <div v-for="(button, index) in buttons" :key="index" @click="toggleActive(index)" :class="{ 'active': activeIndex === index }" class="rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-300">
              <div :style="{ background: button.color }" class="rounded-full w-8 h-8"></div>
            </div>
          </div>
        </article>
        <article>
          <div>
            <p>Talla</p>
            <div class="flex flex-row gap-5">
              <button
                v-for="(button, index) in sizes"
                :key="index"
                class="px-4 py-2 rounded-full transition-all duration-300 w-10 h-10 flex items-center justify-center cursor-pointer"                
                :class="button.isActive ? 'border border-black bg-gray-300 hover:bg-gray-400' : 'hover:bg-gray-300'"
                @click="toggleButton(index)"
              >
                {{ button.label }}
              </button>
            </div>
          </div>
        </article>
        <article>
          <div class="flex items-center justify-center w-40 h-10 bg-[F9FAFB] border-2 border-black">
            <button class="w-10 h-10 justify-center text-2xl flex items-center" @click="decrement">-</button>
            <div class="mx-2 text-xl font-semibold">{{ count }}</div>
            <button class="w-10 h-10 justify-center text-2xl flex items-center" @click="increment">+</button>
          </div>
        </article>
        <footer>
          <button
          class="block mx-auto bg-secondary-color-40 ease-in-out duration-150 bg-gray-800 hover:bg-opacity-90 text-white whitespace-nowrap w-full px-5 py-3 mt-5 rounded-lg"
          >
            Añadir al carrito
          </button>
          <button
          class="bg-white border-2 border-black text-black text-center w-full px-5 py-3 mt-2.5 hover:text-[#007880] hover:bg-opacity-20 focus:bg-green-500 focus:text-white focus:border-green-500 ease-in-out duration-150 rounded-lg"
          >
            Comprar Ahora
          </button>
        </footer>
      </main>
    </section>
</template>

<script setup lang="ts">

    const increment = ()=> {
      count.value++;
    }

    const decrement = ()=> {
      if (count.value > 1) {
        count.value--;
      }
    }
    const sizes = ref([
        { label: 'S', isActive: false },
        { label: 'M', isActive: false },
        { label: 'L', isActive: false },
        { label: 'XL', isActive: false },
        // Agrega más tallas según tus necesidades
    ]);
    const buttons = [
        { color: 'red' },
        { color: 'green' },
        { color: 'blue' }
    ];

    const count = ref(1);

    const activeIndex = ref(-1);
    
  // methods
  const toggleActive = (index:any)=> {
      if (activeIndex.value === index) {
        activeIndex.value = -1; // Desactivar el botón actual
      } else {
        activeIndex.value = index; // Activar el botón
      }
  }

  const toggleButton = (index:any) => {
    console.log(index);
    sizes.value[index].isActive = !sizes.value[index].isActive;
    console.log(sizes.value[index]);
  }
</script>


<style scoped>
.button {
    @apply inline-block border-2 border-black cursor-pointer transition duration-300;
}
.activeSize {
    @apply bg-green-500 text-white;
}
.active {
    border: 2px solid black;
    transform: scale(0.8);
}

</style>