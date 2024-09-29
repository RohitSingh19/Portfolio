export interface Portfolio {
    greetingMessage: string;
    userName: string;
    userProfessions: Profession[];
    BioHeading: string;
    bio: string;
    skills: Skill[];       
    socialLinks: SocialLink[];
}

export interface SocialLink {
    id: number;
    name: string;
    url: string;
}

export interface Profession {
    id: number;
    value: string;
}

export interface Skill {
    id: number;
    value: string;
}




