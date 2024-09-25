<template>
	<div>
		<nav class="h-16 bg-gray-950/60 backdrop-blur-lg flex justify-between items-center px-4 sticky left-0 top-0 z-50">
			<h1 class="text-2xl">Daniel Nasr</h1>
			<ul class="flex gap-2 items-center text-gray-400">
				<li class="cursor-pointer hover:text-green-400 transition-colors"><NuxtLink class="p-2" to="/">Home</NuxtLink></li>
				<li class="cursor-pointer hover:text-green-400 transition-colors"><NuxtLink class="p-2" to="/about">About</NuxtLink></li>
				<li class="cursor-pointer hover:text-green-400 transition-colors"><NuxtLink class="p-2" to="/contact">Contact</NuxtLink></li>
			</ul>
		</nav>
		<div class="h-[2px] w-full block bg-gradient-to-r from-gray-950 via-green-600 to-gray-950 mb-3"></div>
		<NuxtPage />
	</div>
</template>
<script setup lang="ts">
useHead({
	meta: [
		{ name: 'description', content: 'Daniel Portfolio.' }
	],
	bodyAttrs:{
		class: "bg-gray-950 text-white"
	}
})
useSeoMeta({
  title: 'Daniel Nasr Web Dev',
  ogTitle: 'Daniel Nasr Web Dev',
  description: 'This is my site, let me tell you all about it.',
  ogDescription: 'This is my site, let me tell you all about it.',
})
</script>
<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.4s ease-in-out
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
	background-color: rgba(34, 197, 94, 0.8);
    filter: blur(10rem);

}
.active{
	color: rgb(74 ,222 ,128) !important;
}

.blur{
    filter: blur(10rem);
}
.calc-height {
    min-height: calc(100svh - 4.75rem - 2px);
}
</style>