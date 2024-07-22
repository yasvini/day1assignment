function F4(){
    const fruits=["Mango","strawberry","guava","watermelon","Orange"]
   return (
    <div>
        <h1>List of Fruits</h1>
        <ul>
            {fruits.map((fruit,index) =>(
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    </div>
   );
}
export default F4;