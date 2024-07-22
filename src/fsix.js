function F6(){
    const reviewer=["Ram","ravan","krishna","arjun","karna","sita","radha"]
    const review=["ai is far more dangerous","it replaces humans","it makes people lazy","the current trend ai","wow,the technology is nice","nice color","Great"]
    return (
        <div>
            <h1>REVIEWS</h1>
            <img src="./ai.jpg" alt="artificial" width="175"/>
            <ul>
                {reviewer.map((i,index)=>(
                    <li key={index}>
                        <h2>{i}</h2><h3>{review[index]}</h3>
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default F6;