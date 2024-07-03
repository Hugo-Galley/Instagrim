export default function FicheContact({username,pseudo,profilePicture}){
    return (
        <div className="FicheContact">
            <img src={profilePicture} alt="profilePicture"/>
            <div className="info-name">
                <p>{username}</p>
                <p>{pseudo}</p>
            </div>
            <p className='Suivre'>Suivre</p>
        </div>
    )
}