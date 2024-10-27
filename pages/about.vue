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
						<a href="#" @click="copytoclipboard('danialnasronline@gmail.com')"
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
		<Transition name="alert">
		<div v-if="alertshow" class="z-50 fixed bottom-5 text-base right-1/2 translate-x-1/2 bg-black/20 backdrop-blur-lg px-4 py-2 border-2 border-solid border-purple-600 text-center">
			{{ alerttext }}
		</div>
		</Transition>
	</div>
</template>
<script setup>
const d = new Date();
const year = d.getFullYear();
const Age = ref(year - 2008);
const alertshow = ref(false);
const alerttext = ref("nothing");
function myalert(yourtext){
	alertshow.value = true;
	alerttext.value = yourtext
	setTimeout(()=>{
		alertshow.value = false;
	},4000);
}
function copytoclipboard(yourtext){
	navigator.clipboard.writeText(yourtext);
	myalert("The email was saved to the clipboard.")
}
</script>
<style setup>
.alert-enter-active,
.alert-leave-active {
	transition: 0.2s ease;
}

.alert-enter-from,
.alert-leave-to {
	bottom: calc(-1.2rem - 1rem - 2px - 2.5rem);
}
</style>