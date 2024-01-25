<template>
    <div>

        <div class="flex p-[20px] text-white shadow-2xl shadow-white bg-indigo-900">
            <div class="pl-[20px]">
                <a href="/Loan"><i class="fa-solid fa-angle-left"></i></a>
            </div>
            <div class="pl-[30px]">
                <h1>Loan</h1>
            </div>
        </div>

        <div>
            <img src="../assets/images/MW.png" class="w-[80%] mx-auto mt-[20px]" alt="">
            <h1 class="text-[30px] text-indigo-900 font-bold text-center mt-[10px]">Verification</h1>
        </div>
        <div>
            <form>
                <div class="ml-[30px] text-indigo-900 text-[20px] mt-[30px]">
                    <div>
                        <label>Fullname</label>
                    </div>
                    <div>
                        <input type="text" placeholder="Fullname" class="border-2 w-[90%] mt-[15px] py-[5px] rounded-2xl border-gray-400 mx-auto outline-none">
                    </div>
                </div>

                <div class="ml-[30px] text-indigo-900 text-[20px] mt-[30px]">
                    <div>
                        <label>Bank number</label>
                    </div>
                    <div>
                        <input type="text" placeholder="account number" class="border-2 w-[90%] mt-[15px] py-[5px] rounded-2xl border-gray-400 mx-auto outline-none">
                    </div>
                </div>

                <div class="ml-[30px] text-indigo-900 text-[20px] mt-[30px]">
                    <div>
                        <label>Bank name</label>
                    </div>
                    <div>
                        <input type="text" placeholder="account name" class="border-2 w-[90%] mt-[15px] py-[5px] rounded-2xl border-gray-400 mx-auto outline-none">
                    </div>
                </div>

                <div class="ml-[30px] text-indigo-900 text-[20px] mt-[30px]">
                    <div>
                        <label>BVN</label>
                    </div>
                    <div>
                        <input type="text" placeholder="enter value" class="border-2 w-[90%] mt-[15px] py-[5px] rounded-2xl border-gray-400 mx-auto outline-none">
                    </div>
                </div>
            </form>
            <div class="text-center mt-[20px] bg-blue-500 w-[80%] mx-auto rounded-2xl text-white mb-[30px] p-[10px]">
                <button>Apply</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>