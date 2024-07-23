<template>
    <div class="font-figtree px-4 md:px-12 lg:px-24 animate-fade-up pb-16">
      <h1 class="my-12 font-bold text-6xl">
        I CAN BE REACHED USING THESE DETAILS:
      </h1>
      <div class="text-2xl space-y-12">
        <div class="flex items-center underline space-x-6">
          <Icon name="logos:google-gmail" style="width: 50px; height: 50px;" />
          <p class="text-lg">denopolred@gmail.com</p>
        </div>
        <NuxtLink
          to="https://www.linkedin.com/in/joseph-denopol-ba507a308/"
          class="flex items-center underline space-x-6"
        >
          <Icon name="devicon:linkedin" style="width: 50px; height: 50px;" />
          <p class="text-lg">Joseph Denopol</p>
        </NuxtLink>
        <div class="flex justify-start">
          <a
            href="/resources/joseph-denopol-cv.pdf"
            target="_blank"
            class="flex"
          >
            <button
              type="button"
              class="text-white flex items-center bg-blue-700 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-600 duration-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              View My CV
              <Icon name="ic:outline-remove-red-eye" style="width: 25px; height: 25px;" />
            </button>
          </a>
        </div>
      </div>
    </div>
  </template>
  