<script>
	import TypeWriter from 'svelte-typewriter';

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

<style>
  #chat-bubble {
    font-family: 'Kalam', cursive;
  }
  .transform-scale-y-minus-1 {
  transform: scaleX(-1);
}
</style>

<div class="relative max-w-full px-[6vw] mt-[18vw] sm:hidden">
  <div class="flex justify-center">
    <img class="w-[70.3vw]" src="memoji.png" alt="memoji" />
  </div>
  <div class="flex flex-col items-center mt-[10vw]">
    <h1 class="relative text-[10.53vw] z-[8000] mb-[0.5vw]">Hi! I'm Lin Hui!</h1>
    <h1 class="relative text-[7vw] z-[8000] mb-[0.5vw]">I'm a full-stack developer <br> based in Kuala Lumpur.</h1>
    <div class="h-10 mt-3">
      {#each jobTitles as jobTitle, index}
        {#if index === currentIndex}
          <TypeWriter interval={50}><span class="text-[6vw]">{jobTitle}</span></TypeWriter>
        {:else}
          <p style="display: none;">{jobTitle}</p>
        {/if}
      {/each}
    </div>
    <img class="w-[45vw] mt-[4vw] transform-scale-y-minus-1" src="arrow.svg" alt="arrow" />
  </div>
</div>


<div class="homepage hidden sm:block relative max-w-full px-[6vw] pt-[1.1vw] mt-[3vw]">
  <div>
    <div class="hidden sm:grid absolute w-[40.3vw] left-[20.25vw] top-[5vw] chat chat-end">
      <div class="chat-bubble text-[4vw]" id="chat-bubble">I'm Lin Hui!</div>
    </div>
    <img class="absolute w-[40.3vw] left-[53.25vw] top-[0.5vw] z-0" src="memoji.png" alt="memoji" />
    <h1 class="relative text-[5.3vw] z-[8000] mt-[0.5vw] pt-7">Hi, <span id="name" class="sm:hidden">I'm Lin Hui!</span></h1>
    <h1 class="relative text-[4.5vw] z-[8000] mb-[0.5vw]">I'm a full-stack developer <br> based in Kuala Lumpur.</h1>
    <div class="h-10">
      {#each jobTitles as jobTitle, index}
        {#if index === currentIndex}
          <TypeWriter interval={50}><span class="text-[4vw]">{jobTitle}</span></TypeWriter>
        {:else}
          <p style="display: none;">{jobTitle}</p>
        {/if}
      {/each}
    </div>
    <div>
      <img class="w-[17vw] mt-[3.9vw]" src="arrow.svg" alt="arrow" />
    </div>
  </div>
</div>


