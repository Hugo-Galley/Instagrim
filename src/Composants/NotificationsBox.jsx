import FicheContact from "./FicheContact";
import '../Styles/Notificatons.css'
import imgTest from '../items/99678890.jpeg'

function BlocNotif({date,nbrNotif}){
    return (
        <div className="BlocNotif">
            <p>{date}</p>
            {Array.from({ length: nbrNotif }).map((_, i) => (
                <FicheContact username={"Cheffff"} pseudo={"A demandéer a vous suivre sinon c'est pas tres nice"} profilePicture={imgTest} />
            ))}
        </div>
    )
    
}

export default function Notification(){
    return(
        <div className="Notification">
            <p className="TitreNotif">Notifications</p>
                <BlocNotif date={"Hier"} nbrNotif={1}/>
                <BlocNotif date={"Cette Semaine"} nbrNotif={1}/>
                <BlocNotif date={"Ce mois-ci"} nbrNotif={2}/>
                <BlocNotif date={"Plus tôt"} nbrNotif={3}/>
        </div>
    )
}