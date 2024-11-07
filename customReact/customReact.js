
function customRender(reactElement,container){
    // const domElement = document.createElement
    // (reactElement.type)
    // domElement.innerHTML =reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // container.appendChild(domElement)

    const domElement = document.createElement//its a method like react has and continously
    //element create
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props
            [prop])

        }
        container.appendChild(domElement)
}

//its a tree like reactDom
const reactElement = {//create react element
    type: 'a',//what type of tag we use
    props:{//properties
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click mt to visit google'
}

const mainContainer = document.querySelector('#root')//and its the injector of the Dom..
customRender(reactElement,mainContainer)