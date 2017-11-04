<template>
  <div class="ly-card">
    <div class="ly-card-body" :style="`background-image: url(${image});`">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      image: { type: String },
    },
  }
</script>

<style lang="scss">
  .ly-card {
    margin-bottom: 1rem;

    box-shadow: 0 0 1px $ly-color-grey-50,
                1px 2px 3px $ly-color-grey-40;
    border-radius: .25rem;
  }

  .ly-card-body {
    padding: 1rem;

    border-radius: .25rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
</style>
