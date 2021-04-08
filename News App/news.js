console.log("This is Khabar AajTak")

// Grab the news Api news.org
let apiKey = "b3bd6c0cb68f43308ac59fee0784755a" 
let newsAccordion = document.getElementById("newsAccordion");
// console.log(newsAccordion)

// Create an Xhr Grab Request

const xhr = new XMLHttpRequest();
xhr.open('GET', `https://gnews.io/api/v4/search?q=example&token=033cba6fb323e5f1790eb9bf5e75bcd2&lang=en`, true);


// What to do when the response is ready

xhr.onload = function(){
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let article = json.articles;
        console.log(json.articles)
        let newsHtml = "";
        article.forEach(function(element, index) {
            let news = `<p>
            <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample"
              aria-expanded="false" aria-controls="collapseExample">
              ${element.title}
            </button>
      
          <p>${element.content}
            <br>
            
            <h3>Description</h3>
            ${element.description}
          </p>
          <a href="${element.url}"><button type="button" class="btn btn-outline-success ">Read more...</button></a>
          </p>`
          newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;

    }else{
        console.log("Some Error Occured")
    }
}
xhr.send()