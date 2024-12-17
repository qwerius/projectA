<template>
    <nav class=" h-16 flex bg-primary   w-full border-1 border-b dark:border-gray-700 bg-white sticky top-0 ">
      <div class=" px-4 py-3 mx-auto w-full">
        <div class="lg:flex lg:items-center lg:justify-between">
          <!-- Logo -->
          <div class="flex items-center justify-between">
            <a href="#">
              <img class="w-auto h-6 sm:h-7" src="/vue.svg" alt="Logo" />
            </a>
  
            <!-- Mobile menu button -->
            <div class="flex lg:hidden">
              <label class="flex lg:hidden switch pr-5  items-center">
                <input @click="toggleTheme()" type="checkbox">
                <span class="slider"></span>
              </label>
              <button @click="toggleMenu" type="button" class="text-primary py-2 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
                </svg>  
                
                <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>              
              </button>
            </div>
          </div>
  
          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <div class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center">
            <div class="hidden lg:flex flex-col  -mx-6 lg:flex-row lg:items-center lg:mx-8 gap-10">
              <router-link to="/" href="#" class="px-3 py-2 text-primary hover:text-hijausawit ">Home</router-link>
              <a href="#" class="px-3 py-2 text-primary hover:text-hijausawit">Daftar Anggota</a>
              <a href="#" class="px-3 py-2 text-primary hover:text-hijausawit">Peta</a>
              <a href="#" class="px-3 py-2 text-primary hover:text-hijausawit">Berita</a>              
            </div>
            
            
            
  
            <div class="hidden lg:flex items-center mt-4 lg:mt-0">
              <button class="hidden mx-4 text-primary  transition-colors duration-300 transform lg:block  hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications">
                <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              

  
              <button type="button" class="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                <div class="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                  <img src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80" class="object-cover w-full h-full" alt="avatar" />
                </div>
  
                <h3 class="mx-2 text-gray-700 dark:text-gray-200 md:hidden">Khatab wedaa</h3>
              </button>
              <label class="switch pl-5 flex items-center">
                <input @click="toggleTheme()" type="checkbox">
                <span class="slider"></span>
              </label>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isOpen = ref(false);  // State untuk toggle menu
  
  const toggleMenu = () => {
    isOpen.value = !isOpen.value;  // Mengubah state saat tombol ditekan
  };

  const isDark = ref(false);

  const toggleTheme = () => {
    isDark.value = !isDark.value;
    document.documentElement.classList.toggle('dark', isDark.value);
};
  </script>
  
  <style scoped>
  /* Tambahkan styling tambahan jika perlu */
  </style>
  