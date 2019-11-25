let mainDiv = document.getElementById('container')
let div1 = document.createElement('div')
let div11 = document.createElement('div')
let div12 = document.createElement('div')
let div121 = document.createElement('div')
let div122 = document.createElement('div')
let div13 = document.createElement('div')
let div2 = document.createElement('div')
let div21 = document.createElement('div')
let div22 = document.createElement('div')
let div3 = document.createElement('div')
let div4 = document.createElement('div')
let div5 = document.createElement('div')
let div51 = document.createElement('div')
let div52 = document.createElement('div')
let div6 = document.createElement('div')
let div7 = document.createElement('div')
let div8 = document.createElement('div')
let div81 = document.createElement('div')
let div82 = document.createElement('div')

div1.className = "header"
div11.className = "highoncoding"
div12.className = "headercolumn2"
div121.className = "home"
div122.className = "categories"
div11.innerHTML = "HighOnCoding"
div121.innerHTML = "Home"
div122.innerHTML = "Categories"
div2.className = "billboard"
div21.className = "bbtitle"
div22.className = "bbsummary"
div21.innerHTML = "Curse of the Current Reviews"
div22.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews."
div3.className = "article1"
div3.innerHTML = "Hello WatchKit"
div4.className = "summary1"
div4.innerHTML = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch."
div5.className = "commentlike1"
div51.className = "comments1"
div51.innerHTML = "12 Comments"
div52.className = "likes1"
div52.innerHTML = "124 Likes"
div6.className = "article2"
div6.innerHTML = "Introduction to Swift"
div7.className = "summary2"
div7.innerHTML = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started."
div8.className = "commentlike2"
div81.className = "comments2"
div81.innerHTML = "15 Comments"
div82.className = "likes2"
div82.innerHTML = "45 Likes"

div12.appendChild(div121)
div12.appendChild(div122)
div1.appendChild(div11)
div1.appendChild(div12)
div1.appendChild(div13)
div2.appendChild(div21)
div2.appendChild(div22)
div5.appendChild(div51)
div5.appendChild(div52)
div8.appendChild(div81)
div8.appendChild(div82)
mainDiv.appendChild(div1)
mainDiv.appendChild(div2)
mainDiv.appendChild(div3)
mainDiv.appendChild(div4)
mainDiv.appendChild(div5)
mainDiv.appendChild(div6)
mainDiv.appendChild(div7)
mainDiv.appendChild(div8)
