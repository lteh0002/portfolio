<script>
	import TypeWriter from 'svelte-typewriter';
  import Header from './Header.svelte';
  import About from "./About.svelte";

	let jobTitles = ['Full Stack Web Developer', 'Civil Engineer', 'Crypto Enthusiast'];
	let currentIndex = 0;
	let intervalId;

	function updateIndex() {
		currentIndex = (currentIndex + 1) % jobTitles.length;
	}

	$: {
		clearInterval(intervalId);
		intervalId = setInterval(updateIndex, 3000);
	}
</script>

<div class="relative max-w-full px-[10vw] mt-[3vw] mb-[5.8vw]">
  <div>      
    <img class="absolute w-[40.3vw] left-[48.25vw] top-[0.5vw] z-0 rounded-3xl" src="memoji.png" alt="memoji" />
    <h1 class="relative text-[9.53vw] z-[9999] mt-[0.5vw]">Hi!</h1>
    <h1 class="relative text-[5.53vw] z-[9999] mb-[0.5vw]">I'm Lin Hui!</h1>
    <div class="h-10">
      {#each jobTitles as jobTitle, index}
        {#if index === currentIndex}
          <TypeWriter interval={50}><span class="text-[3.28vw]">{jobTitle}</span></TypeWriter>
        {:else}
          <p style="display: none;">{jobTitle}</p>
        {/if}
      {/each}
    </div>
  <img class="w-[14vw] h-auto mt-[3.9vw]" src="arrow.svg" alt="arrow" />
  </div>
</div>




