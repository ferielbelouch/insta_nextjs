This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



npm install firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_ofZiDc91HG40vwtHu1DkV3485KaCJ8Q",
  authDomain: "instaapp-49038.firebaseapp.com",
  projectId: "instaapp-49038",
  storageBucket: "instaapp-49038.appspot.com",
  messagingSenderId: "1006061091432",
  appId: "1:1006061091432:web:7d19c75b15a262918a99dd",
  measurementId: "G-9QBGK3NHDE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



<!-- Firebase -->
Pour héberger votre site sur Firebase Hosting, vous devez disposer de la CLI Firebase (un outil de ligne de commande).
Exécutez la commande npm pour installer la CLI ou la mettre à jour.
npm install -g firebase-tools   

Vous pouvez procéder au déploiement dès maintenant ou ultérieurement. Pour l'effectuer tout de suite, ouvrez une fenêtre de terminal, puis accédez au répertoire racine de votre application Web, ou créez-en un.

Se connecter à Google
firebase login

Lancer le projet 
firebase init

Lorsque vous êtes prêt, déployez votre application Web
firebase deploy