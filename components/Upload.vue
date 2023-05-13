<template>
  <div class="space-y-4">
    <div v-if="image" class="position-relative">
      <img :src="image" class="w-full max-h-64" alt="primary image" />
    </div>

    <div>
      <input @change="imageFile" :disabled="loading" type="file" name="" id="" />
      <div
        v-if="loading"
        class="spinner-border spinner-border-sm text-primary position-absolute start-50"
        style="top: 32%"
      ></div>
    </div>
  </div>
</template>




<script setup>
const props = defineProps({
  documents: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["documents"]);

const image = ref(props.documents);
const loading = ref(false);

function imageFile(el) {
  loading.value = true;

  const reader = new FileReader();
  reader.readAsDataURL(el.target.files[0]);

  reader.onloadend = () => {
    image.value = reader.result.toString();
    loading.value = false;
  };

  emit("documents", el.target.files[0]);
}
</script>