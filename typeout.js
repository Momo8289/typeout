// MIT License

// Copyright (c) 2022 Momo8289

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software
// and associated documentation files (the "Software"), to deal in the Software without restriction,
// including without limitation the rights to use, copy, modify, merge, publish, distribute, 
// sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial
// portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
// LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
// WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

let caretSheet = document.createElement("link")
caretSheet.rel = "stylesheet"
caretSheet.type = "text/css"

// Change this path to the location of the `typeout-caretblink.css` file
caretSheet.href = "./typeout-caretblink.css"

document.getElementsByTagName("body")[0].prepend(caretSheet)


const getTextMetrics = (text, font) => {
    const canvas = getTextMetrics.canvas || (getTextMetrics.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(text);
    return metrics;
}


const typeOut = (word, element, options={}, wordList=[]) => {
    options = {...{loop: false, charDelay: 100, cycleDelay: 1000, gonext: false, caret: false, caretBlinkInterval: 500, caretOn: true}, ...options}
    element.innerText = ""
    let chars = word.split("")
    let interval = setInterval(() => {
        if (chars.length > 0) {
            if (options.caret) {
                element.innerHTML = element.innerHTML.slice(0, -1)
                element.innerHTML += chars.shift() + "|"
            }
            else {
                element.innerHTML += chars.shift()
            }
        } 
        else {
            clearInterval(interval)
            if (options.caret) {
                options.caretBlinkTimer = setInterval(() => {
                    if (options.caretOn) {
                        // TODO: Get this caret stuff working
                        // let caretDiv = document.createElement("div")
                        // caretDiv.style.background = element.style.color
                        // caretDiv.height = getTextMetrics(element.innerHTML, element.font).height
                        // caretDiv.color = "transparent"
                        // caretDiv.width = "1px"
                        // caretDiv.style.animationDuration = options.caretBlinkInterval / 1000
                        // caretDiv.style.animationName = "typeout-caret-blink"
                        // caretDiv.style.animationIterationCount = "infinite"
                        // caretDiv.style.position = "absolute"
                        // caretDiv.style.left = getTextMetrics(element.innerHTML, element.font).width
                        // element.appendChild(caretDiv)
                        element.innerHTML = element.innerHTML.slice(0, -1)
                        options.caretOn = false
                    }
                    else {
                        element.innerHTML += "|"
                        options.caretOn = true
                    }
                }, options.caretBlinkInterval)
            }
            if (options.gonext) {
                cycleWord(wordList, element, options)
            }
        }
    }, options.charDelay);
}

const cycleWord = (strs, element, options={}) => {
    options = {...{loop: true, charDelay: 100, cycleDelay: 1000, count: -1, gonext: true, caret: false, caretBlinkInterval: 500}, ...options}
    setTimeout(() => {
        options.count++
        if (!options.loop && options.count >= strs.length-1) {
            options.gonext = false
        }
        if (options.caret) {
            clearInterval(options.caretBlinkTimer)
        }
        typeOut(strs[options.count % strs.length], element, options, strs)
    }, options.cycleDelay)
}
