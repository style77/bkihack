const tweetsText = [];
const imagesUrls = [];

export const getApiResponse = async (post_text) => {
	try {
		const res = await fetch('http://localhost:8000/post', {
			method: "POST",
			headers: {
				"Content-Type": "application/json" // Fixed typo in header name
			},
			body: JSON.stringify({post_text}) // Fixed sending JSON data
		});

		console.log(res);
		console.log(res.status); // Use res.status instead of res.status_code

		if (! res.ok) { // If the response is not successful, throw an error
			console.log(res.status)
		} else {
			return res.json(); // Return the JSON response
		}

		return res.json(); // Return the JSON response
	} catch (error) {
		console.error('Error:', error);
	}
};

export const getApiResponseImage = async (file_url) => {
	try {
		const res = await fetch('http://localhost:8000/image', {
			method: "POST",
			headers: {
				"Content-Type": "application/json" // Fixed typo in header name
			},
			body: JSON.stringify({file_url}) // Fixed sending JSON data
		});

		console.log(res);
		console.log(res.status); // Use res.status instead of res.status_code

		if (! res.ok) { // If the response is not successful, throw an error
			console.log(res.status)
		} else {
			return res.json(); // Return the JSON response
		}

		return res.json(); // Return the JSON response
	} catch (error) {
		console.error('Error:', error);
	}
};

export const fetchPosts = () => {
	try {
		return new Promise((resolve, reject) => {
			try {
				const elements = Array.from(document.querySelectorAll('a')).filter(element => element.href.includes("status") && /.*[0-9]{19}$/.test(element.href));

				elements.forEach(async (elem) => {
					const parent = elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
					console.log(parent)
					console.log(parent.children[1])
					const content = parent.children[1];
					if (content.children.length > 0) {
						const tweetContent = content.children[0].children[0].innerText;
						if (! tweetsText.includes(tweetContent)) {
							tweetsText.push(tweetContent)
							var response = null
							try {
								response = await getApiResponse(tweetContent)
							} catch (error) {
								console.log(error);
							}

							if (response != null && response.explanation != null && response.explanation != "") {
								console.log("Tweet content: " + tweetContent)
								console.log("Response:" + response.explanation)

								var testnode = document.createElement("div")
								testnode.innerHTML = `<div class="explanation">
								<div class="explanation-header">
								  <span class="explanation-header-text">Sheltered note</span>
								</div>
								<div class="explanation-content">
								  <span class="explanation-content-text">
									${
									response.explanation
								}
									</span>
								</div>
							  </div>`
								elem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.lastChild.appendChild(testnode)
							}
						}
					}
				});

				resolve(tweetsText);
			} catch (error) {
				console.log(error);
				reject(error);
			}
		});
	} catch (error) {
		console.log(error);
	}
}


const getElementByXpath = (path) => {
	return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

var lastContent = ""

export const writePost = async () => {
	return new Promise(async (resolve, reject) => {
		try {
			const textNode = getElementByXpath("/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div[2]/div[1]/div/div/div/div[2]/div[1]/div/div/div/div/div/div/div/div/div/div/label/div[1]/div/div/div/div/div/div/div/div/div/div/span/span")
			const postButton = getElementByXpath("/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div/div[2]/div[1]/div/div/div/div[2]/div[2]/div[2]/div/div/div/div[3]/div/span/span")
			const resultNodeParent = getElementByXpath("/html/body/div[1]/div/div/div[2]/main/div/div/div/div[1]/div/div[3]/div");


			if (textNode === null) {
				console.log("write reject")
				return;
			}

			if (textNode.innerHTML === null) {
				console.log("write reject")
				return;
			}

			if (textNode.innerHTML === "") {
				console.log("write reject")
				return;
			}

			console.log("TN: " + textNode)
			console.log("TNiH: " + textNode.innerHTML)

			try {
				if (textNode.innerText === null) {
					console.log("write reject")
					return
				}

				if (textNode.innerText === lastContent) {
					console.log("write reject")
					return;
				}

				const response = await getApiResponse(textNode.innerText);
				console.log("Post content: " + textNode.innerText)
				console.log("Response:" + response.explanation)

				if (response != null && response.explanation != null && response.explanation != "") {
					var testnode = document.createElement("div")
					testnode.innerHTML = `<div class="explanation">
					<div class="explanation-header">
					<span class="explanation-header-text">Sheltered note</span>
					</div>
					<div class="explanation-content">
					<span class="explanation-content-text">
						${
						response.explanation
					}
						</span>
					</div>
				</div>`

					console.log("ResultNodeParent")
					console.log(resultNodeParent)
					resultNodeParent.appendChild(testnode)
					lastContent = textNode.innerText
				}

				// resolve(response);
			} catch (error) {
				console.log(error);
				reject(error);
			}

			resolve(tweetsText);
		} catch (error) {
			console.log(error);
			reject(error);
		}
	});
}


const unfilterPhoto = (elem) => {
	elem.style.filter = "none";
}

export const photo = () => {
	try {
		return new Promise((resolve, reject) => {
			try {
				const elements = Array.from(document.querySelectorAll('a')).filter(element => element.href.includes("status") && /photo/.test(element.href)).map(elm => elm.children[0]);
				console.log(elements)

				elements.forEach(async (elem) => {
					elem = elem.children[1]
					if (!elem || elem.length === 0) {
						return;
					}
					elem = elem.children[0].children[0]
					if (elem && elem.style != null && elem.style.backgroundImage != null && elem.style.backgroundImage != "") {
						const url = elem.style.backgroundImage.split('"')[1];
						imagesUrls.push(url);
						var response = null
						try {
							response = await getApiResponseImage(url)
							console.log("ResponseI: " + response.score)
							if (response.score > 0.5) {
								elem.style.filter = "blur(70px)";
								elem.addEventListener("click", (event) => {
									unfilterPhoto(elem);
								})

								var testnode = document.createElement("div")
								testnode.innerHTML = `<div class="blurred-img">
								<span class="blurred-img-text">
									${
									response.potential_tw
								}
									</span>
									Click on image to unblur
							</div>`

								elem.parentElement.appendChild(testnode)
							}
						} catch (error) {
							console.log(error);
						}
					}
				});
			} catch (error) {
				console.log(error);
				reject(error);
			}
		});
	} catch (error) {
		console.log(error);
	}
}
