<script>
    import "../app.css";
    import Header from "./Header.svelte";
    import About from "./About.svelte";
    import Carousel from "./Carousel.svelte";
    import Project from "./Project.svelte";
    import Contact from './Contact.svelte'
</script>

<style>

</style>

<Header/>
<slot />
<About />
<div class="border-2 mx-[3vw]"></div>
<Project />
<div class="border-2 mx-[3vw]"></div>
<Contact />