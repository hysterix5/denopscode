<template>
    <div class="p-8 mx-auto my-12 max-w-screen-xl grid gap-8 lg:grid-cols-2">
      <!-- Text Content -->
      <div class="flex flex-col space-y-8">
        <div class="flex flex-col lg:flex-row items-center space-y-4 lg:space-x-8 lg:space-y-0">
          <NuxtImg src="/img/votivate.png" alt="Votivate" class="h-64 object-contain" />
          <h1 class="font-figtree text-2xl lg:text-4xl">
            <span class="font-bold">VOTIVATE:</span> A Mobile Voting App for Students in Assumption College of Davao
          </h1>
        </div>
        <h1 class="font-figtree text-xl">Developed By:</h1>
        <NuxtImg src="/img/votivate/katribo.png" alt="Katribo" class="h-32 object-contain" />
        <h1 class="font-figtree text-xl">Led by: <span class="font-bold">Joseph M.R Denopol</span></h1>
      </div>
  
      <!-- Carousel -->
      <div class="flex items-center justify-center">
        <Carousel />
      </div>
    </div>
  </template>
  