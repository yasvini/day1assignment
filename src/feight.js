
function Review() {
    const users = { 
        Andrew: { review: "product is Good", imgSrc: "icon.jpg" },
        Romeo: { review: "poor quality", imgSrc: "icon.jpg" },
        julliet: { review: "its awesome", imgSrc: "icon.jpg" }
    };

    return (
        <div>
            <h1>Reviews</h1>
            <ul>
                {Object.entries(users).map(([name, { review, imgSrc }], index) => (
                    <li key={index}>
                        <p><img src={imgSrc} alt="user"height="18px"></img>{name}</p>
                        <div>{review}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Review;