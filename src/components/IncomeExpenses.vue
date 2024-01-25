<template>
    <div class="inc-exp-container flex w-[20rem] mx-auto shadow-sm shadow-indigo-900 justify-around text-center py-[30px] px-[40px] mt-[20px]">
      <div>
        <h4 class="text-[20px] font-semibold">Income</h4>
        <p id="money-plus" class="money plus">+${{ income }}</p>
      </div>
      <div>
        <h4 class="text-[20px] font-semibold">Expense</h4>
        <p id="money-minus" class="money minus">${{ expenses }}</p>
      </div>
    </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  income: {
    type: Number,
    required: true,
  },

  expenses: {
    type: Number,
    required: true,
  },
});
</script>
