import { useRef } from "react"
import img_drawers from "./assets/images/drawers.jpg"
import img_michelle from "./assets/images/avatar-michelle.jpg"
import icon_share from "./assets/images/icon-share.svg"
import icon_facebook from "./assets/images/icon-facebook.svg"
import icon_twitter from "./assets/images/icon-twitter.svg"
import icon_pinterest from "./assets/images/icon-pinterest.svg"


function App() {
  const popup = useRef()
  function openPopup() {
    popup.current.classList.toggle("show");
  }
	return (
		<>
			<main>
				<div className="container">
					<div className="card">
						<img className="left-image" src={img_drawers} alt="" />
						<div className="card__body">
							<h1 className="card__heading">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
							<p className="margin-block-start-3" style={{ lineHeight: "20px", letterSpacing: "0.12px" }}>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
							<div className="card__footer">
								<div className="author">
									<img src={img_michelle} alt="" style={{ width: "40px", borderRadius: "50%" }} />
									<div>
										<p className="fw-bold clr-neutral-800">Michelle Appleton</p>
										<p className="margin-block-start-1 clr-neutral-400">28 Jun 2020</p>
									</div>
								</div>
								<button className="button | round" style={{ width: "32px", height: "32px", padding: "0" }} onClick={openPopup} >
									<img src={icon_share} alt="" />
                  <div className="popup" ref={popup}>
                    <p className="popup_text">SHARE</p>
                    <a href=""><img src={icon_facebook} alt="" /></a>
                    <a href=""><img src={icon_twitter} alt="" /></a>
                    <a href=""><img src={icon_pinterest} alt="" /></a>
                  </div>
								</button>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
  )
}

export default App
