<template>
    <div>

        <div class="flex p-[20px] text-white shadow-2xl shadow-white bg-indigo-900">
            <div class="pl-[20px]">
                <a href="/Home"><i class="fa-solid fa-angle-left"></i></a>
            </div>
            <div class="pl-[30px]">
                <h1>Loan</h1>
            </div>
        </div>

        <div class="mt-[20px] text-center ">
            <p class="font-semibold text-[25px] ">Manage your finance with an in app loan</p>
            <img class="w-[20rem] mx-auto" src="../assets/images/vecteezy_smiling-man-holding-smart-phone-wearing-casual-clothes_.jpg" alt="">
            <p class="text-[20px]">Easy, fast, low intrest loans just for you.</p>
        </div>

        <div class="rounded-2xl bg-white w-[80%] mx-auto shadow-sm shadow-black mt-[50px]">
            <div class="text-center">
                <p class="font-semibold text-[20px]">Offers</p>
            </div>
            <div class="mt-[20px] px-[20px]">
                <form>
                    <p class=" font-medium text-[18px]">Loan amount</p>
                    <div class="flex">
                        <p class="pr-[10px]">₦</p>
                        <input type="number"
                        minlength="4"
                        maxlength="5" 
                        v-model="amount"
                        placeholder="enter amount" 
                        oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength); else if (this.value.length > this.minLength)">
                    </div>
                    <div>
                        <p class="text-indigo-900">Loan range: ₦1,000-₦90,000</p>
                    </div>
                    <div class="my-[15px]">
                        <p class="font-medium text-[18px]">Select Loan Terms</p>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
                        <option selected>0</option>
                        <option value="7">7 days</option>
                        <option value="14">14 days</option>
                        </select>
                    </div>
                </form>
                <div>
                    <p>Get your loan with just</p>
                    <p class="text-red-500">2% Intrest</p>
                </div>
            </div>
        </div>
        <div class="text-center mt-[20px] bg-blue-500 w-[20rem] mx-auto rounded-2xl text-white p-[10px]">
            <a href="/Bvn"><button>Apply</button></a>
        </div>
    </div>
</template>

<script>
export default {
    setup () {;

        return {
            amount: 0,

        }
    }
}
</script>
