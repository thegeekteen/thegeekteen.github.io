<script setup lang="ts">
const appConfig = useAppConfig();
const edu = appConfig.education_section;
</script>

<template>
  <section id="education" class="relative py-24 sm:py-32">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeading
        label="education"
        title="Where I learned the craft"
        :description="edu?.descriptionText"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GradientBorder
          v-for="(item, idx) in edu?.myEducations"
          :key="idx"
        >
          <div class="flex items-start gap-5">
            <div
              v-if="item.img"
              class="shrink-0 w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden"
            >
              <img :src="item.img" :alt="item.title" class="max-w-full max-h-full object-contain p-1" />
            </div>
            <div class="min-w-0">
              <h3 class="text-lg sm:text-xl font-semibold text-white">{{ item.title }}</h3>
              <div class="mt-1 text-sm text-ink-dim">{{ item.address }}</div>
              <div class="mt-2 font-mono text-xs px-2 py-1 rounded-full inline-block bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan">
                {{ item.subTitle }}
              </div>
              <div v-if="item.description" class="mt-3 prose-dev text-sm" v-html="item.description"></div>
            </div>
          </div>
        </GradientBorder>
      </div>
    </div>
  </section>
</template>
