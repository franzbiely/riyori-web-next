import styles from "./layout.module.css";
import Image from 'next/image';
import CloseIcon from '@mui/icons-material/Close';

export default function Subinnerheader({title = ''}) {
  const handleBack = () => {
    window && window.history.back();
  }
  return (    
    <div className={styles.header}>
      
      <div className={styles.container}>
          <div className={styles.column}>
            <Image className='image' src="/images/ryori-logo-red-small.png" alt="Ryori" width={25} height={31} />          
          </div>
          <div className={`${styles.column} ${styles.f8}`}>
            <h4 className={styles.greetings}>{title}</h4>            
          </div>
          <div>
            <CloseIcon style={{cursor:'pointer'}}onClick={handleBack} />
          </div>
      </div>
    </div>
  )
}
