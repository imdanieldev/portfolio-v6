<template>
    <div class="calc-height flex items-center justify-center flex-col text-center">
        <h2 class="text-4xl">Hi, My name is <span class="text-green-400">Daniel Nasr</span></h2>
        <h3 class="text-2xl mt-2">I Develop Web</h3>
        <button class="mt-6 animation-right">
            <NuxtLink to="/about">
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-white h-8" viewBox="0 0 16 16">
                    <path
                        d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg>
            </NuxtLink>
        </button>
        <div class="h-32 w-full absolute bottom-0 left-0 -z-10 bg-gradient-to-t from-green-500 to-gray-950 opacity-80 blur"></div>
    </div>
</template>
<script setup lang="ts">
useHead({
    title: 'Daniel Nasr - Home',
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