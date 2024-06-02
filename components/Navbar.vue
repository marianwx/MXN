<template>
    <header
        class="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-full lg:max-w-screen-lg">
        <div class="px-4">
            <div class="flex items-center justify-between">
                <div class="flex shrink-0">
                    <a aria-current="page" class="flex items-center" href="/">
                        <img class="h-4 w-auto"
                            src="https://cdn.discordapp.com/attachments/1208411877198266379/1208412055883878421/MXN-removebg-preview.png?ex=665d232d&is=665bd1ad&hm=353c383c625511c129c0d37019cae8df71bda0e68855e9e5bc404008b429405d&"
                            alt="">
                    </a>
                </div>
                <div class="md:flex md:items-center md:justify-center md:gap-5">
                    <a aria-current="page"
                        class="inline-block rounded-full px-3 py-1 font-semibold text-gray-900 transition-all duration-200 hover:bg-purple-100 hover:text-gray-900"
                        href="#">Home</a>
                    <a class="inline-block rounded-full px-3 py-1 font-semibold text-gray-900 transition-all duration-200 hover:bg-purple-100 hover:text-gray-900"
                        href="#">About</a>
                    <a class="inline-block rounded-full px-3 py-1 font-semibold text-gray-900 transition-all duration-200 hover:bg-purple-100 hover:text-gray-900"
                        href="#">Skills</a>
                    <a class="inline-block rounded-full px-3 py-1 font-semibold text-gray-900 transition-all duration-200 hover:bg-purple-100 hover:text-gray-900"
                        href="#">Projects</a>
                        <a class="inline-block rounded-full px-3 py-1 font-semibold text-gray-900 transition-all duration-200 hover:bg-purple-100 hover:text-gray-900"
                        href="#contact">Contact</a>
                </div>
                <div class="flex items-center justify-end gap-3 px-5">
                    <button id="darkModeToggle"
                        class="text-gray-900 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-moon">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
</header></template>