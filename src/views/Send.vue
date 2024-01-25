<template>
    <div>

        <!-- Heading -->
        <div class="flex p-[20px] text-white shadow-2xl shadow-white bg-indigo-900">
            <div class="pl-[20px]">
                <a href="/Home"><i class="fa-solid fa-angle-left"></i></a>
            </div>
            <div class="pl-[30px]">
                <h1>Transfer</h1>
            </div>
        </div>

        <!-- To MirraWallet -->
        <router-link to="/Transfer">
            <div class="flex rounded-2xl justify-around bg-white my-[40px] p-[20px] w-[20rem] mx-auto shadow-md shadow-indigo-900">
                <div>
                    <p>To MirraWallet Accounts</p>
                </div>
                <div>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
            </div>
        </router-link>


        <!-- To Other Accounts -->
        <router-link to="/Transfer">
            <div class="flex rounded-2xl justify-around bg-white my-[40px] p-[20px] w-[20rem] mx-auto shadow-md shadow-indigo-900">
                <div>
                    <p>To Other accounts</p>
                </div>
                <div>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
            </div>
        </router-link>

        <router-link to="/Airtime">
            <div class="flex rounded-2xl justify-around bg-white my-[40px] p-[20px] w-[20rem] mx-auto shadow-md shadow-indigo-900">
                <div>
                    <p>Airtime/Data</p>
                </div>
                <div>
                    <i class="fa-solid fa-angle-right"></i>
                </div>
            </div>
        </router-link>


        <div class="mt-[40px]">
            <img src="../assets/images/vecteezy_smiling-man-holding-smart-phone-wearing-casual-clothes_.jpg" alt="">
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