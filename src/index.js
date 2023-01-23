const sheet = new CSSStyleSheet()
const theme = getTheme()
sheet.replaceSync(theme)

function inputInteger () {
  const el = document.createElement('div')

  const shadow = el.attachShadow({ mode: 'closed' })
  shadow.innerHTML = `
    <input></input>
  `
  shadow.adoptedStyleSheets = [sheet]

  return el
}

function getTheme () {
  return `
    input {
      padding: 8px 12px;
      background-color: hsla(105, 100%, 85%, 1);
      border-radius: 8px;
    }
    input:focus {
      background-color: hsla(105, 100%, 60%, 1);
    }
  `
}

module.exports = inputInteger
