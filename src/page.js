export function createPage(){
    const content=document.querySelector("#content");

    const headline = document.createElement('h1')
    headline.textContent="The Amazing restaurant"

    const image=document.createElement("img")
    image.src="../src/restaurant.jpg"
    image.alt="restaurant image"

    const text=document.createElement('div')
    text.textContent=`This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation,
    wide wine list and wonderful dessert.
    I recommend to everyone! I would like to come back here again and again.`

    content.appendChild(headline)
    content.appendChild(image)
    content.appendChild(text)

}