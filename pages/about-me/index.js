import markdownToHtml from '../../lib/markdownToHtml'
import aboutMeMarkdown from '../../_markdown/aboutMe.md'
import styles from '../../styles/Markdown.module.css'

const Index = (props) => (
  <div
    className={styles.markdown}
    dangerouslySetInnerHTML={{ __html: props.content }}
  />
)

Index.getInitialProps = async () => {
  const content = await markdownToHtml(aboutMeMarkdown)
  console.log(`content: ${content}`)
  return { content: content }
}

export default Index