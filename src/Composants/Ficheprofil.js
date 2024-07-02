import '../Styles/FicheProfil.css'
import test from '../items/99678890.jpeg'

function InfoCompte({username,nbrPublications, nbrFollowers, nbrSuivis,profilPicture}){
    return(
            <div className='FicheProfile'>
                <div className='DescriptionProfile'>
                    <div className='ProfilePicture'>
                            <img src={test} alt='ppPicture' className='ppPicture'/>
                        </div>
                    <div className="desciption">
                        <div className='top-description'>
                            <p className='Pseudo'>{username}</p>
                            <button>Modifier le profil</button>
                            <button>Voir l'archive</button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-wide" viewBox="0 0 16 16">
                                <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"/>
                            </svg>
                        </div>  
                        <div className='midlle-description'>
                                <p>{nbrPublications} publications</p>
                                <p>{nbrFollowers} followers</p>
                                <p>{nbrSuivis} suivi(e)s</p>
                        </div>
                        <div className='bottom-description'>
                            <p>{username}</p>
                            <p>Description</p>

                        </div>
                    </div>
                </div>
                
                <div className='StoryUne'>
                    <img src={test} alt='Story a la Une' className='StoryUneFiche'/>
                    <p className='titre'>Nouveau</p>
                </div>
            </div>

    );
}
function FeedCompte(){
    return(
        <div className='FeedCompte'>
            <ul>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-3x3" viewBox="0 0 16 16">
                        <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5zM1.5 1a.5.5 0 0 0-.5.5V5h4V1zM5 6H1v4h4zm1 4h4V6H6zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5zm1 0v4h4v-4zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11zm0-1h4V6h-4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11zm-1 0V1H6v4z"/>
                    </svg>
                        Publications
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
                    </svg>
                        Enregistrement
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                    </svg>
                        Identifié(e)
                </li>
            </ul>
            <div className='gridStyle'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
          <div key={num} className='itemStyle'>{num}</div>
        ))}
      </div>
      <div className='legaltext'>
        <p>Meta</p>
        <p>A Propos</p>
        <p>Blog</p>
        <p>Emplois</p>
        <p>Aide</p>
        <p>API</p>
        <p>Confidentialité</p>
        <p>Conditions</p>
        <p>Lieux</p>
        <p>Instagram Lite</p>
        <p>Importation des contacts et non-utilisateurs</p>
        <p>Meta Verified</p>
        <br/>
        <p>Francais</p>
        <p>2024 Instagram par Meta</p>
        </div>
        </div>
    )
}
function FicheProfil(){
    return(
        <div>
            <InfoCompte key={1} username={'Momo'} nbrFollowers={12} nbrPublications={2} nbrSuivis={4}/>
            <FeedCompte />
        </div>

    )
    
}

export default FicheProfil
