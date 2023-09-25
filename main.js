// Add name H1 tag to document
let nameTag = document.createElement('h1')
nameTag.innerHTML = 'Trey Scneider'
document.body.appendChild(nameTag)

// Add favorite color to H3 with the tag color matching the favorite color
let colorTag = document.createElement('h3')
colorTag.innerHTML = "Blue"
colorTag.style.color = "blue"
document.body.appendChild(colorTag)

// Add favorite food to h3 tag
let foodtag = document.createElement('h3')
foodtag.innerHTML = "Pizza"
document.body.appendChild(foodtag)

// Add picture of favorite food to image tag
let imgTag = document.createElement('img')
imgTag.src = "6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg"
imgTag.height = 200
document.body.appendChild(imgTag)