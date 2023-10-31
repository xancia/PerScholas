// Menu data structure - Array[ obj{ arr[ obj{}]}]
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

let mainEl = document.querySelector('main')

mainEl.style.backgroundColor = 'var(--main-bg)'

mainEl.innerHTML = '<h1>SEI Rocks!</h1>'

mainEl.classList.add('flex-ctr')

let topMenuEl = document.getElementById('top-menu')

topMenuEl.style.height = '100%'

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

topMenuEl.classList.add('flex-around')


for (let link of menuLinks) {
    const a = document.createElement('a')
    a.textContent = link.text // <a>about</a>
    a.href = link.href // <a href="/about"></a>
    topMenuEl.appendChild(a)
}

const subMenuEl = document.getElementById('sub-menu')

subMenuEl.style.height = '100%'

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

subMenuEl.classList.add('flex-around')

subMenuEl.style.position = 'absolute'

subMenuEl.style.top = '0'

const topMenuLinks = document.getElementsByTagName('a') // create an array of anchor tags [a,a,a]

let showingSubMenu = false;

topMenuEl.addEventListener('click', function(evt) {
    evt.preventDefault()
    console.dir(evt.target)
    if (evt.target.nodeName != "A") {
        return console.log('Not "a" Element')
    } 
    if (evt.target.classList.contains('active')) {
        evt.target.classList.remove('active')
        showingSubMenu = false;
        subMenuEl.style.top = '0'
        return
    }
    for (let anchor of topMenuLinks) {
        anchor.classList.remove('active')
    }

    evt.target.classList.add('active')

    const LinkObj = menuLinks.find(link => link.text === evt.target.textContent);

    if (LinkObj.subLinks) {
        showingSubMenu = true;
    } else {
        showingSubMenu = false;
    }

    if (showingSubMenu) {
       buildSubMenu(LinkObj.subLinks)
        subMenuEl.style.top = '100%'
    } else {
        subMenuEl.style.top = '0'
    }

    function buildSubMenu() {
        subMenuEl.innerHTML = ""
        for (let link of LinkObj.subLinks) {
            const a = document.createElement('a')
            a.textContent = link.text 
            a.href = link.href 
            subMenuEl.appendChild(a)
        }
    }
    if (evt.target.textContent == "about") {
        mainEl.innerHTML = '<h1>about</h1>'
    }
})

subMenuEl.addEventListener('click', function(evt) {
    evt.preventDefault()
    console.dir(evt.target)
    if (evt.target.nodeName != "A") {
        return console.log('Not "a" Element')
    } 
    showingSubMenu = false;
    subMenuEl.style.top = '0'
    for (let anchor of topMenuLinks) {
        anchor.classList.remove('active')
    }
    let textClicked = evt.target.textContent
    let finalText = `<h1>${textClicked}</h1>`
    mainEl.innerHTML = finalText
}
)
