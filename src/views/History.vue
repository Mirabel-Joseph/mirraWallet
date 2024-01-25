<template>
    <div>
        <div class="flex p-[20px] text-white shadow-sm shadow-blue-500 bg-indigo-900">
            <div class="ml-[20px]">
                <router-link to="/Home">
                    <a href=""><i class="fa-solid fa-angle-left"></i></a>
                </router-link>
            </div>
            <div class="ml-[30px]">
                <h1>History</h1>
            </div>
        </div>

        <div>
            <div class="mt-[40px]">
                <p class="font-semibold text-[30px] text-center">All</p>
            </div>

            <div class="rounded-lg shadow-sm w-[20rem] mx-auto px-[10px] shadow-indigo-900">
                <p class="font-semibold text-[20px] mt-[5rem]">{{ today }}</p>
                <img src="../assets/images/doubt_work_from_home.jpg" alt="">
                <p class="text-center text-[20px]">Oooops.....No transsaction history is recorded</p>
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
                            <a href=""><i class="fa-solid fa-plus text-[30px] rounded-full text-white bg-blue-500 p-[20px]"></i></a>
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
        
        let today = (new Date().toDateString());

        return {
            today,
        }
    }
}
</script>

<style lang="scss" scoped>

</style>