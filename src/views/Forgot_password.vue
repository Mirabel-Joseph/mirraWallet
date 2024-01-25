<template>
    <div>
        <div class="flex p-[20px] bg-indigo-900 text-white shadow-sm shadow-white">
            <div class="pl-[10px]">
               <router-link to="/Home">
                    <a href=""><i class="fa-solid fa-angle-left"></i></a>
               </router-link>
            </div>
            <div class="pl-[20px]">
                <h1>Login settings</h1>
            </div>
        </div>

        <div class="mt-[30px] w-[20rem] mx-auto">
            <img src="../assets/images/MW.png" alt="mirraWallet">
        </div>

        <div class="w-[20rem] mx-auto mt-[40px]">
            <form>
                <div>
                    <div>
                        <label  class="font-bold text-[30px]">Old password</label>
                    </div>
                    <div>
                        <input type="text" class="outline-none border-b-2 border-b-indigo-900 w-[20rem] text-[20px] mt-[20px]" placeholder="enter old password">
                    </div>
                </div>

                <div class="mt-[80px]">
                    <div>
                        <label  class="font-bold text-[30px]">New password</label>
                    </div>
                    <div>
                        <input type="text" class="outline-none border-b-2 border-b-indigo-900 w-[20rem] text-[20px] mt-[20px]" placeholder="enter new password">
                    </div>
                </div>
            </form>
        </div>

        <div class="text-center mt-[60px] bg-blue-500 w-[20rem] mx-auto rounded-2xl text-white p-[10px]">
            <button>Save</button>
        </div>
        
    </div>
</template>

<script setup>
</script>

<style>
</style>
