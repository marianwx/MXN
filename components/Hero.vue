<template>
  <main class="h-screen flex flex-col justify-center items-center bg-purple-200 relative overflow-hidden">
    <main class="flex w-full flex-col items-center justify-center text-center px-4">
      <!-- <a href="#" target="_blank" rel="noreferrer" class="border rounded-2xl py-1 px-4 text-slate-500 text-sm mb-5 hover:scale-105 transition duration-300 ease-in-out"></a> -->
      <h1 class="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">MXN On The
        <span class="text-purple-600" id="text-change">Go</span></h1>
      <p class="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Temporibus fugiat molestiae voluptatibus adipisci velit nesciunt omnis, quibusdam alias illum
        quo aspernatur neque cum, sed ipsa? Soluta voluptatibus pariatur, at esse vero cumque recusandae.</p>
      <a class="bg-black rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 transition duration-300 hover:opacity-80"
        href="#">Explore →</a>
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
