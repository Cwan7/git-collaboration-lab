const Discgolf = (props) => {

    return (
        <>
        {Discgolf.map((disc) => (
            <div key={index}>
                <h1>{disc.name}</h1>
            </div>
        ))}
        </>
    )
}