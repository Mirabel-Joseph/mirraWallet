<template>
    <div class="md:bg-indigo-900 md:h-screen md:pt-[5rem]">
        <div class="md:border-2 md:mt-[10rem] md:py-[30px] md:bg-white md:rounded-2xl md:w-[70%] md:mx-auto">
            <div>
                <img src="../assets/images/MW.png" class="w-[80%] mx-auto mt-[50px]" alt="">
            </div>
            <div>
                <h1 class="text-indigo-900 text-[30px] text-center mt-[20px] font-bold">Sign-Up</h1>
            </div>
            <div class="md:text-center">
                <form>
                    <div class="ml-[30px] text-indigo-900 text-[20px] mt-[50px]">
                        <div>
                            <label>Email</label>
                        </div>
                        <div>
                            <input type="text" v-model="email" placeholder="Email" class="border-2 w-[90%] mt-[15px] py-[5px] rounded-2xl border-gray-400 mx-auto outline-none">
                            <span class="text-red-600">{{ aviod }}</span>

                        </div>
                    </div>
                    <div class="ml-[30px] text-indigo-900 text-[20px] mt-[80px]">
                        <div>
                            <label>Password</label>
                        </div>
                        <div>
                            <input type="text" placeholder="Password" class="border-2 rounded-2xl py-[5px] w-[90%] mt-[15px] mx-auto border-gray-400 outline-none">
                        </div>
                    </div>
        
                </form>
            </div>

            <div class="text-end text-indigo-900 mr-[34px] mt-[20px]">
                <a href="/Forgot_password">Forgot password?</a>
            </div>

            <router-link to="/Home">
                <div class="text-center mt-[20px] bg-blue-500 w-[80%] mx-auto rounded-2xl text-white p-[10px]">
                    <button v-on:click="createuser()">Sign_in</button>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

    var fname = ref('')
    var errormsg = ref(true)
    var error = ref('')

    var lastname = ref('')
    var msg = ref(true)
    var warning = ref('')

    var email = ref('')
    var invalid = ref(true)
    var aviod = ref('')

    var phone = ref('')
    var note = ref(true)
    var caution = ref('')



    function createuser() {
        if(fname.value == '') {
          errormsg.value = false;
          error.value = 'Enter first name';
          return;
        } else{
          error.value ="";
        }

        if(lastname.value == '') {
          msg.value = false;
          warning.value = 'Enter last name';
          return;
        }else{
          warning.value ="";
        }

        if(phone.value == '') {
          note.value = false;
          caution.value = 'Enter phone number';
          return;
        }else{
          caution.value ="";
        }

        if(email.value == '') {
          invalid.value = false;
          aviod.value = 'Enter email address';
          return;
        }else{
          aviod.value ="";
        }

      }
</script>

<style lang="scss" scoped>

</style>