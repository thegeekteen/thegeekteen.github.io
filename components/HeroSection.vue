<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const appConfig = useAppConfig();

// Typing effect for the role line
const fullRole = appConfig.positionName as string;
const typed = ref('');
let i = 0;
let timer: number | null = null;

onMounted(() => {
  const tick = () => {
    if (i <= fullRole.length) {
      typed.value = fullRole.slice(0, i);
      i++;
      timer = window.setTimeout(tick, 70);
    }
  };
  tick();
});
onBeforeUnmount(() => { if (timer) clearTimeout(timer); });
</script>

<template>
  <section id="top" class="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
    <!-- Decorative blobs -->
    <div aria-hidden="true" class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full bg-accent-cyan/20 blur-3xl animate-blob-float"></div>
      <div class="absolute top-40 right-0 w-[500px] h-[500px] rounded-full bg-accent-violet/20 blur-3xl animate-blob-float" style="animation-delay:-6s"></div>
      <div class="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-accent-pink/10 blur-3xl animate-blob-float" style="animation-delay:-12s"></div>
    </div>
    <div aria-hidden="true" class="absolute inset-0 grid-bg -z-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"></div>

    <div class="max-w-6xl mx-auto w-full px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
      <!-- Left: text -->
      <div>
        <div class="mono-label mb-5 flex items-center gap-2">
          <span class="inline-block w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
          Available for work
        </div>
        <p class="text-ink-dim font-mono text-sm mb-4">Hi, my name is</p>
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
          <span class="gradient-text">Gian Lorenzo</span><br />
          <span class="text-white">Abaño.</span>
        </h1>
        <h2 class="mt-4 text-2xl sm:text-3xl font-semibold text-ink-dim font-mono">
          <span>{{ typed }}</span><span class="inline-block w-[2px] h-7 bg-accent-cyan align-middle animate-blink ml-1"></span>
        </h2>
        <p class="mt-6 max-w-xl text-ink-dim text-lg leading-relaxed">
          {{ appConfig.fullDescription }}
        </p>
        <p class="mt-3 max-w-xl text-ink-dim/80 text-base">
          {{ appConfig.positionShortDescription }}
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a v-if="appConfig.email" :href="'mailto:' + appConfig.email" class="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Email me
          </a>
          <a v-if="appConfig.phone" :href="'tel:' + appConfig.phone" class="btn-ghost">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
            Call / SMS
          </a>
          <a v-if="appConfig.github" :href="appConfig.github" target="_blank" rel="noopener" class="btn-ghost">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.44-2.7 5.42-5.27 5.7.41.36.78 1.05.78 2.12v3.14c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>
            GitHub
          </a>
          <a v-if="appConfig.linkedin" :href="appConfig.linkedin" target="_blank" rel="noopener" class="btn-ghost">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>
            LinkedIn
          </a>
          <a v-if="appConfig.resumeLink" :href="appConfig.resumeLink" class="btn-ghost">Download CV</a>
        </div>
      </div>

      <!-- Right: profile + terminal -->
      <div class="relative">
        <div class="relative mx-auto w-fit">
          <div class="absolute -inset-4 rounded-3xl bg-accent-gradient opacity-30 blur-2xl"></div>
          <img
            v-if="appConfig.photo"
            :src="appConfig.photo"
            alt="Gian Lorenzo Abaño"
            class="relative rounded-3xl w-56 h-56 sm:w-64 sm:h-64 object-cover border border-white/10 shadow-2xl"
          />
        </div>

        <!-- Terminal card -->
        <div class="relative mt-8 gradient-border bg-base-800/80 backdrop-blur-md p-5 font-mono text-[13px] shadow-2xl">
          <div class="flex items-center gap-1.5 mb-3">
            <span class="w-3 h-3 rounded-full bg-red-400/80"></span>
            <span class="w-3 h-3 rounded-full bg-yellow-400/80"></span>
            <span class="w-3 h-3 rounded-full bg-green-400/80"></span>
            <span class="ml-2 text-ink-faint text-xs">~/about.sh</span>
          </div>
          <div class="space-y-1.5 text-ink-dim leading-relaxed">
            <div><span class="text-accent-cyan">$</span> whoami</div>
            <div class="text-white">gian_lorenzo_abano</div>
            <div><span class="text-accent-cyan">$</span> cat role.txt</div>
            <div class="text-white">Full-Stack Developer</div>
            <div><span class="text-accent-cyan">$</span> ls skills/</div>
            <div class="text-white break-words">PHP JS Vue Nuxt MySQL Flutter DevOps ...</div>
            <div><span class="text-accent-cyan">$</span> <span class="animate-pulse">_</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
