<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const scrolled = ref(false);
const open = ref(false);

const onScroll = () => {
  scrolled.value = window.scrollY > 20;
};

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));

const links = [
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' }
];
</script>

<template>
  <header
    :class="[
      'fixed top-0 inset-x-0 z-50 transition-all duration-300',
      scrolled ? 'bg-base-900/80 backdrop-blur-lg border-b border-white/5' : 'bg-transparent'
    ]"
  >
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#top" class="font-mono text-sm font-semibold tracking-tight">
        <span class="text-ink-dim">&lt;</span><span class="gradient-text">gian</span><span class="text-ink-dim">/&gt;</span>
      </a>
      <ul class="hidden md:flex items-center gap-8 text-sm text-ink-dim">
        <li v-for="(l, i) in links" :key="l.href">
          <a :href="l.href" class="hover:text-white transition-colors">
            <span class="font-mono text-accent-cyan mr-1">0{{ i + 1 }}.</span>{{ l.label }}
          </a>
        </li>
      </ul>
      <button
        class="md:hidden text-ink p-2 -mr-2"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <line v-if="!open" x1="3" y1="7" x2="21" y2="7" />
          <line v-if="!open" x1="3" y1="17" x2="21" y2="17" />
          <line v-if="open" x1="5" y1="5" x2="19" y2="19" />
          <line v-if="open" x1="19" y1="5" x2="5" y2="19" />
        </svg>
      </button>
    </nav>
    <div v-if="open" class="md:hidden border-t border-white/5 bg-base-900/95 backdrop-blur-lg">
      <ul class="px-6 py-4 space-y-3">
        <li v-for="(l, i) in links" :key="l.href">
          <a :href="l.href" class="block text-ink-dim hover:text-white" @click="open = false">
            <span class="font-mono text-accent-cyan mr-2">0{{ i + 1 }}.</span>{{ l.label }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
