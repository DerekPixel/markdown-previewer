
const Editor = ({input, onChange}) => {
  return (
    <textarea id='editor' onChange={onChange} value={input} >
      
    </textarea>
  )
}

export default Editor
