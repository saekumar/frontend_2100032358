document.addEventListener('DOMContentLoaded', () => {
  const paragraph = document.getElementById('text-paragraph')
  const highlightedWordsContainer = document.getElementById(
    'highlighted-words-list'
  )

  const highlightLongWords = (text) => {
    const words = text.split(/\b/)
    const highlightedText = words
      .map((word) => {
        if (word.length > 8) {
          return `<span class="highlight">${word}</span>`
        }
        return word
      })
      .join('')

    paragraph.innerHTML = highlightedText

    const highlightedWords = words.filter((word) => word.length > 8)
    highlightedWordsContainer.innerHTML = `Highlighted words: ${highlightedWords.join(
      ', '
    )}`
  }

  highlightLongWords(paragraph.textContent)
})
