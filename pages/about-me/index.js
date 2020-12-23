import markdownToHtml from '../../lib/markdownToHtml'
import aboutMeMarkdown from '../../_markdown/aboutMe.md'

const Index = (props) => (
  <div
    // className={markdownStyles['markdown']}
    dangerouslySetInnerHTML={{ __html: props.content }}
  />
)

Index.getInitialProps = async () => {
  const content = await markdownToHtml(aboutMeMarkdown)
  return { content: content }
}

export default Index