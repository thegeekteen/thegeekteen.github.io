<script setup>
const appConfig = useAppConfig();

function formatInternationalPhoneNumber(phone) {
    // Validate that the input starts with '+' followed by digits
    const regex = /^\+\d{1,3}\d+$/;
    if (!regex.test(phone)) {
        return "Invalid phone number format";
    }

    // Extract country code and the rest of the number
    const match = phone.match(/^(\+\d{1,3})(\d{4,})$/); // Country code and the rest
    if (!match) {
        return "Invalid phone number structure";
    }

    const countryCode = match[1]; // e.g., +63, +1, etc.
    const restOfNumber = match[2];

    // Format the rest of the number in groups of 3-4 digits
    const formattedNumber = restOfNumber.replace(/(\d{3})(?=\d)/g, "$1 ");

    // Combine and return
    return `${countryCode} ${formattedNumber.trim()}`;
}
</script>

<template>
    <div id="page-wrapper">

    <!-- Header -->
    <header id="header" class="alt">
        <h1><a href="/">{{ appConfig.appName }}</a></h1>
        <nav>
            <a href="#menu">Menu</a>
        </nav>
    </header>

    <!-- Menu -->
    <nav id="menu">
        <div class="inner">
            <h2>Menu</h2>
            <ul class="links">
                <li><NuxtLink href="/">Home</NuxtLink></li>
            </ul>
            <NuxtLink href="/" class="close">Close</NuxtLink>
        </div>
    </nav>

    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>

    <!-- Footer -->
    <section id="footer">
        <div class="inner">
            <h2 class="major">Get in touch</h2>
            <p>{{ appConfig.contact_section.descriptionText }}</p>

            <ul class="contact">
                <li v-if="appConfig.contact_section.address" class="icon solid fa-home">
                    {{ appConfig.contact_section.address.name }}<br />
                    {{ appConfig.contact_section.address.street }}<br />
                    {{ appConfig.contact_section.address.provinceAndZip }}
                </li>
                <li v-if="appConfig.phone" class="icon solid fa-phone"><a :href="'tel:' + appConfig.phone">{{ formatInternationalPhoneNumber(appConfig.phone) }}</a></li>
                <li v-if="appConfig.email" class="icon solid fa-envelope"><a :href="'mailto:' + appConfig.email">{{ appConfig.email }}</a></li>
                <li v-if="appConfig.github" class="icon brands fa-github"><a :href="appConfig.github">Github: {{ appConfig.appName }}</a></li>
                <li v-if="appConfig.linkedin" class="icon brands fa-linkedin"><a :href="appConfig.linkedin">LinkedIn: {{ appConfig.appName }}</a></li>
            </ul>
            <ul class="copyright">
                <li>&copy; {{ appConfig.appName }}. All rights reserved.</li>
            </ul>
        </div>
    </section>

    </div>
</template>