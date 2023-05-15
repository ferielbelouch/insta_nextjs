import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from './profile.module.css'

export default function sidebarNav() {
  return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar_inner} data-simplebar>
                <div className={`${styles.flex} ${styles.flex_col} ${styles.items_center} ${styles.my_6} `}>
                    <div className={`${styles.bg_gradient_to_tr} ${styles.from_yellow_600} ${styles.to_pink_600} ${styles.p_1} ${styles.rounded_full} ${styles.transition} ${styles.mr_2}  ${styles.w_24} ${styles.h_24}`}>
                        <Image  src="/images/avatars/avatar-2.jpg"
                                className={`${styles.img} ${styles.bg_gray_200} ${styles.border_4} ${styles.border_white} ${styles.rounded_full} ${styles.w_full} ${styles.h_full}`}
                                width={100}
                                height={100}
                        />
                    </div>
                    <Link   href="#" 
                            className={`${styles.a} ${styles.text_xl} ${styles.font_medium} ${styles.capitalize} ${styles.mt_4} ${styles.uk_link_reset}`}
                        > 
                        Feriel BELOUCHRANI
                    </Link>
                </div>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <Link className={styles.a} href="#"> 
                            <h3 className={styles.h3}> Accueil </h3> 
                        </Link> 
                    </li>
                    <li className={styles.li}>
                        <Link className={styles.a} href="#"> 
                            
                            <h3 className={styles.h3}> Rechercher </h3>
                        </Link> 
                    </li>
                    <li className={`${styles.li} ${styles.active}`}>
                        <Link className={styles.a} href="#"> 
                            <h3 className={styles.h3}> Paramètres </h3> 
                        </Link>
                    </li>
                    <li className={styles.li}>
                        <Link className={styles.a} href="#"> 
                            <h3 className={styles.h3}> Mon Profil </h3> 
                        </Link> 
                    </li>
                    <li className={styles.li}>
                        <Link className={styles.a} href="#"> 
                        <h3 className={styles.h3}> Se déconnecter </h3>
                        </Link> 
                    </li>
                </ul>
            </div>
        </div>
  )
}
