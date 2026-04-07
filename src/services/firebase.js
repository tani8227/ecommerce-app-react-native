import { initializeApp } from "@react-native-firebase/app";
import { getAuth } from "@react-native-firebase/auth";

const firebaseConfig =
{
    apiKey: "YOUR_KEY",
    authDomain: "YOUR_DOMAIN",
    projectId: "ecommerce-6f1ce",
    appId: "YOUR_APP_ID",
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;