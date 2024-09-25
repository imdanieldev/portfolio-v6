<template>
	<div class="calc-height flex items-center justify-center flex-col text-center">
		<div class="px-2 py-6 bg-white/5 rounded-xl border-2 border-solid border-green-400 mb-3">
			<input type="text" class="min-w-10 py-1 px-1 bg-green-400/5 rounded-lg outline-none text-base block mb-4"
				id="name" placeholder="Type your name..." autocomplete="off">
			<input type="number"
				class="min-w-10 py-1 px-1 bg-green-400/5 rounded-lg outline-none text-base block mt-4 mb-4" id="phone"
				placeholder="Type your phone number..." autocomplete="off">
			<textarea class="min-w-10 py-1 px-1 bg-green-400/5 rounded-lg outline-none text-base block mt-4 mb-4 min-h-24"
				placeholder="Type whatever..." id="text"></textarea>
			<button class="w-full py-1 px-1 bg-green-400/5 rounded-full text-base text-green-400 flex justify-center items-center" @click="send()">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-green-400 mr-2" viewBox="0 0 16 16">
					<path
						d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
				</svg>
				Send
			</button>
		</div>
		<div
			class="h-32 w-full absolute bottom-0 left-0 -z-10 bg-gradient-to-t from-green-500 to-gray-950 opacity-80 blur">
		</div>
	</div>
</template>
<script setup lang="js">
useHead({
	title: 'Daniel Nasr - Contact Me',
});
function send(){
	const name = document.querySelector("#name")?.value;
	const phone = document.querySelector("#phone")?.value;
	const text = document.querySelector("#text")?.value;
	window.location.href = "mailto:danialnasronline@gmail.com?subject=contact+from+site&body=Name: " + name + "\nPhone Number: " + phone + "\nText: " + text;
}
</script>
<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

input[type=number] {
	-moz-appearance: textfield;
}
</style>
