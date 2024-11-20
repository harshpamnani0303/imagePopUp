document.querySelector("#center");

addEventListener('mousemove', function (details) {
    // console.log(details.clientX, details.clientY);
});





const btn = document.querySelector("#throttle");

const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

document.querySelector('#center').addEventListener("mousemove",
    throttleFunction((details) => {
        //    your les repeation code
        var div = document.createElement("div");
        div.classList.add("imagediv")
        div.style.left = details.clientX + 'px';
        div.style.top = details.clientY + 'px';

        var img = document.createElement("img");
        let random = Math.floor(Math.random() * 10);
        arr = ["https://images.unsplash.com/photo-1726410247984-7cae70aca394?q=80&w=1842&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1478382188900-5bb598fe27d3?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" ,

        "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1583484082868-4b9ffd127263?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

        "https://images.unsplash.com/photo-1670292659366-bcb6b132dbcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI5fHx8ZW58MHx8fHx8",

        "https://plus.unsplash.com/premium_photo-1692976235042-32bc7f884c79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY0fHx8ZW58MHx8fHx8" ,

        "https://images.unsplash.com/photo-1704584638616-cde1408fea2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDY2fHx8ZW58MHx8fHx8",

        "https://images.unsplash.com/photo-1646526751837-aaf411d17dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcxfHx8ZW58MHx8fHx8",

        "https://images.unsplash.com/photo-1542247105-92a84aab9ef0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDc4fHx8ZW58MHx8fHx8",

        "https://images.unsplash.com/photo-1540806423794-b52c35ec54fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8"

        ]
        img.setAttribute("src", arr[random])

        div.appendChild(img);

        document.body.appendChild(div);

        gsap.to(img, {
            y: "0",
            ease: Power1,
            duration: .6
        });

        gsap.to(img, {
            y: "100%",
            delay: .6,
            ease: Power2,
            duration: .3
        });

        setTimeout(function () {
            div.remove();
        }, 2000)
    }, 400));
