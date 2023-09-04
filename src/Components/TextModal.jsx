import '../Css/textModal.scss'

const TextModal = () => {
  return (
    <div className="containertextModal">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, pariatur. Fuga modi a veritatis expedita assumenda quia ex, tenetur ducimus alias, molestias unde praesentium dolorem, quas minus porro odio quisquam.</p>
        <span className='spantextModal'>
            <button className='btntextModal'>
                ..Back
            </button>
            <button className='btntextModal'>
                Next..
            </button>
        </span>
    </div>
  )
}

export default TextModal