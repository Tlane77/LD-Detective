const makeSweetHTML = (sweetObj) => {
  const domElement = `<div class="sweetCard">
	<h2 id="title--${sweetObj.id}">${sweetObj.name}</h2>
	<p>${sweetObj.seasonId}</p>
	<p>${sweetObj.typeId}</p>
	<p>${sweetObj.shapeId}</p>
	<p>${sweetObj.quantity}</p>
	<p>${sweetObj.desc}</p>
	<button id="deleteSweet--${sweetObj.id}">Delete</button>
	</div>
	`;
  return domElement;
};

export default makeSweetHTML;
