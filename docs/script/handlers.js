const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
  

document
    .getElementsByClassName("links")[0]
    .addEventListener("click", async function () {
        let ref = document
                    .getElementsByClassName("content")[0]
                    .classList
        ref.toggle("shadow");
        await sleep(2000);
        ref.toggle("shadow");
    });

document
    .getElementsByClassName("links")[1]
    .addEventListener("click", async function () {
        let ref = document
                    .getElementsByClassName("media")[0]
                    .classList
        ref.toggle("shadow");
        await sleep(2000);
        ref.toggle("shadow");
    });

document
    .getElementsByClassName("links")[2]
    .addEventListener("click", async function () {
        let ref = document
                    .getElementsByClassName("media")[1]
                    .classList
        ref.toggle("shadow");
        await sleep(2000);
        ref.toggle("shadow");
    });

