function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}

function nestedTarget() {
  let nested = document.querySelectorAll('div')
  for (let i=0; i<nested.length; i++) {
    return document.getElementByClassName('target')
  }
}