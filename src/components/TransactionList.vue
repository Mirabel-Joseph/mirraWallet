<template>
    <h3 class="text-center mt-[30px] border-b-2 border-b-gray-400 w-[80%] mx-auto font-semibold text-[30px]">
      History
    </h3>

    <ul id="list" class="list w-[85%] mx-auto">
      <li v-for="transaction in transactions" v-bind:key="transaction.id" v-bind:class="transaction.amount < 0 ? 'minus' : 'plus' ">
        {{ transaction.text }}
        <span>${{ transaction.amount }}</span>
        <button @click="deleteTransaction(transaction.id)" class="delete-btn">X</button>
      </li>
    </ul>
</template>

<script setup>
import {defineProps} from 'vue';

const emit = defineEmits(['transactionDeleted']);

const props = defineProps ({
  transactions: {
    type: Array,
    required: true,
  }
});

const deleteTransaction = (id) =>{
  emit('transactionDeleted', id);
}

</script>