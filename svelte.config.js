// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-netlify';
// import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  adapter: adapter({
    // default options are shown. On some platforms
    // these options are set automatically — see below
    // pages: 'build',
    // assets: 'build',
    // fallback: null,
    // precompress: false,
    // strict: true,
    edge: false,
    split: false
  }),
  // preprocess: vitePreprocess()
};

export default config;