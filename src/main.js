import App from './App.svelte';

const app = new App({
	target: document.querySelector('#body'),
	props: {
		name: 'world'
	}
});

export default app;