<script setup>

import DefaultLayout from '@/layouts/DefaultLayout.vue'
import LandingPage from '@/components/website/LandingPage.vue';
</script>

<template>
    <DefaultLayout>
        <div
    id="page-container"
    class="mx-auto flex w-full min-w-80 flex-col bg-white dark:bg-black text-white"
  >
    <!-- Page Content -->
    <main id="page-content" class="flex max-w-full flex-auto flex-col">
      <div
        class="relative mx-auto flex  w-full max-w-10xl items-center justify-center overflow-hidden p-4 lg:p-8"
      >
        <!-- Sign In Section -->
        <section class="w-full max-w-md  ">
          <!-- Header -->
          <header class="mb-4 text-center">
            <h1 class="mb-2 inline-flex items-center gap-2 text-2xl font-bold">
              <img src="/logo_kopbun_kotak.svg" alt="Logo" class="w-10 h-10" />
              
            </h1>
            <h2
              class="py-4 text-sm font-medium text-merahsawit dark:text-yellow-400"
            >
              Silahkan login untuk masuk aplikasi!
            </h2>
          </header>
          <!-- END Header -->

          <!-- Sign In Form -->
          <div
            class="flex flex-col overflow-hidden rounded-lg bg-hijausawit  shadow-xs dark:bg-gray-800 dark:text-gray-100"
          >
            <div class="grow p-5 md:px-8 md:py-4">
              <form @submit.prevent class="space-y-6">
                <div class="space-y-1">
                  <label for="email" class="inline-block text-sm font-medium"
                    >Email</label
                  >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    class="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-emerald-500 focus:ring-3 focus:ring-emerald-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-emerald-500"
                  />
                </div>
                <div class="space-y-1">
                  <label for="password" class="inline-block text-sm font-medium"
                    >Password</label
                  >
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    class="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-emerald-500 focus:ring-3 focus:ring-emerald-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-emerald-500"
                  />
                </div>
                <div>
                  <div class="mb-5 flex items-center justify-between gap-2">
                    <label class="flex items-center">
                      <input
                        type="checkbox"
                        id="remember_me"
                        name="remember_me"
                        class="size-4 rounded-sm border border-gray-200 text-emerald-500 focus:border-emerald-500 focus:ring-3 focus:ring-emerald-500/50 dark:border-gray-600 dark:bg-gray-800 dark:ring-offset-gray-900 dark:checked:border-transparent dark:checked:bg-emerald-500 dark:focus:border-emerald-500"
                      />
                      <span class="ml-2 text-sm">Remember me</span>
                    </label>
                    <a
                      href="#"
                      class="inline-block text-sm font-medium text-yellow-200 hover:text-emerald-400 dark:text-emerald-400 dark:hover:text-emerald-300"
                      >Forgot Password?</a
                    >
                  </div>
                  <button
                    type="submit"
                    class="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-700 bg-emerald-700 px-6 py-3 leading-6 font-semibold text-white hover:border-emerald-600 hover:bg-emerald-600 hover:text-white focus:ring-3 focus:ring-emerald-400/50 active:border-emerald-700 active:bg-emerald-700 dark:focus:ring-emerald-400/90"
                  >
                    <svg
                      class="hi-mini hi-arrow-uturn-right inline-block size-5 opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.207 2.232a.75.75 0 00.025 1.06l4.146 3.958H6.375a5.375 5.375 0 000 10.75H9.25a.75.75 0 000-1.5H6.375a3.875 3.875 0 010-7.75h10.003l-4.146 3.957a.75.75 0 001.036 1.085l5.5-5.25a.75.75 0 000-1.085l-5.5-5.25a.75.75 0 00-1.06.025z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>Sign In</span>
                  </button>              
                </div>
              </form>
            </div>
            <div
              class="grow bg-merahsawit p-5 text-center text-sm md:px-16 dark:bg-gray-700/50"
            >
              Dont have an account yet?
              <a
                href="#"
                class="font-medium text-emerald-600 hover:text-emerald-400 dark:text-emerald-400 dark:hover:text-emerald-300"
                >Sign up</a
              >
            </div>
          </div>
          <!-- END Sign In Form -->

          
        </section>
        <!-- END Sign In Section -->
      </div>
    </main>
    <!-- END Page Content -->
  </div>
    </DefaultLayout>
    
</template>

<style scoped>

</style>
