<script setup lang="ts"></script>

<template>
	<div class="content w-full min-h-screen bg-light-100 flex flex-wrap">
		<div class="header flex justify-between items-center px-10 py-4 border-b-1 w-full h-[10vh]">
			<router-link to="/" class="text-dark-900 font-semibold text-lg inline-flex hover:text-indigo-600">E-shop.</router-link>
			<!-- <nav>
				<router-link class="font-serif text-pink-500" to="/">Home</router-link>
				|
				<router-link class="font-serif" to="/about">About</router-link>
			</nav> -->
			<router-link to="/basket" class="relative cart text-dark-900 p-3 bg-ligh-50 rounded-full hover:cursor-pointer hover:bg-indigo-50 focus:border-indigo-200 border-solid border-1 border-transparent inline-flex">
				<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">
					<g transform="translate(128 128) scale(0.72 0.72)" style="">
						<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1" transform="translate(-175.05 -175.05000000000004) scale(3.89 3.89)">
							<path class="fill-indigo-700" d="M 71.796 23.427 H 61.343 v -10.49 C 61.343 5.804 55.699 0 48.762 0 h -7.523 c -6.937 0 -12.581 5.804 -12.581 12.937 v 10.49 H 18.204 c -1.933 0 -3.5 1.567 -3.5 3.5 v 47.037 C 14.704 82.807 21.897 90 30.74 90 h 28.52 c 8.843 0 16.036 -7.193 16.036 -16.036 V 26.927 C 75.296 24.994 73.729 23.427 71.796 23.427 z M 35.657 12.937 C 35.657 9.664 38.161 7 41.238 7 h 7.523 c 3.077 0 5.581 2.664 5.581 5.937 v 10.49 H 35.657 V 12.937 z M 68.296 73.964 c 0 4.982 -4.054 9.036 -9.036 9.036 H 30.74 c -4.983 0 -9.037 -4.054 -9.037 -9.036 V 30.427 h 6.954 v 6.018 c 0 1.933 1.567 3.5 3.5 3.5 s 3.5 -1.567 3.5 -3.5 v -6.018 h 18.686 v 6.018 c 0 1.933 1.567 3.5 3.5 3.5 s 3.5 -1.567 3.5 -3.5 v -6.018 h 6.953 V 73.964 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill-rule: nonzero; opacity: 1" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
						</g>
					</g>
				</svg>
				<div class="counter bg-red-700 text-light-100 rounded-full p-1 absolute top-0 right-0 font-light text-[10px] min-w-5 h-5 flex justify-center items-center">1</div>
			</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>
