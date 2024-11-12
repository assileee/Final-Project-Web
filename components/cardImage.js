import "./cardImage.css";

export const cardImage = (cardImg) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card-image");

    const img = new Image();
    const randomId = Math.floor(Math.random() * 100); // Generates a random number for more variety
    img.src = cardImg || "../assets/blank.profile.webp" // Adjust "men" to "women" if desired
    img.setAttribute("alt", "avatar image");

    cardDiv.appendChild(img);

    return cardDiv;
};
