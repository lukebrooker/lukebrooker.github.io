// A custom markdown loader to add to markdown

import frontMatter from 'front-matter'
import marked from 'marked'
import hljs from 'highlight.js'
import { kebabCase } from 'lodash'

const highlight = (str, lang) => {
  if ((lang !== null) && hljs.getLanguage(lang)) {
    try {
      return hljs.highlight(lang, str).value
    } catch (_error) {
      console.error(_error)
    }
  }
  try {
    return hljs.highlightAuto(str).value
  } catch (_error) {
    console.error(_error)
  }
  return ''
}

let renderer = new marked.Renderer()

renderer.code = function (code, lang) {
  var result = [
    '<pre>',
    highlight(code, lang),
    '</pre>'
  ].join('')

  return result
}

renderer.heading = function (text, level) {
  var name = kebabCase(text)
  var result
  if (level < 4) {
    result =
      `<h${level} id="${name}">
        <a href="#${name}">${text}</a>
      </h${level}>`
  } else {
    result = `<h${level}>${text}</h${level}>`
  }
  return result
}

marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
})

module.exports = function (content) {
  this.cacheable()
  const meta = frontMatter(content)
  const result = Object.assign({},
    meta.attributes,
    { body: marked(meta.body) }
  )
  this.value = result
  return 'module.exports = ' + JSON.stringify(result)
}
