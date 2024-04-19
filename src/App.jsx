import { useState } from "react"
import img_drawers from "./assets/images/drawers.jpg"

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
							<div className="card__footer"></div>
						</div>
					</div>
				</div>
			</main>
		</>
  )
}

export default App
