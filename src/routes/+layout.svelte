<script>
    import "../app.css";
    import Header from "./Header.svelte";
    import About from "./About.svelte";
    import Project from "./Project.svelte";
</script>

<Header/>
<slot />
<About />
<Project />