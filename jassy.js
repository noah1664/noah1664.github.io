function myFunction() {
  var x = document.getElementById("query");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};

function addArtist() {
	
	var div = document.createElement("div");
	div.className="d";
	
	var aName = document.getElementById("nameBar").value;
	var aAbout = document.getElementById("aboutBar").value;
	var aUrl = document.getElementById("urlBar").value;

	var desc = document.createTextNode(aAbout);

	var para = document.createElement("p");
	para.appendChild(desc);
	para.className="artistDescription";
		
	var name = document.createTextNode(aName);
	var heading = document.createElement("h3");
	heading.appendChild(name);
	heading.className="artistName";
	
	var img = document.createElement("img");
	img.src = aUrl;
	img.className = "picshu";
	
	var delbuh = document.createElement("button");
	var deltext = document.createTextNode("Delete");
	delbuh.appendChild(deltext);
	delbuh.className="deleteButton";
	delbuh.setAttribute("onclick", "deleteArtist(this)");

	
	div.appendChild(img);
	div.appendChild(heading);
	div.appendChild(delbuh);
	div.appendChild(para);
	document.body.appendChild(div);
}

function deleteArtist(e){
	e.parentElement.remove();
}