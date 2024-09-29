<template>
    <div class="calc-height flex items-center justify-center flex-col text-center px-4">
        <h2 class="text-2xl sm:text-4xl">Hi, My name is <span class="text-green-400">Daniel Nasr</span></h2>
        <h3 class="text-xl sm:text-2xl mt-2">I Develop Web</h3>
        <button class="mt-6 animation-right">
            <NuxtLink to="/about">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-green-400 bg-green-400/5 rounded-full h-8 w-8" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />
                </svg>
            </NuxtLink>
        </button>
        <div
            class="h-32 w-full absolute bottom-0 left-0 -z-10 bg-gradient-to-t from-green-500 to-gray-950 opacity-80 blur">
        </div>
    </div>
</template>
<script setup lang="ts">
useHead({
    title: 'Daniel Web Dev',
});
</script>
<style>
.animation-right {
    animation: bounce 1s infinite;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateX(-25%);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }

    50% {
        transform: translateX(0);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
}
</style>
