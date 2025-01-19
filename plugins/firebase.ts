import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import type { Firestore } from "firebase/firestore";

// Firebase yapılandırması
const firebaseConfig = {


  };


// Firebase ve Firestore'u başlat
const firebaseApp = initializeApp(firebaseConfig);
const firestore: Firestore = getFirestore(firebaseApp);

// Firebase ve Firestore'u global olarak kullanılabilir hale getiriyoruz
export default defineNuxtPlugin(() => {
  return {
    provide: {
      firebaseApp,
      firestore,
    },
  };
});
