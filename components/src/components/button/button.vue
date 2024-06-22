<template>
  <button :class="buttonClass" @click="handleClick">
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    type: {
      type: String as PropType<'button' | 'submit' | 'reset'>,
      default: 'button'
    },
    variant: {
      type: String as PropType<'primary' | 'secondary'>,
      default: 'primary'
    },
    label: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    const buttonClass = computed(() => `btn btn-${props.variant}`);

    const handleClick = (event: Event) => {
      emit('click', event);
    };

    return {
      buttonClass,
      handleClick
    };
  }
});
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.btn-primary {
  background-color: var(--getin-colors-primary);
  color: white;
}
.btn-secondary {
  background-color: #6c757d;
  color: white;
}
</style>
