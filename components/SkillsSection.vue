<script setup lang="ts">
const appConfig = useAppConfig();
const skills = appConfig.skills_section;
</script>

<template>
  <section id="skills" class="relative py-24 sm:py-32">
    <div aria-hidden="true" class="absolute inset-0 grid-bg -z-10 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"></div>
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeading
        label="skills"
        title="The stack I wield"
        :description="skills?.descriptionText"
      />

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <GradientBorder
          v-for="(skill, idx) in skills?.mySkills"
          :key="idx"
        >
          <div class="flex items-start gap-4">
            <div class="shrink-0 w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
              <img :src="skill.img" :alt="skill.title" class="max-w-full max-h-full object-contain p-1.5" />
            </div>
            <div class="min-w-0">
              <h3 class="font-mono text-base font-semibold text-white">{{ skill.title }}</h3>
              <p class="mt-1.5 text-sm text-ink-dim leading-relaxed">{{ skill.description }}</p>
            </div>
          </div>
        </GradientBorder>
      </div>
    </div>
  </section>
</template>
