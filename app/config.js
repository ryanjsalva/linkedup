const DEVELOPMENT = {
    firebase: {
        apiKey: "AIzaSyCB8SVOByJriee8S2oodYfTZbKDbdKtUZY",
        authDomain: "linkedup-b3ea1.firebaseapp.com",
        databaseURL: "https://linkedup-b3ea1.firebaseio.com",
        storageBucket: "linkedup-b3ea1.appspot.com",
    }
};

const PRODUCTION = DEVELOPMENT;
export default (process.env.NODE_ENV === 'development' ? DEVELOPMENT : PRODUCTION)