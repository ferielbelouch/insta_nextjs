import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../register.module.css'
import React from "react";
import StyledFirebaseAuth from "firebaseui/StyledFirebaseAuth";
import firebase from "../firebase/clientApp";

// Configure FirebaseUI.
const uiConfig = {
    // Redirect to / after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/",
    // We will display GitHub as auth providers.
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID],
  };

export default function SignInScreen() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device_width, initial_scale=1" />
        <Link className={styles.a} rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
      <div id="wrapper" className={`${styles.flex} ${styles.flex_col} ${styles.h_screen} ${styles.wrapper}`}>

        <div className={`${styles.bg_white} ${styles.py_4} ${styles.shadow} ${styles.bg_gray_800}`}>
            <div className={styles.mx_auto}>


                <div className={`${styles.flex} ${styles.items_center} ${styles.justify_between} ${styles.justify_around_lg}`}>

                    <Link href="#">
                        <Image  src="/images/logo.png" 
                                alt="" 
                                className={styles.w_32} 
                                width={100}
                                height={30}
                                />
                    </Link>

                    <div className={`${styles.capitalize} ${styles.flex} ${styles.font_semibold} ${styles.hidden} ${styles.block_lg} ${styles.my_2} ${styles.space_x_3} ${styles.text_center} ${styles.text_sm}`}>
                        <Link href="#" className={`${styles.py_3} ${styles.px_4}`}>
                            Se connecter
                        </Link>
                        <Link href="#" className={`${styles.bg_pink_500} ${styles.pink_500} ${styles.px_6} ${styles.py_3} ${styles.rounded_md} ${styles.shadow} ${styles.text_white}`}>
                            S'inscrire
                        </Link>
                    </div>

                </div>
            </div>
        </div>

        <div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

            <div className={`${styles.p_12} ${styles.max_w_md} ${styles.max_w_xl}  ${styles.mt_250} ${styles.my_0} ${styles.my_12} ${styles.mx_auto} ${styles.p_6}  ${styles.card_form}`}>
                <h1 className={`${styles.text_3xl} ${styles.text_xl} ${styles.font_semibold} ${styles.mb_6}`}> Se connecter </h1>
                <p className={`${styles.mb_2} ${styles.text_black} ${styles.text_lg}`}> Connectez-vous pour accéder à votre compte </p>
                <form action="#">
                    <div className={`${styles.flex} ${styles.flex_row} ${styles.flex_col} ${styles.space_x_2}`}>
                        <input type="text" placeholder="Email"  className={`${styles.bg_gray_200} ${styles.mb_2} ${styles.shadow_none}  ${styles.bg_gray_800} ${styles.border_input}`} />
                        <input type="password" placeholder="Mot de passee" className={`${styles.bg_gray_200} ${styles.mb_2} ${styles.shadow_none}  ${styles.bg_gray_800}`} />
                    </div>
                    <button type="submit" className={`${styles.bg_gradient_to_br} ${styles.from_pink_500} ${styles.py_3} ${styles.rounded_md} ${styles.text_white} ${styles.text_xl} ${styles.to_red_400} ${styles.w_full}`}>Se connecter</button>
                    <div className={`${styles.text_center} ${styles.mt_5} ${styles.space_x_2}`}>
                        <p className={styles.text_base}> Vous n'avez pas encore de compte ? <Link href="form-login.html"> Inscrivez-vous </Link></p>
                    </div>
                </form>
            </div>
        </div>
        </div>
      </main>
    </>
  );
}
