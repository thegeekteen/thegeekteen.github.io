<script setup lang="ts">
const appConfig = useAppConfig();
const exp = appConfig.experience_section;
</script>

<template>
  <section id="experience" class="relative py-24 sm:py-32">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeading
        label="experience"
        title="Where I've built things"
        :description="exp?.descriptionText"
      />

      <div class="relative">
        <!-- Timeline line -->
        <div aria-hidden="true" class="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent-cyan/60 via-accent-violet/60 to-transparent"></div>

        <ol class="space-y-10">
          <li
            v-for="(item, idx) in exp?.myExperiences"
            :key="idx"
            class="relative pl-14 sm:pl-20"
          >
            <!-- Dot -->
            <span
              aria-hidden="true"
              class="absolute left-[9px] sm:left-[17px] top-8 w-4 h-4 rounded-full bg-base-900 border-2 border-accent-cyan shadow-[0_0_0_4px_rgba(34,211,238,0.15)]"
            ></span>

            <GradientBorder>
              <div class="flex flex-col sm:flex-row sm:items-start gap-5">
                <div
                  v-if="item.img"
                  class="shrink-0 w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden"
                >
                  <img :src="item.img" :alt="item.title" class="max-w-full max-h-full object-contain p-1" />
                </div>
                <div class="flex-1 min-w-0">
                  <h3 class="text-xl sm:text-2xl font-semibold text-white">{{ item.title }}</h3>
                  <div class="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span class="text-ink-dim">{{ item.address }}</span>
                    <span class="font-mono text-xs px-2 py-0.5 rounded-full bg-accent-violet/10 border border-accent-violet/30 text-accent-violet">
                      {{ item.subTitle }}
                    </span>
                  </div>
                  <div class="mt-4 prose-dev text-sm sm:text-base" v-html="item.description"></div>
                  <a
                    v-if="item.actionButton?.url"
                    :href="item.actionButton.url"
                    target="_blank"
                    rel="noopener"
                    class="mt-5 inline-flex items-center gap-1.5 text-sm font-mono text-accent-cyan hover:text-accent-violet transition-colors"
                  >
                    {{ (item.actionButton as any).text ?? 'View Company' }}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                  </a>
                </div>
              </div>
            </GradientBorder>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
