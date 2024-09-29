import React from "react";
import {AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare} from "react-icons/ai";
import {SocialLink} from "../../assets/portfolio.model";

interface SocialIconsProps {
    links: SocialLink[];
}

const SocialIcons:React.FC<SocialIconsProps> = ({links}) => {
  return (
    <ul className="home-about-social-links">
        {
            links.map((link) => (
                <li className="social-icons">
                    <a
                        href={link.url}
                        target="_blank"
                        className="icon-colour home-social-icons"
                    >
                        {getSocialIcon(link)}
                    </a>
                </li>
            ))
        }
    </ul>
  );
};



const getSocialIcon = (socialLink: SocialLink): JSX.Element  => {
    switch(socialLink.name) {
      case "Github":
        return <AiFillGithub />;
      case "Facebook":
        return <AiFillFacebook />;
      case "LinkedIn":
        return <AiFillLinkedin />;
      case "Instagram":
        return <AiFillInstagram />;
      case "Twitter":
        return <AiFillTwitterSquare />;
      default:
        return <></>;
    }
}

export default SocialIcons;
