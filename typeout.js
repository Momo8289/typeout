const typeOut = (word, element, options={}, wordList=[]) => {
    options = {...{loop: false, charDelay: 100, cycleDelay: 1000, gonext: false}, ...options}
    element.innerText = ""
    let chars = word.split("")
    let interval = setInterval(() => {
        if (chars.length > 0) {
            element.innerHTML += chars.shift()
        } 
        else {
            clearInterval(interval)
            if (options.gonext) {
                cycleWord(wordList, element, options)
            }
        }
    }, options.charDelay);
}

const cycleWord = (strs, element, options={}) => {
    options = {...{loop: true, charDelay: 100, cycleDelay: 1000, count: -1, gonext: true}, ...options}
    setTimeout(() => {
        options.count++
        if (!options.loop && options.count >= strs.length-1) {
            options.gonext = false
        }
        typeOut(strs[options.count % strs.length], element, options, strs)
    }, options.cycleDelay)

}
