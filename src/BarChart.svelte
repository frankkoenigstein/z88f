<script>
  import { flip } from "svelte/animate";
  import Bar from "./Bar.svelte";
  export let title;
  let data = [];

  $: total = data.reduce((acc, actual) => acc + actual.value, 0);

  export function addPerson(name) {
    data = [...data, { name, value: 0, id: data.length }];
  }

  export function update(name, value) {
    const index = data.findIndex((d) => d.name === name);
    data[index] = { ...data[index], value };
    data.sort((a, b) => b.value - a.value);
  }
</script>

<article>
  <div>
    <h3>{title}</h3>
  </div>
  {#each data as entry, index (entry.id)}
    <div animate:flip={{ duration: 500 }}>
      <Bar name={entry.name} value={entry.value} />
    </div>
  {/each}
  <div>
    <p>Gesamtpunkte:</p>
    <p>{total}</p>
  </div>
</article>
