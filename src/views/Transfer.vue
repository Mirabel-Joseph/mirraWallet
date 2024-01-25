<template>
    <div>

        <div class="flex p-[20px] text-white shadow-2xl shadow-white bg-indigo-900">
            <div class="pl-[20px]">
                <a href="/Send"><i class="fa-solid fa-angle-left"></i></a>
            </div>
            <div class="pl-[30px]">
                <h1>Transfer</h1>
            </div>
        </div>

        <div class="rounded-2xl shadow-sm shadow-indigo-900 w-[20rem] mx-auto p-[10px] my-[50px]">
            <div class="m-[10px]">
                <h1>Reciepnt Account</h1>
            </div>

            <div class="m-[10px]">
                <form>
                   <div class="my-[30px]">
                    <input type="text" class=" border-2 outline-none border-500 rounded-2xl w-[80%] px-[10px]" placeholder="Enter account number">
                   </div>

                   <div>
                        <input type="text" class=" border-2 outline-none border-500 rounded-2xl px-[10px] w-[80%]" placeholder="Enter bank name">
                   </div>
                </form>

                <button class=" text-white font-medium bg-blue-500 text-center w-[16rem] mx-auto rounded-2xl mt-[30px] text-lg">Next</button>
            </div>
        </div>

        <div>
            <div class="rounded-lg shadow-sm w-[20rem] mx-auto px-[20px] shadow-indigo-900">
                <p class="text-center font-medium">Transactions</p>
                <p class="font-semibold text-[20px] mt-[2rem]">{{ today }}</p>
                <img src="../assets/images/doubt_work_from_home.jpg" alt="">
                <p class="text-center text-[20px]">Oooops.....No transsaction history is recorded</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
    let today = (new Date().toDateString());

    const text = ref('')
    const msg = ref(true)
    const error = ref('')

    const number = ref('')
    const errormsg = ref(true)
    const warning = ref('')

    function transfer(){
        if( text.value == ''){
        msg.value = false;
        error.value = 'Invalid account number';
        return;
        } else{
        error.value ="";
        }

        if( number.value == ''){
        errormsg.value = false;
        warning.value = 'Invalid bank name';
        return;
        } else{
        warning.value ="";
        }
    }
</script>

<style lang="scss" scoped>

</style>