<template>
  <ClientOnly>
    <div
      v-if="!showResendOtp"
      class="bg-gray-700 text-white p-2 rounded-xl text-center"
      style="direction: ltr"
    >
      <vue-countdown
        :time="120 * 1000"
        v-slot="{ minutes, seconds }"
        @end="onCountdownEnd"
        :transform="transformSlotProps"
      >
        {{ minutes }} : {{ seconds }}
      </vue-countdown>
    </div>

    <button
      @click="resend"
      v-else
      class="bg-gray-700 text-white p-2 rounded-xl text-center"
    >
      ارسال مجدد
    </button>
  </ClientOnly>
</template>


<script setup>
import VueCountdown from "@chenfengyuan/vue-countdown";
import { useToast } from "vue-toastification";

const emit = defineEmits(['resendOtpErrors']);

const showResendOtp = ref(false);
const toast = useToast();
const loading = ref(false);

function onCountdownEnd() {
  showResendOtp.value = true;
}

function transformSlotProps(props) {
  const formattedProps = {};

  Object.entries(props).forEach(([key, value]) => {
    formattedProps[key] = value < 10 ? `0${value}` : String(value);
  });

  return formattedProps;
}

async function resend() {
  try {
    loading.value = true;

    await $fetch("/api/auth/resendOtp", {
      method: "POST",
    });

    toast.success("کد ورود دوباره برای شما ارسال شد");
    showResendOtp.value = false;
  } catch (error) {
    emit("resendOtpErrors", Object.values(error.data.data.message).flat());
  } finally {
    loading.value = false;
  }
}
</script>

