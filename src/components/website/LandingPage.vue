<template>
    <Hero></Hero>
    <div class="container   bg-card ">
        <Herodua></Herodua>        
        <Feature></Feature>
        <Blog ></Blog>
        
    </div>
    <Footer></Footer>
</template>
<script setup>
import Hero from "@/components/website/Hero.vue"
import Blog from "@/components/website/Blog.vue"
import Footer from "@/components/website/Footer.vue"
import Feature from "@/components/website/Feature.vue"
import Herodua from "@/components/website/Herodua.vue"
</script>