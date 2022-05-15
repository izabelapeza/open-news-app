<template>
  <div class="error-element">
    <div class="error-element__text">
      <font-awesome-icon icon="exclamation" class="error-icon" />
      {{ errorInfo }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorElement',

  props: ['errorInfo'],
}
</script>
