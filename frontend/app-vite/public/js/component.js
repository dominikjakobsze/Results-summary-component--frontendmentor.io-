import data from "../data/data.json";
import DOMPurify from 'dompurify';

const errorHandler = (message) => {
    console.log("score is not a number");
    //optional: write your logic here to inform user about the error before stopping the execution of the script
    throw new Error(message);
};

const formatDataPoints = (data) => {
    return data.reduce((acc, curr) => {
        if (Number(curr.score) == NaN) {
            errorHandler("Score is not a number - data is corrupted");
        }
        return acc + curr.score;
    }, 0);
};

const pointsAvrage = (points,data) => {
    return Math.round(points / data.length);
};

const clean = DOMPurify.sanitize(pointsAvrage(formatDataPoints(data),data), {ALLOWED_TAGS: [], ALLOWED_ATTR: []});
document.querySelectorAll("[data-counter='data-counter")[0].innerHTML = clean;

document.querySelectorAll("[data-counter='data-counter")[0].addEventListener("click", () => {
    console.log("click");
});
