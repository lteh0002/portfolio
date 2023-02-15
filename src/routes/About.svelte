<script>
  import Carousel from "./Carousel.svelte";
</script>
<div id="aboutme" class="max-w-full px-[6vw] pt-[17vw] sm:pt-[4.5vw] md:pt-[2vw]">
	<h1 class="text-[6vw]">About Me</h1>
	<div class="sm:flex">
		<div class="flex flex-col gap-3 text-justify">
			<p class="text-[4.95vw] pt-[0.5vw] sm:text-[2.5vw] md:text-[2vw]">
				Hey! I'm <strong><i>Lin Hui</i></strong>. Previously a Civil Engineer, now a full stack web
				developer!
			</p>
			<p class="text-[4.95vw] sm:text-[2.5vw] md:text-[2vw]">
				While I loved the problem-solving aspect of my previous field, I couldn't ignore my growing
				interest in web development. Hence, I taught myself how to code and was soon hooked on the
				creativity and limitless possibilities of the tech world.
			</p>
			<p class="hidden text-[4.95vw] sm:block sm:text-[2.5vw] md:text-[2vw] pb-[0.5vw]">
				I believe that a website should not only look good, but it should also be functional, easy
				to use, and accessible to all. That's why I strive to create web applications that not only
				look great but also offer a seamless and intuitive user experience.
			</p>
			<!-- <p class="text-[4.95vw] sm:text-[2.5vw] mt-[1.5vw] md:text-[2.5vw]">
				I am always looking for new challenges and opportunities to learn and grow. If you're
				looking for a web developer who is always striving to improve and bring new ideas to the
				table, then let's connect and have a chat!
			</p> -->
		</div>
	</div>
  <Carousel/>
</div>
