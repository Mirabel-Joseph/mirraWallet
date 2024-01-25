<template>
  <div class="text-center mt-[20px] font-semibold text-[30px]">
    <h4>Your Balance</h4>
    <h1 id="balance">${{ total }}</h1>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  total: {
    type: Number,
    required: true,
  }
});
</script>

