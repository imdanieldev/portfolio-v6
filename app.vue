<template>
	<div class="min-h-svh">
		<nav
			class="h-16 bg-gray-950/60 backdrop-blur-lg flex justify-between items-center px-4 sticky left-0 top-0 z-50">
			<h1 class="text-2xl">Daniel Web Dev</h1>
			<ul id="menu"
				class="overflow-hidden flex fixed top-16 bg-gray-950 justify-center z-20 left-0 w-full md:w-auto h-0 md:h-auto md:static gap-2 items-center text-gray-400 transition-all">
				<li class="cursor-pointer hover:text-green-400 transition-colors">
					<NuxtLink class="p-2" to="/">Home</NuxtLink>
				</li>
				<li class="cursor-pointer hover:text-green-400 transition-colors">
					<NuxtLink class="p-2" to="/about">About</NuxtLink>
				</li>
				<li class="cursor-pointer hover:text-green-400 transition-colors">
					<NuxtLink class="p-2" to="/contact">Contact</NuxtLink>
				</li>
			</ul>
			<button class="block md:hidden" @click="menush()">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-white" viewBox="0 0 16 16">
					<path fill-rule="evenodd"
						d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
				</svg>
			</button>
		</nav>
		<div class="h-[2px] w-full block bg-gradient-to-r from-gray-950 via-green-600 to-gray-950 mb-3"></div>
		<NuxtPage />
	</div>
</template>
<script setup lang="js">
let menu = false;
useHead({
	meta: [
		{ name: 'description', content: 'Daniel Portfolio.' }
	],
	bodyAttrs: {
		class: "bg-gray-950 text-white"
	}
});
useSeoMeta({
	title: 'Daniel Web Dev',
	ogTitle: 'Daniel Web Dev',
	description: 'This is my site, let me tell you all about it.',
	ogDescription: 'This is my site, let me tell you all about it.',
});
function show() {
	document.querySelector("#menu").classList.add("h-16");
	document.querySelector("#menu").classList.remove("h-0");
}
function hide() {
	document.querySelector("#menu").classList.add("h-0");
	document.querySelector("#menu").classList.remove("h-16");
}
function menush(){
	if(menu == false){
		show();
		menu = true;
	}else{
		hide();
		menu = false;
	}
}
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

.active {
	color: rgb(74, 222, 128) !important;
}

.blur {
	filter: blur(10rem);
}

.calc-height {
	min-height: calc(100svh - 4.75rem - 2px);
}
</style>
