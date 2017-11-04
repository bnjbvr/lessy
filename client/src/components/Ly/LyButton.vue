<template>
  <button
    :type="submit ? 'submit' : 'button'"
    :class="['ly-button', `ly-button-${type}`]"
    @click="onClick"
    @mousedown="$emit('on')"
    @mouseup="$emit('off')"
    @mouseout="$emit('off')"
  >
    <ly-icon v-if="icon" :name="icon"></ly-icon>
    <slot></slot>
  </button>
</template>

<script>
  import LyIcon from './LyIcon'

  export default {
    props: {
      type: { type: String, default: 'default' },
      icon: { type: String },
      submit: { type: Boolean },
    },

    components: {
      LyIcon,
    },

    methods: {
      onClick (event) {
        if (!this.submit) {
          event.preventDefault()
        }
        this.$emit('click')
      },
    },
  }
</script>

<style lang="scss">
  .ly-button {
    display: inline-block;
    max-width: 100%;
    margin-right: .25rem;
    padding: .25rem 1.5rem;

    vertical-align: middle;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-size: 1rem;
    line-height: 1.5rem;

    background-color: transparent;
    border: none;
    border-radius: .25rem;

    transition: all .2s ease-in-out;
  }

  .ly-button-primary {
    background-color: $ly-color-pine-50;
    box-shadow: 0 0 1px $ly-color-pine-90;
    color: $ly-color-white;

    &:hover { background-color: $ly-color-pine-70; }
    &:focus { background-color: $ly-color-pine-90; }
  }

  .ly-button-default {
    background-color: $ly-color-grey-20;
    box-shadow: 0 0 1px $ly-color-grey-90;

    &:hover { background-color: $ly-color-grey-30; }
    &:focus { background-color: $ly-color-grey-40; }
  }

  .ly-button-ghost {
    padding-left: .5rem;
    padding-right: .5rem;

    background-color: transparentize($ly-color-grey-90, .9);

    &:hover { background-color: transparentize($ly-color-grey-90, .8); }
    &:focus { background-color: transparentize($ly-color-grey-90, .7); }
  }
</style>
