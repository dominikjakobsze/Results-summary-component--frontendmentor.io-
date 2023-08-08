"use strict";
import data from "../data/data.json";
import DOMPurify from 'dompurify';

const errorHandler = (message) => {
    //optional: write your logic here to inform user about the error before stopping the execution of the script
    throw new Error(message);
};

const formatDataPoints = (data) => {
    return data.reduce((acc, curr) => {
        if (isNaN(Number(curr.score))) {
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
    //just to make sure that throw stops the execution of the script
    console.log("click");
});

const renderSummaryContainer = document.querySelector("[data-target='summary-container']");

const renderSummaryItems = (data) => {
    renderSummaryContainer.innerHTML = data.map((item) => {
        return `<section class="p-2 w-full bg-[rgb(255,250,242)] rounded-xl flex flex-row flex-wrap gap-[4%] items-center justify-center">
        <img class="flex-[0_0_10%] object-contain" src="${item.icon}"/>
        <p class="text-orange-300 flex-[0_0_45%] overflow-hidden font-semibold">${item.category}</p>
        <p class="flex-[0_0_35%] font-semibold text-gray-700">${item.score} <span class="text-gray-300">/ 100</span></p>
        </section>`
    }).join("");
};

renderSummaryItems(data);