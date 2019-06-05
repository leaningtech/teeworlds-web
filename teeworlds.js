function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    await timeout(500);
    startLoadingScreen();
    for (let i = 10; i <= 100; i+=10)
    {
        await timeout(200);
        updateLoadingScreen(i);
    }
    endLoadingScreen();
    let canvas = document.getElementById("gamecanvas");
    let ctx = canvas.getContext("2d");
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let overlay = document.getElementById("overlay");
    overlay.onclick = () => {
        overlay.requestPointerLock();
    };
    document.onpointerlockchange = () => {
        if (document.pointerLockElement == overlay) {
            overlay.style.display = "none";
        } else {
            overlay.style.display = "flex";
        }
    };
}

main();