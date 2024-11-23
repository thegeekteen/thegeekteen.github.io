<script setup>
const appConfig = useAppConfig();
</script>

<template>
    <!-- Banner -->
    <section id="banner" class="cover-image">
        <div class="inner">
            <div v-if="appConfig.photo" class="logo"><img style="border-radius:15px;height:200px;width:200px;" :src="appConfig.photo" /></div>
            <h2 class="headerName">{{ appConfig.headerName }}</h2>
            <p class="no-capitalize" style="font-weight:bold;">{{ appConfig.positionName }}<br />{{ appConfig.positionShortDescription }}</p>
            <p class="no-capitalize">
                {{ appConfig.fullDescription }}
            </p>

            <div class="headerButtonsContainer">
                <a v-if="appConfig.email" :href="'mailto:' + appConfig.email" class="no-capitalize button icon solid fa fa-envelope">Email</a>
                <a v-if="appConfig.phone" :href="'tel:' + appConfig.phone" class="no-capitalize button icon solid fa fa-phone">SMS / Call</a>
                <a v-if="appConfig.github" :href="appConfig.github" class="no-capitalize button icon brands fa-github">GitHub</a>
                <a v-if="appConfig.linkedin" :href="appConfig.linkedin" class="no-capitalize button icon brands fa-linkedin">LinkedIn</a>
            </div>

            <a v-if="appConfig.resumeLink" class="special" :href="appConfig.resumeLink" style="margin-top:50px;">Download My CV</a>
        </div>
    </section>

    <!-- Wrapper -->
    <section id="wrapper">
        <!-- Four -->
        <section class="wrapper alt style2">
            <div class="inner">

                <div v-if="appConfig.experience_section">
                    <h2 class="major">Experience</h2>
                    <p>{{ appConfig.experience_section.descriptionText }}</p>
                    <section class="experiences-section features">
                        <article v-for="experience in appConfig.experience_section.myExperiences">
                            <img class="skills-img" v-if="experience.img" :src="experience.img" />
                            <h3 class="major">{{ experience.title }}<br /><span class="no-capitalize">{{ experience.address }}</span></h3>
                            <p>{{ experience.subTitle }}</p>
                            <div v-html="experience.description"></div>
                            <a v-if="experience.actionButton.url" :href="experience.actionButton.url" class="special">{{ experience.actionButton.text ?? 'View Company Website' }}</a>
                        </article>
                    </section>
                </div>

                <br />

                <div v-if="appConfig.skills_section">
                    <h2 class="major">Skills</h2>
                    <p v-html="appConfig.skills_section.descriptionText"></p>
                    <section class="skill-articles features">
                        <article class="skills-list" v-for="skill in appConfig.skills_section.mySkills">
                            <img :src="skill.img" class="skills-img" />
                            <h3 class="major">{{ skill.title }}</h3>
                            <div v-html="skill.description"></div>
                        </article>
                    </section>
                </div>

                <br />

                <div v-if="appConfig.education_section">
                    <h2 class="major">Education</h2>
                    <p>{{ appConfig.education_section.descriptionText }}</p>
                    <section class="education-section features">
                        <article v-for="education in appConfig.education_section.myEducations">
                            <img class="skills-img" v-if="education.img" :src="education.img" />
                            <h3 class="major">{{ education.title }}<br /><span class="no-capitalize">{{ education.address }}</span></h3>
                            <p>{{ education.subTitle }}</p>
                            <div v-html="education.description"></div>
                            <a v-if="education.actionButton && education.actionButton.url" :href="education.actionButton.url" class="special">{{ education.actionButton.text ?? 'View Company Website' }}</a>
                        </article>
                    </section>
                </div>

            </div>
        </section>
    </section>
</template>

<style>

.skill-articles > article {
    padding-top:0px;
}

.experiences-section > article {
    display:block;
    width:100%;
    margin-bottom:0px !important;
}

.education-section > article {
    display:block;
    width:100%;
    margin-bottom:0px !important;
}

img.skills-img {
    height:80px;
    margin-bottom:5px;
}

.headerName {
    text-transform:none;
    letter-spacing: 2px;
    border:none !important;
    margin-bottom:0px !important;
}

.no-capitalize {
    text-transform:none !important;
}

div.headerButtonsContainer {
    display:grid;
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);
    width:100%;
}

div.headerButtonsContainer a {
    width:100%;
}
</style>