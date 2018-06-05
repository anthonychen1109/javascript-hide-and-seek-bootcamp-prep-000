function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}

function nestedTarget() {
  let nested = document.getElementById('nested')
  let target = nested.document.getElementByClassName('target')
  return target
}