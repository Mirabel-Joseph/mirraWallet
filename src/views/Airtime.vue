<template>
    <div>
        <div class="flex p-[20px] text-white shadow-sm shadow-white bg-indigo-900">
            <div class="pl-[20px]">
               <router-link to="/Send">
                    <a href=""><i class="fa-solid fa-angle-left"></i></a>
               </router-link>
            </div>
            <div class="pl-[30px]">
                <h1 class="text-[20px]">Data & Aitime</h1>
            </div>
        </div>

        <div class="rounded-2xl w-[90%] mx-auto shadow-sm shadow-indigo-900 mt-[20px]">

            <div class="flex justify-around pt-[30px]">
                <!-- MTN -->
                <div>
                    <img class="w-[60px] rounded-full" src="../assets/images/mtn.svg" alt="mtn logo">
                </div>

                <!-- Airtel -->
                <div>
                    <img class="w-[90px] rounded-full" src="../assets/images/Airtel.jpg" alt="airtel logo">
                </div>

                <!-- Glo -->
                <div>
                    <img class="w-[70px] rounded-full" src="../assets/images/globacom-limited.svg" alt="glo logo">
                </div>

                <!-- 9Mobile -->
                <div>
                    <img class="w-[60px] rounded-full" src="../assets/images/9mobile.svg" alt="9Mobile logo">
                </div>
            </div>

            <div class="flex justify-around mt-[20px] pb-[20px]">
                <div class="rounded-xl bg-gray-200 p-[20px]">
                    <p>₦50</p>
                </div>
                <div class="rounded-xl bg-gray-200 p-[20px]"> 
                    <p>₦100</p>
                </div>
                <div class="rounded-xl bg-gray-200 p-[20px]">
                    <p>₦200</p>
                </div>
                <div class="rounded-xl bg-gray-200 p-[20px]">
                    <p>₦500</p>
                </div>
            </div>

            <!-- Input -->
            <div class="p-[10px] text-center">
                <div>
                    <input type="text" v-model="number" placeholder="Enter phone number" class="w-[15rem] text-center mx-auto outline-none border-b-2 border-b-gray-400">  
                </div>
                <span class="text-red-600 text-[20px]">{{ error }}</span>
            </div>

        </div>

        <!-- Hot Deals -->
        <div class=" rounded-2xl shadow-sm w-[90%] mx-auto shadow-indigo-900 mt-[50px] pb-[20px]">
            <p class="font-bold text-[20px] ml-[20px]">Hot Deals</p>

            <!-- Row one -->
            <div class="flex my-[20px] justify-around">
                <div class="px-[20px] py-[25px] rounded-md text-center bg-gray-200">
                    <p class="font-semibold text-[20px]">₦100.00</p>
                    <p>1 Day</p>
                    <p>100MB</p>
                </div>
                <div class="px-[20px] py-[25px] rounded-md text-center bg-gray-200">
                    <p class="font-semibold text-[20px]">₦200.00</p>
                    <p>3 Days</p>
                    <p>200MB</p>
                </div>
                <div class="px-[20px] py-[25px] rounded-md text-center bg-gray-200">
                    <p class="font-semibold text-[20px]">₦350.00</p>
                    <p>1 Day</p>
                    <p>1 GB</p>
                </div>
            </div>

            <!-- Row two -->
            <div class="flex mt-[40px] justify-around">
                <div class="px-[20px] py-[25px] rounded-md text-center bg-gray-200">
                    <p class="font-semibold text-[20px]">₦600.00</p>
                    <p>2 Days</p>
                    <p>2.5GB</p>  
                </div>
                <div class="px-[20px] py-[25px] rounded-md text-center bg-gray-200">
                    <p class="font-semibold text-[20px]">₦600.00</p>
                    <p>7 Days</p>
                    <p>1GB</p>  
                </div>
                <div class="px-[20px] py-[25px] rounded-md text-center bg-gray-200">
                    <p class="font-semibold text-[20px]">₦1000.00</p>
                    <p>30 Days</p>
                    <p>1.2GB</p>  
                </div>
            </div>

            <!-- Amount -->
            <div class="mt-[20px] text-center">
                <div>
                    <p class="font-bold text-[20px] mr-[15px]">₦       <input type="text" v-model="amount" class="outline-none  border-b-2 border-b-gray-400" placeholder="50 - 50,000"></p>
                </div>
                <span class="text-red-600 text-[20px]">{{ caution }}</span>
            </div>

        </div>

        <!-- Pay -->
        <div class="w-[20rem] mx-auto">
            <button v-on:click="pay" class="text-center bg-blue-500 w-[20rem] mt-[40px] text-white rounded-2xl p-[10px] font-bold text-[20px]">Pay</button>
        </div>

    </div>
</template>

<script setup>
import {ref} from 'vue';


        var number = ref('')
        var errormsg = ref(true)
        var error = ref('')

        var amount = ref('')
        var msg = ref(true)
        var caution = ref('')


        function pay() {
        if(number.value == '') {
          errormsg.value = false;
          error.value = 'Enter phone number';
          return;
        } else{
          error.value ="";
        }

        if(amount.value == '') {
          msg.value = false;
          caution.value = 'Enter amount';
          return;
        } else{
          caution.value ="";
        }

    }

</script>

<style lang="scss" scoped>

</style>