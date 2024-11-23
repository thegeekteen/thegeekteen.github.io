export default defineAppConfig({
    appName: "Gian Lorenzo Abaño",
    photo: '/images/Gian.jpg.webp',
    resumeLink: '',
    headerName: "Hi, I'm Gian Lorenzo Abaño",
    positionName: "Full-Stack Developer",
    positionShortDescription: "Proficient in HTML5, PHP, JavaScript, MySQL, DevOps and Cross-Platform Development",
    fullDescription: "Experienced in building and maintaining web and mobile applications, API integrations, and warehouse management systems, with expertise in modern frameworks, version control, and external system integration.",
    email: "renz.abano16@gmail.com",
    phone: "+639928307802",
    github: "https://github.com/thegeekteen",
    linkedin: "https://www.linkedin.com/in/gian-lorenzo-a-295a26bb/",
    skills_section: {
        descriptionText: "With over 9 years of programming adventures and 3 years of professional working experience, I bring a treasure chest of technical knowledge and a proven knack for making projects successful!",
        mySkills: [
            {
                img: "https://www.php.net/images/logos/new-php-logo.svg",
                title: "PHP",
                description: "Ah, PHP—love it or hate it, this unsung hero powers 60-80% of the web. It's been my trusty sidekick in the industry and a real breadwinner for me!"
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
                title: "JavaScript",
                description: "JavaScript is the everywhere, do-everything language of the modern web! From creating magic in browsers to powering backends with Node.js, it’s like the Swiss Army knife of coding."
            },
            {
                img: "https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-7/256/Sql-runner-icon.png",
                title: "Databases",
                description: "SQL databases are my go-to for organizing data, but I'm no stranger to the NoSQL side of things. My database toolkit includes: PostgreSQL, MySQL, SQLite, CouchDB"
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png",
                title: "HTML5",
                description: "HTML is the skeleton of the web, and you simply can't build web applications without it. It's simple, powerful, and timeless!"
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1024px-Vue.js_Logo_2.svg.png",
                title: "VueJS and NuxtJS",
                description: "The dynamic duo behind this very portfolio! VueJS and NuxtJS are my favorite tools for building sleek and reactive web applications."
            },
            {
                img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
                title: "CSS",
                description: "CSS is the artistry behind every beautiful website. While I’ve dabbled in SCSS and Tailwind, there's nothing quite like the elegance of raw CSS."
            },
            {
                img: "https://cdn-media-1.freecodecamp.org/images/MiAWLAfns7pPgptcHFFPe8UAwMhPTPp3WWgt",
                title: "Flutter & Dart",
                description: "Creating apps with Flutter & Dart is such a joy! I even tried launching a telehealth startup called HealthMD with this stack. Though funding fell through, the dream lives on!"
            },
            {
                img: "https://notificare.com/static/5830a2bbcccd513f98e2986d7cc0eee3/c2dd8/cordova-ionic.webp",
                title: "Cordova & Ionic",
                description: "At my current job, I work on an app with Cordova & Ionic, tailored for barcode scanner hardware. It’s tech that makes logistics flow smoothly!"
            },
            {
                img: "https://bluebirdinternational.com/wp-content/uploads/2023/11/c-sharp-vs-java-bluebird.png",
                title: "Java & C#",
                description: "Java and C# share such a familiar syntax—it takes me back to my college days, learning ISPROG1. Nostalgia and coding make a great combo!"
            },
            {
                img: "https://www.svgrepo.com/show/372961/terminal.svg",
                title: "DevOps & Server Hosting",
                description: "From wrangling SSH terminals to setting up production servers, I’m your Linux-loving go-to person for all things DevOps and hosting."
            }
        ]
    },
    experience_section: {
        descriptionText: "I've worked across diverse projects and tech stacks, focusing on delivering scalable, efficient, and user-friendly solutions. My journey has been a blend of solving complex challenges, collaborating in dynamic teams, and contributing to impactful projects that drive business success.",
        myExperiences: [
            {
                img: 'https://tigermedia.dk/wp-content/webp-express/webp-images/uploads/2022/08/image.png.webp',
                title: 'Tiger Media A/S | Global Process Manager, Inc.',
                address: 'Aalborg, Denmark | Manila, Philippines',
                subTitle: 'Full Time | May 2023 - Present',
                description: `
                    <ul>
                        <li>Trained on Aalborg, Denmark on May 15, 2023 - May 26, 2023</li>
                        <li>Actively maintained and addressed bug fixes for warehouse management system web app that uses HTML5, CSS, PHP, MySQL, and Javascript.</li>
                        <li>Actively maintained and addressed bug fixes for warehouse management handterminal android app that uses Cordova, Ionic, and Javascript.</li>
                        <li>Utilized Git for version control, fostering a collaborative environment with fellow developers.</li>
                        <li>Demonstrated expertise in integrating and interacting with a variety of external systems. Have in-depth experience with RESTful services, SOAP, API implementations, XML, CURL, JSON, and XSL transformations.</li>
                    </ul>
                `,
                actionButton: {
                    url: 'https://tigermedia.dk/'
                },
            },
            {
                img: 'https://maryhillcms.net/icon.png',
                title: 'Maryhill College, Inc.',
                address: 'Lucena City, Philippines',
                subTitle: 'Part Time | December 2022 - September 2024',
                description: `
                    <ul>
                    <li><b>Server Management:</b>
                        <ul>
                        <li>Successfully executed a strategic migration from Cloud/Shared Hosting to a more robust VPS infrastructure, optimizing performance and scalability.</li>
                        <li>Personally oversee and manage the company servers, ensuring uptime, security, and optimal performance.</li>
                        <li>Established an On-Premises VPN Server leveraging Ubuntu Server, enhancing security and streamlining network operations.</li>
                        <li>Deployment of SSL on an On-Premises Windows Server (IIS).</li>
                        <li>Integrated on-premise <a href="https://www.redmine.org/">Redmine</a> (task management system) on our workflow.
                        </ul>
                    </li>
                    <li><b>Software Development:</b>
                        <ul>
                        <li>Spearheaded the development environment setup by containerizing Maryhill CMS using Docker, intialized a git repository with codes pushed to master goes directly to production which streamlined development processes.</li>
                        <li>Started the design and implementation of the Alumni Directory Microsite within my inaugural month, showcasing rapid delivery and precision: 
                            <a href="https://alumni.maryhillcollege.edu.ph" target="_blank">https://alumni.maryhillcollege.edu.ph</a>.
                        </li>
                        <li>Entrusted with the optimization of the Maryhill College CMS. Introduced consistent enhancements and effectively debugged intricate issues utilizing PHP, JavaScript, MySQL, HTML, and CSS.</li>
                        <li>Developed Admission System - 
                            <a href="https://admissions.maryhillcms.net" target="_blank">https://admissions.maryhillcms.net</a>.
                        </li>
                        </ul>
                    </li>
                    </ul>
                `,
                actionButton: {
                    url: 'https://maryhillcollege.edu.ph'
                },
                companyUrl: '',
            },
            {
                img: '/images/sb-basbacio.png',
                title: 'S.B. Basbacio Construction',
                address: 'Lucena City, Philippines',
                subTitle: 'Contact Work | January 2022 - June 2022',
                description: `
                    <ul>
                        <li>Developed a Construction Management System according to their business specifications</li>
                    </ul>`,
                actionButton: {
                    url: 'https://www.youtube.com/watch?v=HMYSRQVyp4M',
                    text: 'View Demo'
                }
            }
        ]
    },
    education_section: {
        descriptionText: null,
        myEducations: [
            {
                img: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/af/DLSCSB_seal.svg/440px-DLSCSB_seal.svg.png',
                title: 'De La Salle-College of Saint Benilde',
                address: 'Taft Ave, Manila',
                subTitle: 'College | Undergrad | 2015 - 2018',
                description: null
            },
            {
                img: 'https://maryhillcms.net/icon.png',
                title: 'Maryhill College, Inc.',
                address: 'Lucena City, Philippines',
                subTitle: 'Elementary - High School | 2005 - 2015',
                description: null
            },
        ]
    },
    contact_section: {
        descriptionText: '',
        address: {
            name: "Gian Lorenzo Abano",
            street: "Zamora St, Ciudad Maharlika Ilayang Iyam, Lucena City",
            provinceAndZip: 'Quezon, 4301'
        }
    }
});