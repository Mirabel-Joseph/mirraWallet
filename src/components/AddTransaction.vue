<template>
    <div>
      <h3 class="font-semibold text-[20px] text-center ml-[10px]">Add new transaction</h3>
      <form id="form" @submit.prevent="onSubmit">
        <div class="form-control my-[20px] text-center">
          <div>
            <label for="text">Text</label>
          </div>
         <div>
          <input class="outline-none border-2 border-gray-400 rounded-2xl px-[10px] w-[80%]" v-model="text" type="text" id="text" placeholder="enter text ..">
          <span class="text-red-600">{{ error }}</span>
         </div>
        </div>

        <div class="form-control text-center">
          <div>
            <label for="amount">Amount <br>
           (negative - expense, positive - income)
            </label>
          </div>
          <div>
            <input class="outline-none border-2 border-gray-400 rounded-2xl px-[10px] w-[80%]" type="text" v-model="amount" id="amount" placeholder="enter amount ..">
          <span class="text-red-600">{{ warning }}</span>
          </div>
        </div>

        <button class="btn">Add transaction</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import {ref} from 'vue';

  const text = ref('');
  var errormsg = ref(true)
  var error = ref('')

  const amount = ref('');
  var msg = ref(true)
  var warning = ref('')

  const emit = defineEmits(['transactionSubmitted']);


  const onSubmit = () =>{
    if(text.value == '') {
      errormsg.value = false;
      error.value = 'Enter  text';
      return;
     } else{
      error.value ="";
      }

      if(amount.value == '') {
      msg.value = false;
      warning.value = 'Enter  amount';
      return;
     } else{
      warning.value ="";
      }

    const transactionData = {
      text: text.value, 
      amount: parseFloat(amount.value)
    }

    emit('transactionSubmitted', transactionData);

    text.value='';
    amount.value='';
  };

  </script>
  
  <style lang="scss" scoped>
  
  </style>