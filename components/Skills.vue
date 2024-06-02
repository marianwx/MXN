<template>
  <main class="flex justify-center items-center bg-purple-200">

    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-center">
        <div class="w-full px-4 pt-16 pb-16">
          <h2 class="text-4xl font-bold text-center">My Skills</h2>
          <p class="pt-6 pb-8 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit nam maxime quas fugiat tempore blanditiis, eveniet
            quia accusantium.
          </p>
          <div class="mx-auto w-full max-w-4xl dark:bg-transparent">
            <div v-if="firstSetVisible"
              class="text-center justify-center items-center grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
              <!-- === Skills === -->
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
              <!-- === Tools === -->
              <a target="_blank" href="">
                <img alt="" class="h-20 mx-auto" src="https://www.svgrepo.com/show/303589/office-1-logo.svg">
              </a>
              <a target="_blank" href="">
                <img alt="" class="h-20 mx-auto" src="https://www.svgrepo.com/show/452129/vs-code.svg">
              </a>
              <a target="_blank" href="">
                <img alt="" class="h-20 mx-auto" src="https://www.svgrepo.com/show/452210/git.svg">
              </a>
              <a target="_blank" href="">
                <img alt="" class="h-20 mx-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Github-desktop-logo-symbol.svg">
              </a>
              <a target="_blank" href="">
                <img alt="" class="h-20 mx-auto" src="https://iconape.com/wp-content/png_logo_vector/yarn-logo.png">
              </a>
              <a target="_blank" href="">
                <img alt="" class="h-20 mx-auto" src="https://www.svgrepo.com/show/448222/figma.svg">
              </a>
            </div>
          </div>
          <!-- Toggle Button -->
          <div class="flex justify-center mt-8">
            <input type="radio" id="firstSet" name="setImageSet" value="firstSet" v-model="selectedSet" class="hidden"
              checked @change="toggleImages">
            <label for="firstSet"
              class="cursor-pointer flex items-center justify-center font-semibold w-24 h-10 bg-purple-100 rounded-full rounded-r-none shadow-md  transition duration-300 ease-in-out hover:bg-gray-100">Skills</label>
            <input type="radio" id="secondSet" name="setImageSet" value="secondSet" v-model="selectedSet" class="hidden"
              @change="toggleImages">
            <label for="secondSet"
              class="cursor-pointer flex items-center justify-center font-semibold w-24 h-10 bg-purple-100 rounded-full rounded-l-none shadow-md  transition duration-300 ease-in-out hover:bg-gray-100">Tools</label>
          </div>
          <!-- === Toggle Button === -->

        </div>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  data() {
    return {
      firstSetVisible: true,
      selectedSet: 'firstSet',
    };
  },
  methods: {
    toggleImages() {
      this.firstSetVisible = this.selectedSet === 'firstSet';
    }
  }
}
</script>
