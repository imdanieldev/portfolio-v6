<template>
	<div class="calc-height w-full">
		<span
			class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-4 border-purple-400/25 border-solid w-60 h-60 rounded-full bg-purple-500/25 blur-3xl animate-pulse -z-10"></span>
		<div class="calc-height w-full flex justify-center items-center flex-col">
			<div class="mb-5 text-center text-2xl">
				<h2 class="text-4xl md:text-6xl ubuntu-light">Danial Nasr</h2>
				<p>Age: {{ Age }}</p>
				<p>Location: Iran > Isfahan</p>
			</div>
			<div class="mt-5">
				<ul class="text-center flex gap-3 flex-wrap justify-center">
					<li>
						<a href="//imdanieln.t.me" target="_blank"
							class="px-3 py-1 border-2 border-double border-purple-600 uppercase transition-colors hover:bg-purple-600">
							Telegram
						</a>
					</li>
					<li>
						<a href="mailto:danialnasronline@gmail.com" target="_blank"
							class="px-3 py-1 border-2 border-double border-purple-600 uppercase transition-colors hover:bg-purple-600">
							Email
						</a>
					</li>
					<li>
						<a href="//github.com/imdanieldev" target="_blank"
							class="px-3 py-1 border-2 border-double border-purple-600 uppercase transition-colors hover:bg-purple-600">
							Github
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script setup>
const d = new Date();
let year = d.getFullYear();
let Age = ref(year - 2008);
</script>