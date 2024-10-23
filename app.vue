<template>
	<div class="min-h-svh">
		<nav
			class="h-16 bg-gray-950/60 backdrop-blur-lg flex justify-between items-center px-4 sticky left-0 top-0 z-50">
			<NuxtLink to="/">
				<h2 class="text-3xl text-white select-none block md:hidden">DN</h2>
			</NuxtLink>
			<Transition name="menu">
				<ul v-if="menu"
					class="overflow-hidden flex flex-wrap fixed top-16 bg-gray-950 md:bg-transparent justify-around z-20 left-0 w-full md:w-full h-full md:h-auto md:static gap-2 items-center text-gray-400 transition-all">
					<li class="cursor-pointer hover:text-green-400 transition-colors">
						<NuxtLink class="p-2" to="/">Home</NuxtLink>
					</li>
					<li class="cursor-pointer hover:text-green-400 transition-colors">
						<NuxtLink class="p-2" to="/about">About</NuxtLink>
					</li>
					<NuxtLink to="/">
						<h2 class="text-5xl text-white select-none hidden md:block">DN</h2>
					</NuxtLink>
					<li class="cursor-pointer hover:text-green-400 transition-colors">
						<NuxtLink class="p-2" to="/skills">Skills</NuxtLink>
					</li>
					<li class="cursor-pointer hover:text-green-400 transition-colors">
						<NuxtLink class="p-2" to="/roadmap">Roadmap</NuxtLink>
					</li>
				</ul>
			</Transition>
			<button class="block md:hidden" @click="menu = !menu">
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
<script setup>
const menu = ref(false);
onMounted(() => {
	if (window.innerWidth >= 768) {
		menu.value = true;
	} else {
		menu.value = false;
	}
	window.addEventListener("resize", () => {
		if (window.innerWidth >= 768) {
			menu.value = true;
		} else {
			menu.value = false;
		}
	});
});
useHead({
	meta: [
		{ name: 'description', content: 'Daniel Portfolio.' },
		{ name: 'theme-color', content: '#030712' }
	],
	link: [
		{ rel: "icon", type: "image/png", href: "/icon.png" },
	],
	bodyAttrs: {
		class: "bg-gray-950 text-white ubuntu-regular"
	}
});
useSeoMeta({
	title: 'Daniel Web Dev',
	ogTitle: 'Daniel Web Dev',
	description: 'This is my site, let me tell you all about it.',
	ogDescription: 'This is my site, let me tell you all about it.',
});
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap');

.ubuntu-light {
	font-family: "Ubuntu", sans-serif;
	font-weight: 300;
	font-style: normal;
}

.ubuntu-regular {
	font-family: "Ubuntu", sans-serif;
	font-weight: 400;
	font-style: normal;
}

.ubuntu-medium {
	font-family: "Ubuntu", sans-serif;
	font-weight: 500;
	font-style: normal;
}

.ubuntu-bold {
	font-family: "Ubuntu", sans-serif;
	font-weight: 700;
	font-style: normal;
}

.page-enter-active,
.page-leave-active {
	transition: all 0.5s ease-in;
	position: fixed;
	width: 100%;
}

.page-enter-from {
	transform: translateY(120svh) scale(1.8);
	opacity: 0;
}

.page-leave-to {
	transform: translateY(-120svh);
	opacity: 0;
}

.menu-enter-active,
.menu-leave-active {
	transition: 0.2s ease;
}

.menu-enter-from,
.menu-leave-to {
	opacity: 0;
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
