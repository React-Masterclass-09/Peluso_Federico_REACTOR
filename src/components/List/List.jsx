import Card from "../Card/Card"
export default function List({games}){
    return (
        <div className="containfer-fluid">
        <div className="row">
            {games && games.map(game => {
                return (
                 <Card game={game} key={game.id}/>
                )
            })}
        </div>
    </div>
    )
}