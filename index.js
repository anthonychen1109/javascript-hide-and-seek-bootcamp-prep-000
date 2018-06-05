function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}

function nestedTarget() {
  let nested = document.getElementById('nested').querySelectorAll('div')
  for (let i=0; i<nested.length; i++) {
    if (nested[i].classList.contains('target')) {
      return nested[i]
    }
  }
}

function deepestChild() {
  let deepest = document.getElementById('grand-node').querySelectorAll('div')
  return deepest[deepest.length-1]
}

function increaseRankBy(n) {
  let rank = document.querySelectorAll('ul.ranked-list li')
  for (let i=0; i<rank.length; i++) {
    rank[i].innerHTML = parseInt(rank[i].innerHTML) + n
  }
}