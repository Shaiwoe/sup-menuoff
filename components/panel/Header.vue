<template>
  <div
    class="w-[12%] flex flex-col rounded-l-2xl bg-gradient-to-tr from-black from-10% via-black via-30% to-sky-900 to-90% h-screen"
  >
    <div class="flex flex-col mt-8 justify-center items-center space-y-4">
      <img class="w-[50%]" src="../../public/img/bg.png" alt="" />
      <div
        class="flex flex-col justify-center items-center text-white space-y-4 p-2"
      >
        <p>کاربر گرامی خوش آمدید</p>
        <p class="text-white">{{ authUser.cellphone }}</p>
      </div>
    </div>

    <div class="flex flex-col text-white space-y-8 px-8 mt-24">
      <NuxtLink
        class="hover:bg-sky-400 transition ease-in-out delay-150 w-[100%] p-2 rounded-lg"
        to="#"
        >صفحه اصلی</NuxtLink
      >
      <NuxtLink
        class="hover:bg-sky-400 transition ease-in-out delay-150 w-[100%] p-2 rounded-lg"
        to="#"
        >آگهی جدید</NuxtLink
      >
      <NuxtLink
        class="hover:bg-sky-400 transition ease-in-out delay-150 w-[100%] p-2 rounded-lg"
        to="#"
        >لیست آگهی ها</NuxtLink
      >
      <NuxtLink
        class="hover:bg-sky-400 transition ease-in-out delay-150 w-[100%] p-2 rounded-lg"
        to="#"
        >تیکت ها</NuxtLink
      >
      <NuxtLink
        class="hover:bg-sky-400 transition ease-in-out delay-150 w-[100%] p-2 rounded-lg"
        to="#"
        >پروفایل
      </NuxtLink>
      <a @click="logout"
        class="hover:bg-red-500 transition ease-in-out delay-150 w-[100%] p-2 rounded-lg cursor-pointer"
        >خروج
    </a>
    </div>
  </div>
</template>


<script setup>
import { useToast } from "vue-toastification";

const toast = useToast();
const { authUser } = useAuth();

async function logout() {
    await useFetch('/api/auth/logout', {
        method: 'POST',
    })

    authUser.value = null;
    toast.warning("از سیستم خارج شدید");
    return navigateTo('/')
}

</script>