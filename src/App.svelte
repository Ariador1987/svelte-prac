<script lang="ts">
    import svelteLogo from "./assets/svelte.svg";
    import TailwindCss from "./TailwindCSS.svelte";
</script>

<TailwindCss />

<svelte:head>
    <title>hello</title>
</svelte:head>

<main
    class="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase"
    type="submit"
>
    <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src="/vite.svg" class="logo" alt="Vite Logo" />
        </a>
        <a href="https://svelte.dev" target="_blank" rel="noreferrer">
            <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
        </a>
    </div>
    <h1>Vite + <span class="random__text--primary">Svelte</span></h1>

    <div class="text-3xl capitalize rounded-md bg-gray-400 my-4">
        hello i am some stuff here
    </div>

    <p>
        Check out <a
            href="https://github.com/sveltejs/kit#readme"
            target="_blank"
            rel="noreferrer">SvelteKit</a
        >, the official Svelte app framework powered by Vite!
    </p>

    <p class="read-the-docs">
        Click on the Vite and Svelte logos to learn more
    </p>
</main>

<style lang="scss">
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.svelte:hover {
        filter: drop-shadow(0 0 2em #ff3e00aa);
    }
    .read-the-docs {
        color: #888;
    }
    .random__text {
        &--primary {
            background-color: red;
            color: blue;
        }
    }
</style>
