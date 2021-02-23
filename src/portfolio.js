/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
   animated: true // set to false to use static SVG
};

const greeting = {
   username: "Naim Biswas",
   title: "Hi all, I'm Naim Biswas",
   subTitle: emoji(
      "A passionate Web Developer 🚀 having an experience of designing and building Web  applications with JavaScript / Reactjs / Laravel / PHP and some other cool libraries and frameworks."
   ),
   resumeLink:
      "https://naimbiswas.github.io/portfolio",
   displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
   github: "https://github.com/NaimBiswas",
   linkedin: "https://www.linkedin.com/in/naim-biswas/",
   gmail: "contact@davidrakosi.com",
   // gitlab: "https://gitlab.com/",
   facebook: "https://www.facebook.com/naimbiswas.1",
   // medium: "https://medium.com/@davidrakosi",
   stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
   instagram: 'https://www.instagram.com/davidrakosi/',
   twitter: 'https://twitter.com/davidrakosi_',
   display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
   title: "What I do",
   subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
   skills: [
      emoji(
         "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
      ),
      emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
      emoji(
         "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
      )
   ],

   /* Make Sure to include correct Font Awesome Classname to view your icon
 https://fontawesome.com/icons?d=gallery */

   softwareSkills: [
      {
         skillName: "html-5",
         fontAwesomeClassname: "fab fa-html5"
      },
      {
         skillName: "css3",
         fontAwesomeClassname: "fab fa-css3-alt"
      },
      {
         skillName: "sass",
         fontAwesomeClassname: "fab fa-sass"
      },
      {
         skillName: "JavaScript",
         fontAwesomeClassname: "fab fa-js"
      },
      {
         skillName: "reactjs",
         fontAwesomeClassname: "fab fa-react"
      },
      {
         skillName: "php",
         fontAwesomeClassname: 'fab fa-php'

      },
      {
         skillName: "wordpress",
         fontAwesomeClassname: 'fab fa-wordpress-simple'

      },
      {
         skillName: "laravel",
         fontAwesomeClassname: 'fab fa-laravel'

      },
      {
         skillName: "npm",
         fontAwesomeClassname: "fab fa-npm"
      },
      {
         skillName: "sql-database",
         fontAwesomeClassname: "fas fa-database"
      },
      {
         skillName: "firebase",
         fontAwesomeClassname: "fas fa-fire"
      }
   ],
   display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
   display: true, // Set false to hide this section, defaults to true
   schools: [
      {
         schoolName: "City College Pabna",
         logo: require("./assets/images/harvardLogo.png"),
         subHeader: "Student of Science",
         duration: "September 2018 - April 2020",
         // desc: "Participated in the research of XXX and published 3 papers.",
         // descBullets: [
         //    "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
         // ]
      },
      // {
      //    schoolName: "Stanford University",
      //    logo: require("./assets/images/stanfordLogo.png"),
      //    subHeader: "Bachelor of Science in Computer Science",
      //    duration: "September 2013 - April 2017",
      //    desc:
      //       "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      //    descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
      // }
   ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
   viewSkillBars: true, //Set it to true to show Proficiency Section
   experience: [
      {
         Stack: "HTML/CSS3", //Insert stack or technology you have experience in
         progressPercentage: "90%" //Insert relative proficiency in percentage
      },
      {
         Stack: "BootStrap/TailwindCSS",
         progressPercentage: "70%"
      },
      {
         Stack: "Styled Components",
         progressPercentage: "85%"
      },
      {
         Stack: "JavaScript",
         progressPercentage: "60%"
      },
      {
         Stack: "Reactjs",
         progressPercentage: "45%"
      },
      {
         Stack: "PHP",
         progressPercentage: "65%"
      },
      {
         Stack: "Laravel",
         progressPercentage: "80%"
      },
      {
         Stack: "API",
         progressPercentage: "60%"
      },
      {
         Stack: "WordPress",
         progressPercentage: "89%"
      },
   ],
   displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
   display: true, //Set it to true to show workExperiences Section
   experience: [
      {
         role: "Naim Biswas",
         company: "",
         companylogo: "https://avatars.githubusercontent.com/u/67551591?s=460&u=458c2aebcd1ffead986401a9e9e536ba20cadf07&v=4",
         date: "",
         desc:
            "No Previous Work Experience",
         descBullets: [
            "Looking For New Opportunity",

         ]
      },
      // {
      //    role: "Product Owner (PSD2)",
      //    company: "Erste Bank",
      //    companylogo: require("./assets/images/ersteLogo.jpg"),
      //    date: "July 2019 – September 2020",
      //    desc:
      //       "I lead software developers building the API for the bank in order to fulfil the PSD2 regulation requirements."
      // },
      // {
      //    role: "Junior Information Security & Systems Representative",
      //    company: "Vodafone",
      //    companylogo: require("./assets/images/vodafoneLogo.png"),
      //    date: "November 2018 – July 2019",
      //    desc:
      //       "I've conducted internal audit making sure the organization is compliant with the GDPR."
      // }
   ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
   githubConvertedToken: '685d40f1f90557a6478a81c27211c2f4b69364fd',
   githubUserName: "NaimBiswas", // Change to your github username to view your profile in Contact Section.
   showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
   display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
   title: "Big Projects",
   subtitle: "SOME BIG PROJECT THAT I HAVE DONE FOR MY PRACTICE",
   projects: [
      {
         image: "https://github.com/NaimBiswas/portfolio/blob/main/images/Google-Naim-Biswas.png?raw=true",
         projectName: "Google v2.0",
         projectDesc: "Hi there, This is a google project. This Google also provide real-time search result like our real Google. But this Google creator is 😉 Naim Biswas. This google have one more feature like oneClick for change color. I think this is a really good feature. Thank You",
         footerLink: [
            {
               name: "Visit Website",
               url: "https://g00gle-naimbiswas.web.app/"
            }
            //  you can add extra buttons here.
         ]
      },
      {
         image: "https://github.com/NaimBiswas/portfolio/blob/main/images/Netflix-Clone-Naim-Biswas-React-js.jpg?raw=true",
         projectName: "Netflix Project",
         projectDesc: "Hi there,This is a React js App. It's a Netflix movie project. Try to create similar. This is not 100% same like netflix but I am trying to made similar. This app has authentication and payment system.",
         footerLink: [
            {
               name: "Visit Website",
               url: "https://netflix-clone-naim.web.app/"
            }
         ]
      },
      {
         image: "https://github.com/NaimBiswas/portfolio/blob/main/images/Thousand-Png-By-%F0%9F%91%89-Naim-Biswas.png?raw=true",
         projectName: "Thousand Png",
         projectDesc: "Photo Website. Made with Reactjs And Bootstrap, react router, and react loader are aslo included. This website all most look like Unsplash. All the Image are coming from third party api's. Build By: 😉",
         footerLink: [
            {
               name: "Visit Website",
               url: "https://thousand-png.web.app/"
            }
         ]
      },
      {
         image: "https://github.com/NaimBiswas/portfolio/blob/main/images/Challange-Your-Self-Naim-Biswas.png?raw=true",
         projectName: "Quiz App",
         projectDesc: "This is a Quiz App. It's have over 25 categories. Every time each category have 15 question and and per question for right answer 1 mark and for wrong answer -.5. And the good think is that if you refresh this site it will show new category question.😉👉Naim Biswas",
         footerLink: [
            {
               name: "Visit Website",
               url: "https://react-quize-app.web.app/"
            }
         ]
      },
   ],
   display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
   title: emoji("Achievements And Certifications 🏆 "),
   subtitle:
      "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

   achievementsCards: [
      {
         title: "Google Code-In Finalist",
         subtitle:
            "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
         image: require("./assets/images/codeInLogo.webp"),
         footerLink: [
            {
               name: "Certification",
               url:
                  ""
            },
            {
               name: "Award Letter",
               url:
                  ""
            },
            {
               name: "Google Code-in Blog",
               url:
                  ""
            }
         ]
      },
      {
         title: "Google Assistant Action",
         subtitle:
            "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
         image: require("./assets/images/googleAssistantLogo.webp"),
         footerLink: [
            {
               name: "View Google Assistant Action",
               url:
                  ""
            }
         ]
      },

      {
         title: "PWA Web App Developer",
         subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
         image: require("./assets/images/pwaLogo.webp"),
         footerLink: [
            { name: "Certification", url: "" },
            {
               name: "Final Project",
               url: ""
            }
         ]
      }
   ],
   display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
   title: "Blogs",
   subtitle:
      "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

   blogs: [
      {
         url:
            "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
         title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
         description:
            "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
      },
      {
         url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
         title: "Why REACT is The Best?",
         description:
            "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
      }
   ],
   display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
   title: "TALKS",
   subtitle: emoji(
      ""
   ),

   talks: [
      {
         title: "",
         subtitle: "",
         slides_url: "",
         event_url: ""
      }
   ],
   display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
   title: emoji("Podcast 🎙️"),
   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

   // Please Provide with Your Podcast embeded Link
   podcast: [
      ""
   ],
   display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
   title: emoji("Contact Me ☎️"),
   subtitle:
      "Discuss a project or just want to say hi? My Inbox is open for all.",
   number: "(+880) 1774697860",
   email_address: "nayeembiswas2@gmail.com"
};

// Twitter Section

const twitterDetails = {
   userName: "NaimBiswas11", //Replace "twitter" with your twitter username without @
   display: true // Set true to display this section, defaults to false
};

export {
   illustration,
   greeting,
   socialMediaLinks,
   skillsSection,
   educationInfo,
   techStack,
   workExperiences,
   openSource,
   bigProjects,
   achievementSection,
   blogSection,
   talkSection,
   podcastSection,
   contactInfo,
   twitterDetails
};
