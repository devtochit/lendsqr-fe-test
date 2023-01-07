import '../LoadingSreen/loadingscreen.scss'

function LoadingScreen() {
  return (
    <div className="loader">
      <img src={'images/logo.svg'} alt="logo" />
      <div className="line">
        <div className="inner"></div>
      </div>
    </div>   
  )
}

export default LoadingScreen;