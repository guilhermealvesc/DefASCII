const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
  

document
    .getElementsByClassName("word")[0]
    .addEventListener("click", async function () {
        let ref = document
                    .getElementsByClassName("content")[0]
                    .classList
        ref.toggle("hover");
        await sleep(2000);
        ref.toggle("hover");
    });

document
    .getElementsByClassName("word")[1]
    .addEventListener("click", async function () {
        let ref = document
                    .getElementsByClassName("info")[0]
                    .classList
        ref.toggle("hover");
        await sleep(2000);
        ref.toggle("hover");
    });

document
    .getElementsByClassName("word")[2]
    .addEventListener("click", async function () {
        let ref = document
                    .getElementsByClassName("info")[1]
                    .classList
        ref.toggle("hover");
        await sleep(2000);
        ref.toggle("hover");
    });

