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
