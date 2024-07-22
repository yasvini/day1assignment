function F7(){
    const objects=["Ram","Raghav","Raghu"]
    const review=["good","quality is bad","so cute"]
    const images=["./icon.jpg","./icon.jpg","./icon.jpg"]
    return(
        <ul>
            <h3>reviews</h3>
            {images.map((image,index)=><li key={index}><img src={image} alt="cat"height="20px"/>{objects[index]}<br/>{review[index]}</li>)}
        </ul>
    )
}
export default F7;