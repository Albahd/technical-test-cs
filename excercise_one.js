
function Numbers() {
    for (let i = 1; i < 101; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            document.write(`<p>CyberClick</p>`);

        } else if (i % 3 === 0) {
            document.write(`<p>Cyber</p>`);
        }
        else if (i % 5 === 0) {
            document.write(`<p>Click</p>`);
        }

        else { document.write(`<p>${i}</p>`) }
    }



}
Numbers()


