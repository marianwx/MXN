<template>
  <main class="h-screen flex flex-col justify-center items-center bg-purple-200 dark:bg-indigo-900 relative overflow-hidden">
    <main class="flex w-full flex-col items-center justify-center text-center px-4">
      <!-- <a href="#" target="_blank" rel="noreferrer" class="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"></a> -->
      <h1 class="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 dark:text-white sm:text-7xl">MXN On The
        <span class="text-purple-600 dark:text-purple-400" id="text-change">Go</span></h1>
      <p class="mx-auto mt-12 max-w-xl text-lg text-slate-700 dark:text-slate-100 leading-7">Welcome to my portfolio site, showcasing my projects 
        and experience as a frontend developer, highlighting my skills and creative journey.</p>
      <a class="bg-black rounded-full text-white font-medium px-6 py-3 sm:mt-10 mt-8 transition duration-300 hover:opacity-80"
        href="#about">Let me introduce you →</a>
    </main>
  </main>
</template>

<script>
export default {
  mounted() {
    const consoleLog = document.getElementById('text-change');
    const texts = ['Go', 'Project', 'Top']; // Add your desired texts here
    let index = 1; // Start with the second text

    setInterval(() => {
      consoleLog.textContent = `${texts[index]}`;
      index = (index + 1) % texts.length;
    }, 3000); // Change the duration as needed (currently set to 5 seconds)
  }
}
</script>
