let p = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve("Success");
    } else {
        reject("Failed");
    }
})

p.then((message) => {
    console.log(`This is in the then ${message}`);
}).catch((message) => {
    console.log(`This is in the catch ${message}`)
});

const userLeft = false;
const userWatchingCatMeme = false;

function watchTutotialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: "User left",
                message: ":("
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: "User Watching Cat Meme",
                message: "WebDevSimplified < Cat"
            })
        } else {
            resolve("Thumbs up and Subscribe!")
        }
    })
}

watchTutotialPromise().then((message) => {
    console.log(`Success ${message}`);
}).catch((error) => {
    console.log(`${error.name} ${error.message}`);
})

const recordVideoOne = new Promise((resolve, reject) => {
    resolve("Video 1 Recorded");
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve("Video 2 Recorded");
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve("Video 3 Recorded");
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message => {
    console.log(message);
}))