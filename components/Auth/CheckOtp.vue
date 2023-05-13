<template>
  <div>
    <div class="flex flex-col space-y-8 w-full">
      <label class="text-3xl font-bold text-sky-500 text-center" for=""
        >ورود</label
      >
      <input
        v-model="otp"
        class="bg-gray-100 shadow-md rounded-lg w-full p-2"
        type="text"
        placeholder="لطفا کد ورود را وارد کنید"
        name=""
        id=""
      />
      <div v-if="errors.length > 0" class="text-red-600 text-center rounded-xl">
        <ul>
          <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
        </ul>
      </div>

      <div class="flex flex-col gap-4">
        <button @click="checkOtp" class="bg-sky-500 text-white p-2 rounded-xl">تایید</button>
        <AuthResendOtp @resend-otp-errors="(err) => errors = err" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { useToast } from "vue-toastification";

const { authUser } = useAuth();
const otp = ref(null);
const toast = useToast();
const errors = ref([]);

async function checkOtp() {
  if (otp.value == null) {
    toast.error(" کد تایید الزامی است");
    return;
  }

  const pattern = /^[0-9]{6}$/;
  if (!pattern.test(otp.value)) {
    toast.error("فرمت کد ورود معتبر نیست");
    return;
  }

  try {
    const user = await $fetch("/api/auth/checkOtp", {
      method: "POST",
      body: { otp: otp.value },
    });

    authUser.value = user;
    toast.success("باموفقیت وارد شدید");
    return navigateTo("/auth");
  } catch (error) {
    errors.value = Object.values(error.data.data.message).flat();
  }

  // console.log(cellphone.value)
}
</script>