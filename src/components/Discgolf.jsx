const Discgolf = (props) => {

    return (
        <>
        {props.disc.map((disc, index) => (
            <div key={index}>
                <h3>{disc.name}</h3>
            </div>
        ))}
        </>
    )
}
export default Discgolf;
