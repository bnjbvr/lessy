<template>
  <div class="card">
    <div v-if="title" class="card-header">
      <router-link v-if="to" :to="to">{{ title }}</router-link>
      <span v-else>{{ title }}</span>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {

    name: 'card',

    props: {
      'title': { type: String },
      'to': { type: [String, Object] },
    },

  }
</script>

<style lang="scss">

  .card {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding-bottom: 10px;

    overflow: hidden;
    text-overflow: ellipsis;

    color: #555;

    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 0px 3px #ccc;
  }

  .container.row > .card {
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;

    margin-right: 20px;
    padding: 0;
    padding-bottom: 10px;

    &:last-of-type {
      margin-right: 0;
    }
  }

  @media(max-width: $small-screen-width) {
    .container.row > .card {
      flex-basis: auto;

      margin-right: 0;
      margin-bottom: 10px;
    }
  }

  .card-header {
    padding: 10px 20px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-weight: bold;
    font-size: 1.1rem;
  }
  .card-body {
    padding: 10px 20px;

    overflow: hidden;
    text-overflow: ellipsis;
  }

</style>
