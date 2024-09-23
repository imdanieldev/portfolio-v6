<template>
	<div>
		<nav class="h-16 bg-gray-400/10 backdrop-blur-2xl text-white sticky top-0 left-0 flex justify-between items-center px-4">
			<h1 class="text-2xl">Daniel Nasr</h1>
			<ul class="flex gap-4 items-center text-gray-400">
				<li class="cursor-pointer hover:text-white transition-colors"><NuxtLink to="/">Home</NuxtLink></li>
				<li class="cursor-pointer hover:text-white transition-colors"><NuxtLink to="/about">About</NuxtLink></li>
				<li class="cursor-pointer hover:text-white transition-colors"><NuxtLink to="/contact">Contact</NuxtLink></li>
			</ul>
		</nav>
		<NuxtPage />
	</div>
</template>
<script setup lang="ts">
useHead({
	meta: [
		{ name: 'description', content: 'Daniel Portfolio.' }
	],
	bodyAttrs:{
		class: "bg-stone-950"
	}
})
</script>
<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(1rem);
}
.active{
	color: white !important;
}
</style>