/* eslint-disable prettier/prettier */
import { FiGithub } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { SlSocialTwitter } from 'react-icons/sl';
import {FaLinkedinIn} from 'react-icons/fa';


type Props = {
  variant: 'github' | 'instagram' | 'linkedin' | 'twitter'; 
}

const SocialIcon = ({variant}: Props) => {
  const iconStyles = `text-[2.2rem] text-gray hover:text-secondary-500 cursor-pointer transition-150 hover:translate-up-3 mb-10`
  
  if (variant === `github`) {
    return (
      <a href='https://github.com/AnasAzkoul' target='_blank' rel="noreferrer">
        <FiGithub className={iconStyles}/>
      </a>  
    )
  }
  
  if (variant === `instagram`) {
    return (
      <a href='https://github.com/AnasAzkoul' target='_blank' rel="noreferrer">
        <BsInstagram className={iconStyles}/>
      </a>  
    )
  }
  
  if (variant === `linkedin`) {
    return (
      <a href='https://github.com/AnasAzkoul' target='_blank' rel="noreferrer">
        <SlSocialTwitter className={iconStyles}/>
      </a>  
    )
  }
  
  if (variant === `twitter`) {
    return (
      <a href='https://github.com/AnasAzkoul' target='_blank' rel="noreferrer">
        <FaLinkedinIn className={iconStyles}/>
      </a>  
    )
  }
  

  return (
    <div>Social Link</div>
  )
}


export default SocialIcon