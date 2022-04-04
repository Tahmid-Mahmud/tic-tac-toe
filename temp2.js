token = prompt("Enter admin db token: ");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyByHb3UrwlKwpA6gdLNRJrYkVhyWkbycXc",
    authDomain: `${token}.firebaseapp.com`,
    databaseURL: `https://${token}-default-rtdb.firebaseio.com`,
    projectId: token,
    storageBucket: `${token}hacking-projects.appspot.com`,
    messagingSenderId: "279153016474",
    appId: "1:279153016474:web:46ed8dc5d4a525569ca923",
    measurementId: "G-MNV97733M4",
};

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

//let fb_db2=firebase.database().ref(prompt("Enter main dir: "))

function show() {
    firebase
        .database()
        .ref("/")
        .on("value", (a) => {
            alert(JSON.stringify(a.val(), null, 4));
        });
}

function reset() {
    firebase.database().ref("modes").set({ play: false });
    let fb_db1 = firebase.database().ref(prompt("Enter main dir: "));
    fb_db1.set({ playerX: "Tahmid" });
}

function setName() {
    let fb_db1 = firebase.database().ref(prompt("Enter main dir: "));
    let name = prompt("Enter your username: ");
    fb_db1.update({ playerX: name });
    localStorage.setItem("admin", name);
}

function play() {
    window.open("./computer.html");
    firebase.database().ref("modes").set({
        notify: true,
    });
}

function flow() {
    let code =
        "1. Check wheather the database is ok.\n\n2. Be careful not to sent additional query requests to the database.\n\n3. Play with friends => Admin Panel (=>Username)[optional] => Playground\n\n4.Click Notification => Name => Go\n";
    alert(code);
}


// compressed
// token = prompt("Enter admin db token: ");const firebaseConfig={apiKey: "AIzaSyByHb3UrwlKwpA6gdLNRJrYkVhyWkbycXc",authDomain: `${token}.firebaseapp.com`,databaseURL: `https://${token}-default-rtdb.firebaseio.com`,projectId: token,storageBucket: `${token}hacking-projects.appspot.com`,messagingSenderId: "279153016474",appId: "1:279153016474:web:46ed8dc5d4a525569ca923",measurementId: "G-MNV97733M4"};if (firebase.apps.length===0){firebase.initializeApp(firebaseConfig);}function show(){firebase.database().ref("/").on("value",(a)=>{alert(JSON.stringify(a.val(), null, 4));})}function reset(){firebase.database().ref("modes").set({ play: false });let fb_db1 = firebase.database().ref(prompt("Enter main dir: "));fb_db1.set({ playerX: "Tahmid" });}function setName(){let fb_db1 = firebase.database().ref(prompt("Enter main dir: "));let name = prompt("Enter your username: ");fb_db1.update({ playerX: name });localStorage.setItem("admin", name);}function play(){window.open("./computer.html");firebase.database().ref("modes").set({notify: true});}function flow(){let code ="1. Check wheather the database is ok.\n\n2. Be careful not to sent additional query requests to the database.\n\n3. Play with friends => Admin Panel (=>Username)[optional] => Playground\n\n4.Click Notification => Name => Go\n";alert(code);}