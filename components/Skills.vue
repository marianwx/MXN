<template>
  <main class="flex justify-center items-center bg-purple-200 py-32">

    <div class="container mx-auto px-4 py-8">
      <div class="flex flex-wrap justify-center">
        <!-- Left Column -->
        <div class="w-full md:w-1/2 px-4 mb-8 md:mb-0 text-center">
          
        </div>
        <!-- Right Column -->
        <div class="w-full px-4 pt-16 pb-16">
          <h2 class="text-4xl font-bold text-center">My Skills</h2>
          <p class="pt-6 pb-8 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit nam maxime quas fugiat tempore blanditiis, eveniet quia accusantium.
          </p>
          <div class="mx-auto w-full max-w-4xl dark:bg-transparent">
            <div v-if="firstSetVisible" class="text-center justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
              <!-- First Set of Images -->
              <a target="_blank" href="">
                <img alt="" class="h-20 mx-auto" src="https://www.svgrepo.com/show/452228/html-5.svg">
              </a>
              <a target="_blank" href="">
                <img alt="" class="h-20 mx-auto" src="https://www.svgrepo.com/show/373535/css.svg">
              </a>
              <a target="_blank" href="">
                <img alt="" class="h-20 mx-auto" src="https://www.svgrepo.com/show/452045/js.svg">
              </a>
              <a target="_blank" href="">
                <img alt="" class="h-20 mx-auto" src="https://www.svgrepo.com/show/374118/tailwind.svg">
              </a>
              <a target="_blank" href="">
                <img alt="" class="h-20 mx-auto" src="https://www.svgrepo.com/show/373940/nuxt.svg">
              </a>
              <a target="_blank" href="">
                <img alt="" class="h-20 mx-auto" src="https://www.svgrepo.com/show/342062/next-js.svg">
              </a>
            </div>
            <div v-else class="text-center justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
              <!-- Second Set of Images -->
              <a target="_blank" href="">
                <img alt="" class="h-20 mx-auto" src="https://www.svgrepo.com/show/303589/office-1-logo.svg">
              </a>
              <a target="_blank" href="">
                <img alt="" class="h-20 mx-auto" src="https://www.svgrepo.com/show/373535/css.svg">
              </a>
              <a target="_blank" href="">
                <img alt="" class="h-20 mx-auto" src="https://www.svgrepo.com/show/452045/js.svg">
              </a>
              <a target="_blank" href="">
                <img alt="" class="h-20 mx-auto" src="https://www.svgrepo.com/show/374118/tailwind.svg">
              </a>
              <a target="_blank" href="">
                <img alt="" class="h-20 mx-auto" src="https://www.svgrepo.com/show/373940/nuxt.svg">
              </a>
              <a target="_blank" href="">
                <img alt="" class="h-20 mx-auto" src="https://www.svgrepo.com/show/342062/next-js.svg">
              </a>
            </div>
          </div>
          <!-- Toggle Button -->
          <div class="flex justify-center mt-8">
            <button @click="toggleImages" class="px-4 py-2 bg-purple-500 text-white font-semibold rounded-md">Toggle Images</button>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  data() {
    return {
      firstSetVisible: true
    };
  },
  methods: {
    toggleImages() {
      this.firstSetVisible = !this.firstSetVisible;
    }
  }
}
</script>
