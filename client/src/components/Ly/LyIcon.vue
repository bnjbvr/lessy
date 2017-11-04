<template>
  <i :class="['ly-icon', 'fa', 'fa-fw',  `fa-${name}`, {
    'fa-spin': spin,
    [`fa-${size}x`]: size,
  }]" aria-hidden="true"></i>
</template>

<script>
  export default {
    props: {
      'name': { type: String, required: true },
      'size': { type: [Number, String] },
      'spin': { type: Boolean },
    },
  }
</script>

<style lang="scss">
  .ly-icon {
    margin-top: -.25em;

    vertical-align: middle;

    width: 1.5em;
    line-height: 1.5em;
  }
</style>
