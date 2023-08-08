import data from "../data/data.json";
import DOMPurify from 'dompurify';

const formatDataPoints = (data) => {
    return data.reduce((acc, curr) => {
        return acc + curr.score;
    }, 0);
};

const pointsAvrage = (points,data) => {
    return Math.round(points / data.length);
};
const clean = DOMPurify.sanitize('<b>hello there</b>');
console.log(clean);

document.querySelectorAll("[data-counter='data-counter")[0].innerHTML = pointsAvrage(formatDataPoints(data),data);