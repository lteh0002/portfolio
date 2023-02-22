<script>
	import '../app.css';
	import Header from './Header.svelte';
	import About from './About.svelte';
	import Project from './Project.svelte';
	import Contact from './Contact.svelte';
	import Footer from './Footer.svelte';
</script>

<Header />
<slot />
<About />
<div class="border-2 mx-[3vw]" />
<Project />
<div class="border-2 mx-[3vw]" />
<Contact />
<Footer />
