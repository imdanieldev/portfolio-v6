<template>
	<div class="calc-height">
		<div class="px-2 calc-height flex gap-10 flex-wrap justify-center">
			<div v-for="skill in skills"
				class="w-fit h-fit flex items-center justify-center rounded-lg px-2 py-2 gap-2 text-xl bg-purple-500/20 text-purple-500">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-purple-500" viewBox="0 0 16 16">
					<path
						d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
				</svg>
				{{skill}}
			</div>
			<div v-for="noskill in noskills"
				class="w-fit h-fit flex items-center justify-center rounded-lg px-2 py-2 gap-2 text-xl bg-white/20 text-white">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-white" viewBox="0 0 16 16">
					<path
						d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
				</svg>
				{{noskill}}
			</div>
		</div>
		<div class="w-full flex justify-center items-center py-5">
			<div
				class="w-fit text-center text-xl py-2 px-2 bg-rose-500/5 text-rose-500 rounded-lg gap-2 flex justify-center items-center">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-rose-500" viewBox="0 0 16 16">
					<path
						d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
				</svg>
				They are not in order.
			</div>
		</div>
	</div>
	
</template>
<script setup>
const skills = ref([
"HTML",
"CSS",
"SASS / SCSS",
"Less",
"JavaScript",
"TailwindCSS",
"DaisyUI",
"Vuetify",
"Git",
"Markdown",
"BASH",
"Linux",
"i3",
"PHP",
"Bootstrap",
"TypeScript",
"Vercel",
"Chart.js",
"Jquery",
"Vite",
"WindiCss",
"MySql",
"Angular",
"Wordpress",
"VueJs",
"NuxtJs",
"Photoshop",
"Vim",
]);
const noskills = ref([
"Htmx",
"MongoDB",
"Stylus",
"PHP MVC",
"Laravel",
"Livewire",
"Dart",
"Flutter",
"Redis",
"Three.js",
"GraphQl",
"Pinia",
"Figma",
"Docker",
"Ui / Ux",
"Firebase",
"Strapi",
"PWA",
"CEH",
"Blockchain",
"Node.js",
"Express",
"Nest.js",
]);
</script>