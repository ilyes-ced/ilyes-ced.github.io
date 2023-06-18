<script lang='ts'>
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import { AppShell, AppBar, AppRail, AppRailTile, LightSwitch, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { active_page } from '../page_store';
	import { page } from '$app/stores';
	
	import Github from '../lib/icons/github.svelte';
	import Twitter from '../lib/icons/twitter.svelte';
	import Linkedin from '../lib/icons/linkedin.svelte';
	
	let currentTile: number = 0;



</script>


<AppShell>
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			(title)
			<svelte:fragment slot="trail">
				<Github  />
				<Twitter  />
				<Linkedin  />
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	
	<svelte:fragment slot="sidebarLeft">
		<AppRail selected={active_page}>
			<AppRailAnchor  href="/" selected={$page.url.pathname === '/'}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>Home</span>
			</AppRailAnchor>
			<AppRailAnchor  href="/about" selected={$page.url.pathname === '/about'}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>About</span>
			</AppRailAnchor>
			<AppRailAnchor  href="/projects" selected={$page.url.pathname === '/projects'}>
				<svelte:fragment slot="lead">(icon)</svelte:fragment>
				<span>Projects</span>
			</AppRailAnchor>



			<!-- 
				<svelte:fragment slot="trail">
					<AppRailTile bind:group={currentTile} name="tile-4" value={3} title="tile-4">
						<svelte:fragment slot="lead"><Github/></svelte:fragment>
						<span>Projects</span>
					</AppRailTile>
				</svelte:fragment>
			-->



				



		</AppRail>
	</svelte:fragment>




	<slot active_page={currentTile} />
</AppShell>