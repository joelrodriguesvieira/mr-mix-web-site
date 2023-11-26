window.addEventListener("load", main);

function main() {
    const circlePink = document.querySelector("#pink");
    const circleWhite = document.querySelector("#white");
    const circleBrown = document.querySelector("#brown");
    const circleYellow = document.querySelector("#yellow");

    circlePink.addEventListener("click", (e) => {
        let path = getPath(e);
        imgSlider(path);
        circleChangue({target: circlePink});
    });

    circleWhite.addEventListener("click", (e) => {
        let path = getPath(e);
        imgSlider(path);
        circleChangue({target: circleWhite});
    });

    circleBrown.addEventListener("click", (e) => {
        let path = getPath(e);
        imgSlider(path);
        circleChangue({target: circleBrown});
    });

    circleYellow.addEventListener("click", (e) => {
        let path = getPath(e);
        imgSlider(path);
        circleChangue({target: circleYellow});
    });

};

function getPath(e) {
    let color = e.target.id;
    let path = `src/imgs/${color}.png`;
    return path;
};

function imgSlider(path) {
    const milkShake = document.querySelector("#milkshake");
    milkShake.src = path;
};

function circleChangue(e) {
    const circle = document.querySelector('.circle');
    if (e.target.id == 'pink') {
        circle.style.background = '#ffc0cb';
    } else if (e.target.id == 'white') {
        circle.style.background = '#d3d3d3'
    } else if (e.target.id == 'brown') {
        circle.style.background = '#8b4414';
    } else {
        circle.style.background = '#daa520';
    }
}