<template>
  <div class="w-full flex h-screen">
    <div class="w-3/12 bg-gray-100">
      <div class="relative right-[50%] top-[30%]">
        <div class="absolute w-full bg-white rounded-xl shadow-lg py-12 px-6">
            <AuthCheckOtp v-if="showOtpForm" />
            <AuthLogin v-else @show-check-otp-form="() => showOtpForm = true" />    
        </div>
      </div>
    </div>

    <div
            class="w-11/12 rounded-r-3xl bg-gradient-to-tr from-black from-10% via-black via-30% to-sky-900 to-90% flex flex-col justify-center items-center space-y-20 ">
            <img class="w-3/12" src="/img/bg.png" alt="">
            <div class="space-y-10 text-center">
                <p class="text-5xl text-white font-semibold">پنل تامین کننده ها</p>
                <p class="text-xl text-cyan-500">منوآف ارائه دهنده راهکارهای هوشمند تبلیغات و مدیریت رستوران ها و کافه ها</p>
            </div>
    </div>

  </div>
</template>

<script setup>

definePageMeta({
    middleware: 'guest'
})
const showOtpForm = ref(false);

</script>