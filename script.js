const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");
const confirmEl = document.querySelector(".confirm");
const closeEl = document.querySelector(".close");
const title = document.querySelector(".title");
const content = document.querySelector(".content");
const btnOk = document.querySelector(".btn-ok");
const btnCancel = document.querySelector(".btn-cancel");

/*
Default way to do it
*/
// btn1.addEventListener("click", () => {
//     changeBg("red");
// })

// btn2.addEventListener("click", () => {
//     changeBg("purple");
// })


// function changeBg(color) {
//     let x = confirm("Change Background to " + color);
//     if (x == true) {
//         document.body.style.backgroundColor = color;
//     }
// }

/* 
Custom Confirm class
*/

class ShowConfirm {
    constructor(title, content, ok, cancel) {
        this.title = title;
        this.content = content;
        this.ok = ok;
        this.cancel = cancel;
    }

    trigger(callbackFn) {
        title.textContent = this.title;
        content.textContent = this.content;
        btnOk.innerHTML = this.ok;
        btnCancel.innerHTML = this.cancel;

        confirmEl.classList.remove("close-modal");
        // confirmEl.classList.add("open-modal");

        closeEl.addEventListener("click", this.closeModal);
        btnCancel.addEventListener("click", this.closeModal);
        btnOk.addEventListener("click", () => {
            alert("LOL")
            callbackFn();
            this.closeModal();
        })
    }

    closeModal() {
        confirmEl.classList.add("close-modal");
    }
}


btn1.addEventListener("click", () => {
    changeBg("red");
});

btn2.addEventListener("click", () => {
    changeBg("purple");
});


const changeBack = new ShowConfirm("Change Background", "You are about to change the background!", "Change", "Don't change");


function changeBg(color) {
    changeBack.trigger(setBg);
    function setBg() {
        document.body.style.backgroundColor = color;
    }
}
