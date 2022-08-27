# typeout
A simple javascript tool to easily add typeout effects to your webpage

## Usage
Add a one-time typeout effect

```html
<html lang="en">
<body>
    <script src="./typeout.js"></script>
    <h1>Written with <span id="span"></span></h1>
    <script>
        let span = document.getElementById("span")
        typeOut("Javascript", span)
    </script>
</body>
</html>
```
Change the delay between characters to 500ms
```html
<html lang="en">
<body>
    <script src="./typeout.js"></script>
    <h1>This one is typed out <span id="span"></span></h1>
    <script>
        let span = document.getElementById("span")
        typeOut("slowly", span, {charDelay: 500})
    </script>
</body>
</html>
```
Cycle through a list of words
```html
<html lang="en">
<body>
    <script src="./typeout.js"></script>
    <h1>Written with <span id="span"></span></h1>
    <script>
        let span = document.getElementById("span")
        let words = ["Javascript", "HTML", "CSS"]
        cycleWord(words, span)
    </script>
</body>
</html>
```
Change the delay between characters to 500ms, and the delay between words to 1500ms
```html
<html lang="en">
<body>
    <script src="./typeout.js"></script>
    <h1>Written with <span id="span"></span></h1>
    <script>
        let span = document.getElementById("span")
        let words = ["Javascript", "HTML", "CSS"]
        cycleWord(words, span, {charDelay: 500, cycleDelay: 1500})
    </script>
</body>
</html>
```

Only cycle through the words once, and do not loop
```html
<html lang="en">
<body>
    <script src="./typeout.js"></script>
    <h1>Written with <span id="span"></span></h1>
    <script>
        let span = document.getElementById("span")
        let words = ["Javascript", "HTML", "CSS"]
        cycleWord(words, span, {loop: false})
    </script>
</body>
</html>
```

## Reference
### `typeOut(string, element, options={})`
Options:
| Name | Value | Default |
|---|-----|---|
| `charDelay` | Delay between typed out characters in milliseconds | `100` |

### `cycleWord(strings, element, options={})`
Options:
| Name | Value | Default |
|---|-----|---|
| `charDelay` | Delay between typed out characters in milliseconds | `100` |
| `cycleDelay` | Delay to wait after typing out a word before going to the next in milliseconds | `1000` |
| `loop` | Whether or not to loop after going through all string in the array | `true` |

