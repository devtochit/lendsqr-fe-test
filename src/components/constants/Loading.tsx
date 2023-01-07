import '../../saas/Loading/loading.scss'

function Loading() {
  return (
    <div className="loader-container">
      <img src={'logo.svg'} alt="logo" />
      <div className="line">
        <div className="inner"></div>
      </div>
    </div>   
  )
}

export default Loading