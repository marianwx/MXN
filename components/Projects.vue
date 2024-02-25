<template>
    <div class="flex flex-col justify-center items-center bg-purple-100 scroll-smooth">
        <div class="flex justify-center items-center mt-10">
            <p>Projects</p>
        </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 mx-6">
        <div v-for="(item, index) in items" :key="index" class="relative group">
          <a :href="item.link" rel="noopener noreferrer">
            <img :src="item.image" :alt="item.title" class="w-96 h-48 object-cover rounded-md transition duration-300 transform" />
            <div class="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span class="text-white text-lg font-bold">{{ item.title }}</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { image: 'https://cdn.discordapp.com/attachments/1208411877198266379/1211405252629368933/santasquad.png?ex=65ee140f&is=65db9f0f&hm=d5b696cd24d8321dc3e43b6967bd1699ab6e0f7daa409a16241a5742dba7e29f&', title: "Lettre d'amour", link: '/lettre' },
          { image: 'http://tinyurl.com/5ff3z2y7', title: 'Tout commence par une fleur', link: '/moments' },
          { image: 'http://tinyurl.com/69pwxdaa', title: 'Ça se termine avec nous', link: '/fin' }
        ]
      };
    }
  };
  </script>