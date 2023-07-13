<script setup lang="ts">

const emits = defineEmits([
  'mutateProducts',
  'mutateOrderModal'
])
const props = defineProps({
    activeModalOrder: Boolean
})


const mutateProducts= (recent:any)=>{
  const filtersToAplicate:any = [];
  let antiquity = '';
  const prices = [document.getElementById('min-price-input')?.value,document.getElementById('max-price-input')?.value]
    document.querySelectorAll('input[type=checkbox]:checked').forEach((el)=>{
    filtersToAplicate.push(el?.value)
  })

  if(recent === 'newer'){
    antiquity = 'newer'
  }else if(recent === 'older'){
    antiquity = 'older'
  }
  prices.map((price:any,index:any)=>{
    prices[index] = parseInt(price)
  })
  emits('mutateProducts', filtersToAplicate,prices,antiquity);
}

const mutateOrderModal = (e: boolean) => {
  emits('mutateOrderModal', e)
}

</script>
<template>
    <div class="flex relative">
        <div :class="activeModalOrder ? 'flex flex-col gap-3':'hidden'" class="absolute z-30 px-3 pt-1 bg-white rounded-lg shadow w-52 md:w-80 -left-36 top-5">
          <article class="flex py-2 font-light border-b border-gray-200">
            <div class="flex flex-col p-5 w-full">
              <button name="Mas Recientes" class="w-full hover:bg-gray-300 text-left py-3 px-2 rounded-lg" @click="mutateProducts('newer')">Mas Recientes</button>
              <button name="Mas antiguos" class="w-full hover:bg-gray-300 text-left py-3 px-2 rounded-lg" @click="mutateProducts('older')">Mas Antiguos</button>
            </div>
          </article>
        </div>
        <div :class="activeModalOrder ? 'flex':'hidden'" class="fixed left-0 top-0 z-20 px-3 pt-1 bg-black/40 rounded-lg shadow w-screen h-screen" @click="mutateOrderModal(false)"></div>
      </div>
</template>