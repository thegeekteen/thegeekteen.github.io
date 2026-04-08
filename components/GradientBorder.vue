<script setup lang="ts">
defineProps<{ as?: string }>();
</script>

<template>
  <component
    :is="as || 'div'"
    class="gradient-border bg-base-800/60 backdrop-blur-sm p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1"
  >
    <slot />
  </component>
</template>
