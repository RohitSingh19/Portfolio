import {Portfolio} from "./portfolio.model";

const portfolioData : Portfolio = {
  greetingMessage: 'Hello !!',
  userName: 'Rohit Singh',
  skills: [
    {
        id: 1,
        value: 'Data Structures and Algorithms'
    },
    {
        id: 2,
        value: 'System Design'
    },
    {
        id: 3,
        value: 'Microservices'
    },
    {
        id: 4,
        value: 'Object Oriented Programming'
    }
  ],
  BioHeading: 'Few words about myself!',
  userProfessions: [
    {
        id: 1,
        value: 'Senior Software Engineer'
    },
    {
        id: 2,
        value: 'Open Source Enthusiast'
    },
    {
        id: 3,
        value: 'Blogger'
    }
  ],
  socialLinks: [
    {
        id: 1,
        name: 'Github',
        url: 'https://github.com/RohitSingh19'
    },
    {
        id: 2,
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/rohit-singh19/'
    },
    {
        id: 3,
        name: 'Facebook',
        url: 'https://www.facebook.com/profile.php?id=100004338127318"'
    },
    {
        id: 4,
        name: 'Instagram',
        url: 'https://www.instagram.com/singh.rohit1909/'
    },
    {
        id: 5,
        name: 'Twitter',
        url: 'https://x.com/singh_rohit09'
    }
  ],
  bio: `From building a simple "Hello World" to tackling complex real-world challenges, my programming journey has been nothing short of exciting. Despite acquiring extensive knowledge in various areas of the tech world, I still consider myself a lifelong learner.
       As a Full Stack Developer, my expertise spans OOP, Data Structures & Algorithms, REST APIs, C#, Java, .NET Core, SQL, Azure, Git, CI/CD, Angular, and ReactJS. My daily responsibilities involve transforming requirements into scalable, efficient code—whether building systems from the ground up or enhancing existing features.
       I’m passionate about crafting engaging, interactive projects with code and enjoy sharing insights through writing and conversations.`
}

export default portfolioData;