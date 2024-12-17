<template>
    <div class="flex flex-col  ">
        <!-- Header -->
        <Header class="z-50"></Header>
        

        <!-- Main content area -->
        <main class=" bg-primary bg-white min-h-screen">

            <slot></slot> <!-- Konten halaman akan muncul di sini -->
        </main>

        
    </div>
</template>

<script setup>
import Header from '@/components/website/Header.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  AOS.init({
    duration: 400, // Durasi animasi (ms)
    once: false, 
   
  });
 
});


</script>

<style scoped></style>