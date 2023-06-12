<script lang='ts'>
    import { onMount } from "svelte";

	let input: HTMLTextAreaElement
	let prev_commands_counter = 0


	const help_message: string = `
		\tabout          - about Sat Naing\n
		\tclear          - clear the terminal\n
		\teducation      - my education background\n
		\thelp           - check available commands\n
		\tprojects       - view projects that I've coded\n
		\tthemes         - check available themes\n
		\thome           - display hero section
	`

	onMount(() => {
		input.focus()
	})

	const focus = (element: HTMLTextAreaElement) => {
		element.addEventListener("blur", ev => {
			input.focus()
			setTimeout(() => {
				input.focus()

			}, 100)
		})
	}

	enum display_type {
		COMMAND,
		RESULT
	}
	let old_inputs: {type: display_type, value: string}[] = []

	const inputed = (element: KeyboardEvent) => {
		//alert(element.keyCode )
		if (element.keyCode == 13) {
			old_inputs = [...old_inputs, {type: display_type.COMMAND, value: ">  "+input.value}]

			switch (input.value.trim()) {
				case "clear":
					old_inputs = []
					break;
			
				case "help":
					old_inputs = [...old_inputs, {type: display_type.RESULT, value: help_message}]
					break;
			
				default:
					old_inputs = [...old_inputs, {type: display_type.RESULT, value: "unknown command: "+ input.value.trim()}]
					break;
			}

			input.value = ""
		}else if (1){
			// up
			// prev command
		}else if (1){
			// down
			// prev command
		}
	}
	
	
</script>


<div >
	{#each old_inputs as item}
		{#if item.type == display_type.RESULT}
			<div class="line">
				<div class='old_input'>{item.value}</div>
			</div>
			<div class='space'></div>
		{:else if item.type == display_type.COMMAND}
			<div class="line">
				<div class='username'>ilyes</div>
				<div class='hostname'>@</div>
				<div class='arobas'>ilyes-pc</div>
				<div class='sign'>:~$</div>
			</div>
			<div class="line">
				<div class='old_input'>{item.value}</div>
			</div>
			<div class='space'></div>
		{/if}
	
		
	{/each}




	<div class="line">
		<div class='username'>ilyes</div>
		<div class='hostname'>@</div>
		<div class='arobas'>ilyes-pc</div>
		<div class='sign'>:~$</div>
	</div>
	<div class="line">
		<div class='prompt'>></div>
		<textarea spellcheck="false" bind:this={input} on:keypress={inputed} use:focus  name="" id="" cols="30" rows="1"></textarea>
	</div>
	<div class='space'></div>
</div>


<style>
	div {
		
	}
	.line {
		/*background-color: white;
		*/
		display: flex;
		flex-direction: row;
		display: flex;
		align-items: center;
	}
	.old_input{
		color: rgb(37, 181, 37);
	}
	.line > .username {
		color: rgb(37, 181, 37);
	}
	.line > .hostname {
		color: greenyellow;
	}
	.line > .arobas {
		color: rgb(37, 181, 37);
	}
	.line > .sign {
		color: white;
	}
	.line > .prompt {
		color: rgb(37, 181, 37);
	}
	.line > textarea {
		height: 19px;
		overflow: hidden;
		resize: none;
		width: 100%;
		color: rgb(37, 181, 37);
		background-color: transparent;
		border:none;
		margin-left: 10px;
		font-size: large;
		font-weight: 500;
		font-family: "IBM Plex Mono", monospace;
		outline: none;
	}
	.space{
		padding: 10px;
	}
</style>
