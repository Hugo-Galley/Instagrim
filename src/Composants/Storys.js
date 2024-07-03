function Story({username,profilPhoto}){
    return(
        <div className="story">
            <div className='image-container'>
            <img className="profilPhoto" src={profilPhoto} alt={username}/>
            </div>
            <p>{username}</p>
        </div>
    );
}

export default Story