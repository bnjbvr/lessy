<template>
  <div class="ly-card-deck">
    <slot></slot>
  </div>
</template>

<style lang="scss">
  .ly-card-deck {
    display: flex;
    margin-left: -.5rem;
    margin-right: -.5rem;

    > .ly-card {
      flex: 1 0 0;

      margin-left: .5rem;
      margin-right: .5rem;
    }
  }

  @media(max-width: $small-screen-width) {
    .ly-card-deck {
      flex-direction: column;
    }
  }
</style>
