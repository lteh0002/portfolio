<script>
	import { themeChange } from 'theme-change';
	import { onMount } from 'svelte';
  import {scrollToSection} from './page.js'
	let darkMode;

  function scrollToAbout() {
    scrollToSection('aboutme')
  }

  function scrollToProject() {
    scrollToSection('projects')
  }

	onMount(async () => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			localStorage.setItem('theme', 'dark');
			darkMode = true;
		} else if (
			localStorage.theme === 'light' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)
		) {
			localStorage.setItem('theme', 'light');
			darkMode = false;
		}
		themeChange(false);
	});
</script>

<div class="navbar bg-base-100 sticky top-0 z-[9999]">
	<div class="flex-1">
		<!-- svelte-ignore a11y-missing-attribute -->
		<a class="btn btn-ghost normal-case text-xl">Teh Lin Hui</a>
	</div>

	<div class="dropdown dropdown-end sm:hidden">
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label tabindex="0" class="btn btn-ghost m-1"
			><svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"
				><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg
			></label
		>
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<li on:click={scrollToAbout}><a>About</a></li>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<li on:click={scrollToProject}><a>Projects</a></li>
			<!-- svelte-ignore a11y-missing-attribute -->
			<li><a>Contact</a></li>
		</ul>
	</div>

	<div class="hidden sm:block sm:flex-none">
		<ul class="menu menu-horizontal px-1">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<li on:click={scrollToAbout}><a>About</a></li>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-missing-attribute -->
			<li on:click={scrollToProject}><a>Projects</a></li>
			<!-- svelte-ignore a11y-missing-attribute -->
			<li><a>Contact</a></li>
		</ul>
	</div>
</div>
