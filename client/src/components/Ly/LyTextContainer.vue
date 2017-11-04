<template>
  <div :class="['ly-text-container', { margined }]">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      margined: { type: Boolean },
    },
  }
</script>

<style lang="scss">
  .ly-text-container {
    display: block;
    max-width: 30rem;

    &.margined {
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
