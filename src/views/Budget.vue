<template>
  <div>
    <div class="flex p-[20px] text-white shadow-2xl shadow-white bg-indigo-900">
      <div class="pl-[20px]">
        <a href="/Home"><i class="fa-solid fa-angle-left"></i></a>
      </div>
      <div class="pl-[30px]">
        <h1>Budget</h1>
      </div>
    </div>
  </div>
  <div>
    <Header />
    <div class="container">
      <Balance :total="+total" />
      <IncomeExpenses :income="+income" :expenses="+expenses" />
      <TransactionList :transactions="transactions" @transactionDeleted="handleTransactionDeleted"/>
    </div>
    <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import AddTransaction from '../components/AddTransaction.vue';
import Balance from '../components/Balance.vue';
import IncomeExpenses from '../components/IncomeExpenses.vue';
import TransactionList from '../components/TransactionList.vue';

import {ref, computed, onMounted} from 'vue';

const transactions = ref([
]);

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'));

  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
});

//Get total
const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
});

//Get income
const income = computed(() => {
  return transactions.value
  .filter((transaction) => transaction.amount > 0)
  .reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0)
  .toFixed(2);
});

//Get expenses
const expenses = computed(() => {
  return transactions.value
  .filter((transaction) => transaction.amount < 0)
  .reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0)
  .toFixed(2);
});

//Add transactions
const handleTransactionSubmitted = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount,
  });

  saveTransactionsToLocaleStorage();
};

//generate unique id
const generateUniqueId = () => {
  return Math.floor(Math.random() *1000000);
}

//Delete transaction
const handleTransactionDeleted = (id) =>{
  transactions.value = transactions.value.filter((transaction) => transaction.id !== id);

  saveTransactionsToLocaleStorage();
}

// Save to locale storage
const saveTransactionsToLocaleStorage = () =>{
  localeStorage.setItem('transactions', JSON.stringify(transactions.value));
}
</script>

<style lang="scss" scoped>

</style>