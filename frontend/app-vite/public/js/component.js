import data from "../data/data.json";

const formatDataPoints = (data) => {
    return data.reduce((acc, curr) => {
        return acc + curr.score;
    }, 0);
};

const pointsAvrage = (points,data) => {
    return Math.round(points / data.length);
}
console.log(pointsAvrage(formatDataPoints(data),data));

console.log(document.querySelectorAll("[data-counter='data-counter")[0]);