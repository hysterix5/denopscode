<template>
    <div v-if="isLoading" class="fixed inset-0 bg-baby-powder flex items-center justify-center z-50">
      <div class="text-center">
        <img src="/img/loading.png" alt="Loading..." class="h-32 w-auto mx-auto mb-4 spin" />
        <p class="text-rich-black text-xl">Loading...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  
  const isLoading = ref(true);
  const router = useRouter();
  
  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
      router.push('/main');
    }, 5000);
  });
  </script>
  
  <style scoped>

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .spin {
    animation: spin 2s linear infinite;
  }
  </style>
  