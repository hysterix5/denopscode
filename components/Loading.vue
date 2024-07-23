<template>
    <div v-if="isLoading" class="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div class="text-white text-center">
        <svg class="animate-spin h-16 w-16 mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a8 8 0 0116 0M12 4v8m0 0l4-4m-4 4l-4-4" />
        </svg>
        <p class="text-xl">Loading...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  
  const isLoading = ref(true);

  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 3000); 
  });
  </script>
