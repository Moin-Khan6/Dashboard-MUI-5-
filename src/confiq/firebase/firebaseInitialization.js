import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBxfB3jUjAIPEMZnPi8PNoJ8_BfW5BekyA",
  authDomain: "dashboarapp-350f9.firebaseapp.com",
  projectId: "dashboarapp-350f9",
  storageBucket: "dashboarapp-350f9.appspot.com",
  messagingSenderId: "876321244612",
  appId: "1:876321244612:web:19fcafb8c22a01b861d091",
  measurementId: "G-N08306MF1D"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  export default app;