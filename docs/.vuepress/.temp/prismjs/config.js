import "N:/blog/vuepress/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "N:/blog/vuepress/vuepress-starter/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "N:/blog/vuepress/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "N:/blog/vuepress/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "N:/blog/vuepress/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "N:/blog/vuepress/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/index.js"
import "N:/blog/vuepress/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/code-block-title.css"

export default {
  setup() {
    setupCollapsedLines()
  }
}
