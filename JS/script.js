class DOM{
    
static create(tagName){
    return document.createElement(tagName)
}
static attr(element, name, value){
    let el = document.querySelector(element)
    if (!value) {
        return el.getAttribute(name)
    }else
    el.setAttribute(name, value)
    return el
}
static html(element, value){
    let el =  document.querySelector(element)
    if (!value){
        return el.innerHTML
    } else 
    el.innerHTML = value//почему тут надо именно el.innerHTML = value, а не el.innerHTML(value)
    return el
}
static addClass(element, className){
    let el =  document.querySelector(element)
    el.classList.add(className)
    return el
}
static removeClass(element, className){
    let el =  document.querySelector(element)
    el.classList.remove(className)
    return el
}
static toggleClass(element, className){
    let el =  document.querySelector(element)
    el.classList.toggle(className)
    return el
}
static hasClass(element, className){
    let el =  document.querySelector(element)
    if (el.classList.contains(className)) {
        return true
    }else 
    return false
}
static append(element, newElement, beforeElement){
    let el =  document.querySelector(element)
    if (!beforeElement) {
        el.appendChild(newElement) 
        return el}
    else {
        el.insertBefore(element, beforeElement)
        return el}
}
static on(element, eventName, funcName){
    let el = document.querySelector(element)
    el.addEventListener(eventName, funcName)
    }
}


console.log('----------МЕТОД CREATE-----------')
console.log(DOM.create('h1'))


console.log('----------МЕТОД ATTR-----------')
console.log(DOM.attr('a','href'))
console.log(DOM.attr('a','href','attribute insert'))


console.log('----------МЕТОД HTML-----------')
console.log(DOM.html('h1'))
console.log(DOM.html('h1','Вставленное содержимое'))

console.log('----------МЕТОД ADDCLASS-----------')
console.log(DOM.addClass('h2', 'Добавлен_класс'))

console.log('----------МЕТОД REMOVECLASS-----------')
console.log(DOM.removeClass('h3', 'Класс'))

console.log('----------МЕТОД TOGGLECLASS-----------')
console.log(DOM.toggleClass('h3', 'toggle'))

console.log('----------МЕТОД HASCLASS-----------')
console.log(DOM.hasClass('h3', 'toggle'))

console.log('----------МЕТОД APPEND-----------')
insDiv = DOM.create('div')
insDiv.innerHTML = 'Inserted'
console.log(DOM.append('h3', insDiv))

console.log('----------МЕТОД ON-----------')
func = () => {console.log('МЕТОД ON')}
DOM.on('h1', 'click', func)