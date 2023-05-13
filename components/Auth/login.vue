<template>
  <div>
    <div v-if="errors.length > 0" class="alert alert-danger">
      <ul class="mb-0">
        <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
      </ul>
    </div>

    <form @submit.prevent="login" class="flex flex-col space-y-8 w-full">
      <label class="text-3xl font-bold text-sky-500 text-center" for=""
        >ورود</label
      >
      <input
        v-model="cellphone"
        class="bg-gray-100 shadow-md rounded-lg w-full p-2"
        type="text"
        placeholder="لطفا شماره همراه خود را وارد کنید"
        name=""
        id=""
      />
      <button class="bg-sky-500 text-white p-2 rounded-xl">ورود</button>
    </form>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

const emit = defineEmits(["showCheckOtpForm"]);
const cellphone = ref(null);
const toast = useToast();
const errors = ref([]);

async function login() {
  if (cellphone.value == null) {
    toast.error("شماره موبایل الزامی است");
    return;
  }

  const pattern = /^(\+98|0)?9\d{9}$/;
  if (!pattern.test(cellphone.value)) {
    toast.error("فرمت شماره موبایل معتبر نیست");
    return;
  }

  try {
    const data = await $fetch("/api/auth/login", {
      method: "POST",
      body: { cellphone: cellphone.value },
    });

    toast.success("کد ورود برای شما ارسال شد");

    emit("showCheckOtpForm");
  } catch (error) {
    errors.value = Object.values(error.data.message).flat();
  }

  // console.log(cellphone.value)
}
</script>