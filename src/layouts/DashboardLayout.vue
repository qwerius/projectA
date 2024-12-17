<template>
    <div class="flex flex-row  dark:gradient_sawit ">
        <Sidebar class="hidden sm:flex"></Sidebar>
        <div class="flex flex-col w-full ">
            <Navbar></Navbar>

            <!-- Main content area -->
            <main class="flex  text-primary ">
               
                <slot></slot> <!-- Konten halaman akan muncul di sini -->
                
            </main>
        </div>


    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'

import { ref, onMounted, onUnmounted } from 'vue';




// Deteksi preferensi tema awal
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
if (mediaQuery.matches) {
    isDark.value = true;
    document.documentElement.classList.add('dark');
}

// Tangani perubahan preferensi tema
const handleThemeChange = (event) => {
    isDark.value = event.matches;
    document.documentElement.classList.toggle('dark', isDark.value);
};

// Pasang dan lepas event listener
onMounted(() => mediaQuery.addEventListener('change', handleThemeChange));
onUnmounted(() => mediaQuery.removeEventListener('change', handleThemeChange));

</script>

<style scoped></style>