import remark from 'remark'
import html from 'remark-html'

export default async function markdownToHtml(markdown) {
  const result = await remark().use(html).process(markdown)
  console.log("🚀 ~ file: markdownToHtml.js ~ line 6 ~ markdownToHtml ~ result", result)
  return result.toString()
}