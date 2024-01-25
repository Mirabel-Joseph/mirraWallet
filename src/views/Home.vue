<template>
    <div class="bg-indigo-900 h-screen relative md:bg-white">

        <div class="hidden md:block bg-indigo-900  px-[30px]">
            <div class=" flex  py-[15px]">
                <div class="hidden md:block">
                    <img src="../assets/images/MW.png" alt="mirraWallet logo" class="w-[30%]">
                </div>
                <div class="flex">
                    <div class="hidden md:block mx-[20px]">
                        <a href="/Home" class="text-white text-[20px] font-semibold">Home</a>
                    </div>
                    <div class="hidden md:block mx-[20px]">
                        <a href="/Send" class="text-white text-[20px] font-semibold">Send</a>
                    </div>
                    <div class="hidden md:block mx-[20px]">
                        <a href="/Loan" class="text-white text-[20px] font-semibold">Loan</a>
                    </div>
                    <div class="hidden md:block mx-[20px]">
                        <a href="/Exchange" class="text-white text-[20px] font-semibold">Exchange</a>
                    </div>
                    <div class="hidden md:block mx-[20px]">
                        <a href="/Budget" class="text-white text-[20px] font-semibold">Budget</a>
                    </div>
                </div>
            </div>
            <div class="rounded-2xl bg-white px-[50px] pt-[2rem] pb-[8rem] mt-[30px] flex">
                <div>
                    <div>
                        <h1 class="font-bold text-[3rem]">Bringing Financial Services <br>
                        To Your Doorsteps.</h1>
                    </div>
                    <div>
                        <p class="text-[20px] mt-[30px]">Easy acess to financial services <br> while managing and maintaining your budget. </p>
                    </div>
                    <div>
                        <button class="bg-blue-500 text-[20px] rounded-2xl py-[10px] px-[30px] mt-[50px]">Download Mobile App</button>
                    </div>
                </div>
                <div class="w-[30rem]">
                    <img src="../assets/images/vecteezy_modern-flat-design-isometric-background-of-blockchain-and_.jpg" alt="">
                </div>
            </div>

            <div class="flex justify-around my-[40px]">
                <div class="bg-blue-500 px-[20px] py-[40px] text-white">
                    <h1 class="font-bold text-[30px]">Send <br> Money</h1>
                    <p>Fast and secure transfer <br> to any bank in nigeria</p>
                </div>

                <div class="bg-blue-500 px-[20px] py-[40px] text-white">
                    <h1 class="font-bold text-[30px]">Monthly <br> Budget</h1>
                    <p>Plan and manage your <br> budget for the month</p>
                </div>

                <div class="bg-blue-500 px-[20px] py-[40px] text-white">
                    <h1 class="font-bold text-[30px]">Currency <br> Exchange</h1>
                    <p>Change your money into <br> diffrent currencies</p>
                </div>
            </div>

            <div>
                <div>
                    <img class="[50rem]" src="../assets/images/vecteezy_mobile-banking-modern-flat-concept-for-web-banner-design_5877695.jpg" alt="">
                </div>

                <div class="text-white ml-[60px] text-center">
                    <h1 class="font-bold text-[30px]">Digitalize <br> your finances</h1>
                    <p class="text-[20px]">Cross into the financial world, and make all your expenses online,</p>
                </div>

            </div>

            <div class="mt-[20px]">
                <div class="text-white pb-[20px]">
                    <h1 class="font-semibold text-[30px]">Contact Us</h1>
                    <p class="text-[20px]">For more information contact us at:</p>
                    <p>+2348065902683</p>
                </div>
            </div>
        </div>

        <!-- Mobile View Heading -->
        <div class="flex py-[30px] sm:hidden">
            <div class="ml-[20px]">
                <img src="../assets/images/default-profile-pic.jpg" class="w-[50px] rounded-full" alt="dummy pic">
            </div>
            <div class="ml-[15px]">
                <h1 class="font-bold text-white text-[23px]">Hello,Mirabel</h1>
                <p class="text-white">mirabel@gmail.com</p>
            </div>
        </div>

        <!-- Balance and Spent -->
        <div class="flex justify-center mb-[3rem] sm:hidden">
            <div class="rounded-2xl bg-indigo-800 py-[10px] px-[20px] text-white">
                <p>Total balance</p>
                <p>₦450,000.00</p>
            </div>
            <div class="ml-[20px] rounded-2xl bg-indigo-800 py-[10px] px-[20px] text-white">
                <p>Total spent</p>
                <p>₦100,000.00</p>
            </div>
        </div>

        <!-- Card -->
        <div>
            <div class="mt-[40px] absolute right-0 left-0 top-[10rem] pl-[30px] w-[20rem] mx-auto text-white rounded-2xl shadow-lg shadow-indigo-900 bg-blue-500 sm:hidden">
                <h1 class="pt-[15px] pb-[20px] font-medium text-lg">MasterCard</h1>
                <p>Available</p>
                <h1 class="pb-[20px] text-3xl font-bold">₦350,000.00
                    <button>
                        <i class="fa-solid fa-eye-slash"></i>
                    </button>
                </h1>
                <p>Holder</p>
                <h1 class="text-lg font-medium">Mirabel</h1>
            </div>
        </div>

        <div class="mt-[6.5rem] pt-[8rem] bg-white sm:hidden">
            <!-- Exchange Transfer Loan -->
            <div class="flex justify-around pt-[20px] w-[22rem] mx-auto rounded-2xl dark:shadow-2xl dark:shadow-indigo-900 bg-white shadow-lg shadow-indigo-900">
                <div>
                    <a href="/Send"><i class="fa-solid fa-money-bill-transfer text-[30px] rounded-full text-white p-[20px] bg-indigo-800"></i></a>
                    <h1 class="text-center text-black">Send</h1>
                </div>
                <div>
                    <a href="/Exchange"><i class="fa-solid fa-coins text-[30px] rounded-full p-[20px] text-white bg-indigo-800"></i></a>
                    <h1 class="text-center text-black">Exchange</h1>
                </div>
                <div>
                    <a href="/Loan"><i class="fa-solid fa-hand-holding-dollar text-[30px] text-white rounded-full p-[20px] bg-indigo-800"></i></a>
                    <h1 class="text-center text-black">Loan</h1>
                </div>
            </div>

            <!-- Transactions -->
        <div class="bg-white rounded-2xl dark:shadow-indigo-900 shadow-2xl shadow-indigo-900 dark:shadow-2xl w-[22rem] my-[25px] mx-auto p-[30px] sm:hidden">
            <div class="flex justify-between">
                <h1>Transactions</h1>
                <a href="/History">See all</a>
            </div>
            <div>
                <img src="../assets/images/doubt_work_from_home.jpg" alt="">
            </div>
        </div>


        <footer>
            <div class="bg-white fixed bottom-0 left-0 right-0 sm:hidden">
                <div class="flex justify-around">
                    <div class="text-center pt-[10px]">
                        <router-link to="/Home">
                        <a href=""><i class="fa-solid fa-house text-[20px]"></i></a>
                        </router-link>
                        <h1>Home</h1>
                    </div>
                    <div class="text-center pt-[10px]">
                        <router-link to="/Budget">
                            <a href=""><i class="fa-solid fa-wallet text-[20px]"></i></a>
                            <h1>Budget</h1>
                        </router-link>
                    </div>
                    <div>
                        <router-link to="/Send">
                            <a href=""><i class="fa-solid text-white fa-plus text-[30px] rounded-full bg-blue-500 p-[20px]"></i></a>
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