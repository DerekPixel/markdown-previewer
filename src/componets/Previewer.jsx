import marked from 'marked';

const Previewer = ({input}) => {

  const makeMarkUp = () => {
    var html = marked(input);
    return {__html: html}
  }

  return (
    <div id='preview' dangerouslySetInnerHTML={makeMarkUp()} >
      
    </div>
  )
}

export default Previewer
