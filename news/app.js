
let newsContainer = document.createElement('li')
news.articles.map((articles) => {
  let newsItem = document.createElement('li')
  let newsList = document.getElementById('newsList')
  let liItem = document.createElement('li')
  newsItem.className = "newsitem"
  liItem =
  `<li>Title: ${articles.title}</li>
   <li>Published Date: ${articles.publishedAt}</li>
   <li>Author: ${articles.author}</li>
   <li>Web Link: ${articles.url}</li>
   <li>Description: ${articles.description}</li>
   <img src="${articles.urlToImage}" style="height: 200; width: 200;"/>`
  newsItem.insertAdjacentHTML('beforeend',liItem)
  newsContainer.append(newsItem)
})
newsList.append(newsContainer)

let sourceList = document.createElement('li')
sourceList.className = "sourcelist"
sources.sources.map((sources) => {
  let sourceItem = document.createElement('li')
  sourceItem =
  `<button onClick="">
   <p>Name: ${sources.name}</p>
   <p>Description: ${sources.description}</p>
   <p>URL: ${sources.url}</p>
   </button>`
   sourceList.insertAdjacentHTML('beforeend',sourceItem)
})
newsList.append(sourceList)
