<script setup lang="ts">
const appConfig = useAppConfig();
const contact = appConfig.contact_section;
const year = new Date().getFullYear();
</script>

<template>
  <footer id="contact" class="relative border-t border-white/5 mt-20">
    <div aria-hidden="true" class="absolute inset-0 grid-bg -z-10 opacity-60"></div>
    <div class="max-w-6xl mx-auto px-6 py-20">
      <div class="max-w-2xl">
        <div class="mono-label mb-3">// contact</div>
        <h2 class="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Let's <span class="gradient-text">build</span> something.
        </h2>
        <p class="mt-4 text-ink-dim text-lg">
          Got a project, a role, or just want to say hi? My inbox is always open.
        </p>
        <a
          v-if="appConfig.email"
          :href="'mailto:' + appConfig.email"
          class="btn-primary mt-8"
        >
          Say hello
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </a>
      </div>

      <div class="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-sm">
        <div v-if="contact?.address">
          <div class="text-ink-faint text-xs uppercase tracking-wider mb-2">// address</div>
          <div class="text-ink">{{ contact.address.name }}</div>
          <div class="text-ink-dim">{{ contact.address.street }}</div>
          <div class="text-ink-dim">{{ contact.address.provinceAndZip }}</div>
        </div>
        <div v-if="appConfig.email">
          <div class="text-ink-faint text-xs uppercase tracking-wider mb-2">// email</div>
          <a :href="'mailto:' + appConfig.email" class="text-ink hover:text-accent-cyan break-words">{{ appConfig.email }}</a>
        </div>
        <div v-if="appConfig.phone">
          <div class="text-ink-faint text-xs uppercase tracking-wider mb-2">// phone</div>
          <a :href="'tel:' + appConfig.phone" class="text-ink hover:text-accent-cyan">{{ appConfig.phone }}</a>
        </div>
        <div>
          <div class="text-ink-faint text-xs uppercase tracking-wider mb-2">// elsewhere</div>
          <div class="flex flex-col gap-1">
            <a v-if="appConfig.github" :href="appConfig.github" target="_blank" rel="noopener" class="text-ink hover:text-accent-cyan">GitHub ↗</a>
            <a v-if="appConfig.linkedin" :href="appConfig.linkedin" target="_blank" rel="noopener" class="text-ink hover:text-accent-cyan">LinkedIn ↗</a>
          </div>
        </div>
      </div>

      <div class="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-ink-faint">
        <div>© {{ year }} Gian Lorenzo Abaño. Built with Nuxt + Tailwind.</div>
        <div>// designed &amp; coded from scratch</div>
      </div>
    </div>
  </footer>
</template>
