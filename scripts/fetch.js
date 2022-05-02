

let searchNews = async (value) => {
    try {
        let res = await fetch("https://masai-mock-api.herokuapp.com/news?q=" + value);

        let data = await res.json();
        console.log(data.articles);

        return data;

    }

    catch (err) {
        console.log("err:", err)
    }
};


let append = (data, results) => {
    data.forEach(({ url, title, description }) => {

        let div = document.createElement("div");
        div.setAttribute("class", "div")

        let image = document.createElement("img");
        image.src = url;

        let div1 = document.createElement("div");


        let a = document.createElement("h3");
        a.innerText = title;

        let dis = document.createElement("p");
        dis.innerText = description;

        div1.append(a, dis);

        div.append(image, div1)

        results.append(div);

    })
}

export { searchNews, append };