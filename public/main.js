var firebaseConfig = {
    apiKey: "AIzaSyC-M-D90qOuEnpgZ1WHiV0oFMf7xG_03eQ",
    authDomain: "street-art-5f570.firebaseapp.com",
    projectId: "street-art-5f570",
    storageBucket: "street-art-5f570.appspot.com",
    messagingSenderId: "542099841500",
    appId: "1:542099841500:web:5fabb74c3b2303eb566f19"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const artistsRef = firebase.database().ref('artists');

const artistForm = document.getElementById('artist-form');
artistForm.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    const artistName = getInputVal('artist-name');
    const artistBio = getInputVal('artist-bio');
    const artistURL = getInputVal('url');
    saveToFirebase(artistName, artistBio, artistURL);

    document.querySelector('.alert').style.display = 'block';

    setTimeout(() => {
        document.querySelector('.alert').style.display = '';
    }, 3000)
}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveToFirebase(artistName, artistBio, artistURL) {
    let newArtistsRef = artistsRef.push();
    newArtistsRef.set({
        artistname: artistName,
        artistbio: artistBio,
        artisturl: artistURL
    })
}
