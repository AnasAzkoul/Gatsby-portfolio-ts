/* eslint-disable prettier/prettier */
import Button from '.'; 

type Props = {
  styles?: string; 

}

const ResumeButton = ({styles}: Props) => {
  return (
    <Button styles={styles}>
      <a href='/resume.pdf' target='_blank' rel='noopener noreferrer'>
        Resume
      </a>
    </Button>
  )
}

export default ResumeButton; 
