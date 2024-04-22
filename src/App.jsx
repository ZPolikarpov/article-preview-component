import { useState } from "react"
import img_drawers from "./assets/images/drawers.jpg"
import img_michelle from "./assets/images/avatar-michelle.jpg"
import icon_share from "./assets/images/icon-share.svg"

function App() {
	return (
		<>
			<main>
				<div className="container">
					<div className="card">
						<img src={img_drawers} alt="" />
						<div className="card__body">
							<h1 className="card__heading">Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
							<p>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
							<div className="card__footer">
								<div className="author">
									<img src={img_michelle} alt="" />
									<div className="author__description">
										<p className="fw-bold">Michelle Appleton</p>
										<p className="clr-neutral-400">28 Jun 2020</p>
									</div>
								</div>
								<button>
									<img src={icon_share} alt="" />
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
