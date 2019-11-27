
news.articles.map((articles) => {
  let newsList = document.getElementById('newsList')
  let liItem = document.createElement('li')
  let newsItem = document.createElement('li')
  newsItem.className = "newsitem"
  liItem =
  `<li>Title: ${articles.title}</li>
   <li>Published Date: ${articles.publishedAt}</li>
   <li>Author: ${articles.author}</li>
   <li>Web Link: ${articles.url}</li>
   <li>Description: ${articles.description}</li>
   <img src="${articles.urlToImage}" style="height: 200; width: 200;"/>`
  newsItem.insertAdjacentHTML('beforeend',liItem)
  newsList.append(newsItem)
})
