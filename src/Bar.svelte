<script>
  const MAX_VALUE = 375;

  export let name = "";
  export let value = 0;

  $: width = Math.round((100 * value) / MAX_VALUE);
</script>

<style>
  :root {
    --bar-height: 10px;
  }

  .bar {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .bar p {
    text-align: right;
  }

  .bar p:first-child {
    margin-right: 1em;
    min-width: 4em;
    width: 10%;
  }

  .bar p:last-child {
    margin-left: 1em;
    min-width: 2.5em;
  }

  .bar div {
    height: var(--bar-height);
  }

  .bar > div {
    background: lightgrey;
    width: 100%;
  }

  .bar > div > div {
    background: rgba(62, 144, 84, 1);
    display: block;
    transition: width 0.3s 0.5s ease-out;
  }
</style>

<div class="bar">
  <p>{name}</p>
  <div>
    <div style="width: {width}%;" />
  </div>
  <p>{value}</p>
</div>
