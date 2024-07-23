<template>
  <div class="relative overflow-hidden w-full">
    <div 
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div v-for="(image, index) in images" :key="index" class="w-full flex-shrink-0 flex items-center justify-center">
        <img :src="image.src" :alt="image.alt" class="object-contain" style="max-width: 100%; max-height: 500px;" />
      </div>
    </div>
    
    <!-- Navigation Buttons -->
    <div class="absolute inset-y-0 left-0 flex items-center">
      <button @click="prevSlide" class="bg-baby-powder text-gray-300 px-4 py-2 rounded-r">
        &#10094;
      </button>
    </div>
    <div class="absolute inset-y-0 right-0 flex items-center">
      <button @click="nextSlide" class="bg-baby-powder text-gray-300 px-4 py-2 rounded-l">
        &#10095;
      </button>
    </div>
    
    <!-- Indicators -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <button 
        v-for="(image, index) in images" 
        :key="index"
        :class="{'bg-gray-100': currentSlide === index, 'bg-gray-600': currentSlide !== index }"
        @click="goToSlide(index)"
        class="w-3 h-3 rounded-full"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      images: [
        { src: '/img/votivate/2.jpg', alt: 'Slide 1' },
        { src: '/img/votivate/3.jpg', alt: 'Slide 2' },
        { src: '/img/votivate/4.jpg', alt: 'Slide 3' },
        { src: '/img/votivate/5.jpg', alt: 'Slide 4' },
        { src: '/img/votivate/6.jpg', alt: 'Slide 5' },
        { src: '/img/votivate/7.jpg', alt: 'Slide 6' },
        { src: '/img/votivate/8.jpg', alt: 'Slide 7' },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    }
  },
  mounted() {
    setInterval(this.nextSlide, 5000);
  }
};
</script>
