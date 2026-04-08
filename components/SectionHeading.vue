<script setup lang="ts">
defineProps<{
  label: string;
  title: string;
  description?: string | null;
}>();
</script>

<template>
  <div class="mb-12 max-w-3xl">
    <div class="mono-label mb-3">// {{ label }}</div>
    <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-white">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-4 text-ink-dim text-lg leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>
