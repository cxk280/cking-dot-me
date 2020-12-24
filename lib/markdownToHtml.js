import remark from 'remark'
import html from 'remark-html'

export default async function markdownToHtml(markdown) {
  return await (await remark().use(html).process(markdown)).toString()
}