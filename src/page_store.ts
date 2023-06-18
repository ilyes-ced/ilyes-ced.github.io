import { writable, type Writable } from 'svelte/store';


const active_page: Writable<number> = writable(1);



export {
    active_page,
}