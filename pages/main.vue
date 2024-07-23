<template>
    <div class="mt-32 animate-fade-up">
        <div class="relative overflow-hidden w-full">
      <div 
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <!-- Slide 1 -->
        <div class="flex justify-center w-full flex-shrink-0 px-2">
          <div class="w-1/2 p-2 space-y-6">
            <div class="flex">
                <p class="tracking-wide text-6xl font-figtree font-bold">{{ greeting }}</p>
                <div @click="changeGreeting" class="animate-jump animate-infinite animate-duration-[3000ms] flex">
                    <Icon name="game-icons:click" style="width: 25px; height: 25px;" class="text-gray-400" />
                    <p class="font-xs font-figtree text-gray-400 hover:cursor-pointer">Click to translate!</p>
                </div>
            </div>
            <p class="text-2xl">My name is <span class="font-bold">Joseph Mel Resty Denopol.</span></p>
            <p class="text-2xl">An Aspiring Web and Mobile Developer at your service!</p>
          </div>
          <div class="p-2">
            <NuxtImg src="/img/seph3.png" class="w-auto object-contain" style="height: 400px;" width="400px"/>
          </div>
        </div>
        
        <!-- Slide 2 -->
        <div class="flex justify-center w-full flex-shrink-0 px-2"> 
          <div class="w-1/2 p-2 space-y-6"> 
            <p class="tracking-wide text-6xl font-figtree font-bold">About Me</p>
            <p class="text-xl">Born and Raised from the peaceful and beautiful City of Davao, Philippines.</p>
            <p class="text-xl">I am a Web Developer specializing in full-stack development.</p>
            <p class="text-xl">I am also a Mobile Developer that mainly utilize Flutter</p>
          </div>
          <div class=" p-2">
            <NuxtImg src="/img/davao.jpg" class="w-auto" style="height: 400px; width: 650px;"/>
          </div>
        </div>
    
        <!-- Slide 3 -->
        <div class="flex justify-center w-full flex-shrink-0 px-2">
          <div class="w-1/2 p-2 space-y-6">
            <p class="tracking-wide text-6xl font-figtree font-bold">Technical Background</p>
            <p class="text-xl mb-0">For Web Development, I utilize Laravel as my choice of Back-end and Vue.js or Nuxt.js (A Vue.js Framework) as my Front-end.</p>
            <p class="text-xl mb-0">In Mobile Development, I use Flutter framework and Firebase as its Back-end.</p>
          </div>
          <div class="p-2">
            <img src="/img/logos.png" alt="Slide 3 Image" class="w-full h-auto rounded-lg">
          </div>
        </div>
      </div>
  
      <!-- Navigation Buttons -->
      <div class="absolute top-1/2 w-full flex justify-between transform -translate-y-1/2 px-4">
        <button @click="prevSlide" class="bg-white rounded-full p-2 shadow-lg hover:bg-gray-200">
          &#10094;
        </button>
        <button @click="nextSlide" class="bg-white rounded-full p-2 shadow-lg hover:bg-gray-200">
          &#10095;
        </button>
      </div>
  
      <!-- Indicators -->
      <div class="absolute bottom-4 w-full flex justify-center space-x-2">
        <button 
          v-for="(item, index) in slides" 
          :key="index"
          :class="{'bg-rich-black': currentSlide === index, 'bg-gray-300': currentSlide !== index }"
          class="w-3 h-3 rounded-full"
        ></button>
      </div>
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