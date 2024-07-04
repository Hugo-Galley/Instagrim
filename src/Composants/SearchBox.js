import FicheContact from "./FicheContact"

export default function SearchBox(){
    return(
        <div>
            <div className="RechercheBox">
                <p>Recherche</p>
                <div class="search-container">
        <svg class="search-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 17.586l-3.586-3.586a7.5 7.5 0 1 0-1.414 1.414L17.586 19 19 17.586zM10.5 16a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11z"/>
        </svg>
        <input type="text" placeholder="Rechercher" />
    </div>
            </div>
            <div className="InfoSearchBox">
            <p>Recents</p>
            <p>Tout Effacer</p>
            </div>
            <div className="FicheSearch">
                <FicheContact username={"Hugo"} pseudo={"hugigoo_"} profilePicture={'../items/instaLogo.svg'}/>
                <FicheContact username={"Hugo"} pseudo={"hugigoo_"} profilePicture={'../items/instaLogo.svg'}/>     
                <FicheContact username={"Hugo"} pseudo={"hugigoo_"} profilePicture={'../items/instaLogo.svg'}/>
            </div>
        </div>
    )
}