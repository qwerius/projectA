<template>
    <section   class=" bg-hijausawit dark:bg-black text-white h-[calc(100vh-64px)] flex justify-center items-center">
        <div   class="  py-32 lg:flex dark:bg-[radial-gradient(at_50%_30%,_hsla(157,_50%,_30%,_1)_0%,_hsla(45,_90%,_0%,_0)_60%)] w-full h-[calc(100vh-64px)]  ">
            <div data-aos="zoom-in"  class="mx-auto  text-center flex flex-col justify-center" >
                <h1 
                    class="animate__zoomIn animate__delay-2s bg-gradient-to-r  from-yellow-300 via-white to-orangesawit dark:from-orangesawit dark:to-blue-200 bg-clip-text 
                    text-4xl font-extrabold text-transparent md:text-5xl ">
                    Koperasi Perkebunan Sawit

                    <span class="sm:block lg:text-5xl "> KAYONG RAYA </span>
                </h1>

                <p class="animate__zoomIn animate__delay-5s mx-auto mt-4 max-w-xl text-5xlmd:text-xl">
                    Koperasi Perkebunan Bersama Masyarakat Kecamatan Tayap
                </p>

                <div class="mx-auto mt-12 flex  justify-center gap-4 px-4 h-12 sm:h-10 w-1/3 items-center">
                    <router-link to="login">
                    <div class="button" >
                        Get Started
                    </div>
                    </router-link>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>

</script>