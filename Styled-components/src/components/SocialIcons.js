import React from 'react'
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa'
import { StyledSocialIcons } from './styles/SocialIcons.styled'
const SocialIcons = () => {
    return (
        <StyledSocialIcons>
            <li>
                <a href='http://twitter.com'>
                    <FaTwitter />
                </a>
            </li>
            <li>
                <a href='http://facebook.com'>
                    <FaFacebook />
                </a>

            </li>
            <li>
                <a href='http://linkedin.com'>
                    <FaLinkedin />
                </a>
            </li>
        </StyledSocialIcons>
    )
}

export default SocialIcons