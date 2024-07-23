<template>
  <div class="xl:mt-48 md:mt-24 lg:mt-12 animate-fade-up pb-16">
    <!-- Carousel Container -->
    <div class="relative overflow-hidden w-full mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16">
      <div 
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <!-- Slide 1 -->
        <div class="flex flex-col md:flex-row justify-center w-full flex-shrink-0 px-2 space-y-4 md:space-y-6">
          <div class="w-full md:w-1/2 p-2 space-y-4">
            <div class="flex flex-col md:flex-row items-start md:items-center">
              <p class="tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-figtree font-bold">{{ greeting }}</p>
              <div @click="changeGreeting" class="animate-jump animate-infinite animate-duration-[3000ms] flex mt-2">
                <Icon name="game-icons:click" style="width: 20px; height: 20px;" class="text-gray-400" />
                <p class="text-sm sm:text-base font-figtree text-gray-400 hover:cursor-pointer ml-2">Click to translate!</p>
              </div>
            </div>
            <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">My name is <span class="font-bold">Joseph Mel Resty Denopol.</span></p>
            <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">An Aspiring Web and Mobile Developer at your service!</p>
          </div>
          <div class="w-full md:w-1/2 p-2 flex items-center justify-center">
            <NuxtImg src="/img/seph3.png" class="w-full h-auto object-contain" style="max-height: 300px; max-width: 100%;" />
          </div>
        </div>
        
        <!-- Slide 2 -->
        <div class="flex flex-col md:flex-row justify-center w-full flex-shrink-0 px-2 space-y-4 md:space-y-6"> 
          <div class="w-full md:w-1/2 p-2 space-y-4"> 
            <p class="tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-figtree font-bold">About Me</p>
            <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">Born and Raised from the peaceful and beautiful City of Davao, Philippines.</p>
            <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">I am a Web Developer specializing in full-stack development.</p>
            <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">I am also a Mobile Developer that mainly utilizes Flutter.</p>
          </div>
          <div class="w-full md:w-1/2 p-2 flex items-center justify-center">
            <NuxtImg src="/img/davao.jpg" class="w-full h-auto object-cover" style="max-height: 300px; max-width: 100%;" />
          </div>
        </div>
    
        <!-- Slide 3 -->
        <div class="flex flex-col md:flex-row justify-center w-full flex-shrink-0 px-2 space-y-4 md:space-y-6">
          <div class="w-full md:w-1/2 p-2 space-y-4">
            <p class="tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-figtree font-bold">Technical Background</p>
            <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl mb-0">For Web Development, I utilize Laravel as my choice of Back-end and Vue.js or Nuxt.js (A Vue.js Framework) as my Front-end.</p>
            <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl mb-0">In Mobile Development, I use Flutter framework and Firebase as its Back-end.</p>
          </div>
          <div class="w-full md:w-1/2 p-2 flex items-center justify-center">
            <img src="/img/logos.png" alt="Technical Background" class="w-full h-auto object-contain" style="max-height: 300px; max-width: 100%;" />
          </div>
        </div>
      </div>
  
      <!-- Indicators -->
      <div class="absolute bottom-4 w-full flex justify-center space-x-2">
        <button 
          v-for="(item, index) in slides" 
          :key="index"
          :class="{'bg-rich-black': currentSlide === index, 'bg-gray-300': currentSlide !== index }"
          class="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-3 lg:h-3 rounded-full"
        ></button>
      </div>
    </div>

    <!-- Navigation Buttons Outside Carousel -->
    <div class="flex justify-between px-4 sm:px-6 md:px-8 lg:px-12 mt-8">
      <button @click="prevSlide" class="bg-white rounded-full p-3 shadow-lg hover:bg-gray-200">
        &#10094;
      </button>
      <button @click="nextSlide" class="bg-white rounded-full p-3 shadow-lg hover:bg-gray-200">
        &#10095;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      slides: [0, 1, 2],
      greeting: 'Maayong Adlaw!'
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    },
    changeGreeting() {
      this.greeting = this.greeting === 'Maayong Adlaw!' ? 'Good Day!' : 'Maayong Adlaw!';
    },
  },
  mounted() {
    setInterval(this.nextSlide, 10000);
  }
};
</script>
