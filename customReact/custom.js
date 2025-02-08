function customRender(reactElement,container){
    /*
    const dom = document.createElement(reactElement.tags)
    dom.innerHTML = reactElement.child
    dom.setAttribute('href',reactElement.props.href)
    dom.setAttribute('target',reactElement.props.target)
    container.appendChild(dom)
    */
        const dom = document.createElement(reactElement.tags)
        dom.innerHTML = reactElement.child
        for (const key in reactElement.props) {
            dom.setAttribute(key,reactElement.props[key])
        }
        container.appendChild(dom)

}


const reactElement ={
    tags: 'a',
    props: {
        href:'www.google.com',
        target:  '_blank'
    },
    child:' Click me'
}
const main = document.getElementById('root')

customRender(reactElement,main)