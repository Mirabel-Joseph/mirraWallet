<template>
    <div>
        <div class="flex p-[20px] bg-indigo-900 text-white shadow-sm shadow-white">
            <div class="pl-[20px]">
               <router-link to="/Home">
                    <a href=""><i class="fa-solid fa-angle-left"></i></a>
               </router-link>
            </div>
            <div class="pl-[30px]">
                <h1>Settings</h1>
            </div>
        </div>

        <div>
            <div class="w-[20rem] mx-auto mt-[40px]">
                <img src="../assets/images/vecteezy_hosting-or-bussinesman-illustration-vector_11466950-1.jpg" alt="">
            </div>
            <div class="text-center text-[20px] mt-[40px]">
                <p>
                    Get realiable suppport for any issue with our dedicated Whatsapp support contact
                </p>
            </div>
            <div class="flex justify-center mt-[50px] text-[30px] font-semibold">
                <div>
                    <i class="fa-brands fa-whatsapp"></i>
                </div>
                <div>
                    +2348065902683
                </div>
            </div>
        </div>



        <footer>
            <div class="bg-white fixed bottom-0 left-0 right-0">
                <div class="flex justify-around">
                    <div class="text-center pt-[10px]">
                        <router-link to="/Home">
                        <a href=""><i class="fa-solid fa-house text-[20px]"></i></a>
                        </router-link>
                        <h1>Home</h1>
                    </div>
                    <div class="text-center pt-[10px]">
                        <router-link to="/Budget">
                            <a href=""><i class="fa-solid fa-bolt text-[20px]"></i></a>
                            <h1>Budget</h1>
                        </router-link>
                    </div>
                    <div>
                        <router-link to="/Send">
                            <a href=""><i class="fa-solid fa-plus text-white text-[30px] rounded-full bg-blue-500 p-[20px]"></i></a>
                        </router-link>
                    </div>
                    <div class="text-center pt-[10px]">
                        <router-link to="/History">
                            <a href=""><i class="fa-solid fa-clock text-[20px]"></i></a>
                            <h1>History</h1>
                        </router-link>
                    </div>
                    <div class="text-center pt-[10px]">
                        <router-link to="/Settings">
                            <a href=""><i class="fa-solid fa-gear text-[20px]"></i></a>
                            <h1>Settings</h1>
                        </router-link>
                    </div>
                </div>
            </div>
        </footer>
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