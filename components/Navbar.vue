<template>
  <div class="p-8 w-full">
    <div class="font-teko flex flex-wrap items-center justify-between mx-auto">
      <div class="text-5xl">
        <span class="font-bold">JOSEPH </span><span class="font-light">M.R DENOPOL</span>
      </div>
      <div class="flex space-x-8 text-3xl">
        <NuxtLink 
          to="/main" 
          class="hover:underline underline-offset-4"
        >
          HOME
        </NuxtLink>
        <NuxtLink 
          to="/projects" 
          class="hover:underline underline-offset-4"
        >
          PROJECTS
        </NuxtLink>
        <NuxtLink 
          to="/contact" 
          class="hover:underline underline-offset-4"
        >
          CONTACT
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
