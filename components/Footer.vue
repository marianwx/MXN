<template>
    <div class="mx-auto bg-purple-200 dark:bg-indigo-900 w-full max-w-container px-4 sm:px-6 lg:px-8" @click="hideTooltip">
      <div class="border-t border-slate-900/5 dark:border-slate-100/5 py-10">
        <div class="flex justify-center">
          <img class="w-32" src="/mxn-mini.png" alt="">
        </div>
        <p class="mt-5 text-center text-sm leading-6 text-slate-500 dark:text-slate-300">© 2024 MXN Lab. All rights reserved.</p>
        <div class="mt-8 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          <a href="mailto:dev@mxn.ro">
            <img src="https://www.svgrepo.com/show/349378/gmail.svg" class="w-8" alt="">
          </a>
          <div class="h-4 w-px bg-slate-500/20 dark:bg-slate-100/20"></div> 
          <a href="https://github.com/marianwx" target="_blank" rel="noopener noreferrer">
            <img src="https://www.svgrepo.com/show/439171/github.svg" class="w-8" alt="">
          </a>
          <div class="h-4 w-px bg-slate-500/20 dark:bg-slate-100/20"></div>
          <button @click.stop="toggleTooltip" class="relative">
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-square-color-icon.png" class="w-8" alt="">
            <div v-if="showTooltip" class="absolute bottom-full mb-2 w-48 p-2 bg-white border border-slate-300 rounded shadow-lg">
              <p class="text-xs text-center text-slate-700"><a target=”_blank” href="https://discord.gg/z8V2PnQSnC">discord.gg/z8V2PnQSnC</a></p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showTooltip: false,
      };
    },
    methods: {
      toggleTooltip() {
        this.showTooltip = !this.showTooltip;
      },
      hideTooltip(event) {
        if (this.showTooltip) {
          this.showTooltip = false;
        }
      },
    },
  };
  </script>
  