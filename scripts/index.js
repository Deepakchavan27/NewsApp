// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import { navbar } from "../components/navbar.js";

let a = document.getElementById("navbar");
a.innerHTML = navbar();

import { searchNews, append } from "./fetch.js"

let search = (e) => {
    if (e.key === "Enter") {
        searchNews();
        let value = document.getElementById("search_input").value;
        searchNews(value).then((data) => {
            console.log(data.articles)
            let result = document.getElementById("results");
            result.innerHTML = null;
           append(data.articles, result)
        });


    }
};

document.getElementById("search_input").addEventListener("keydown", search);