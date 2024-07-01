import React, { useState, useEffect  } from 'react';
import '../Styles/CardPost.css'
import logoTest from '../items/99678890.jpeg'
import contentPng from '../items/content.jpg'


function EnteteCard({username,profilePicture}){
    return(
        <div className="EnTete">
            <img src={profilePicture}/>
            <p>{username}</p>
        </div>
    )
}

function DescriptionCard({ initialNbrLike, nbrComment, description, timeStampPost }) {
    const [nbrLike, setNbrLike] = useState(() => {
        const parsedLike = parseInt(initialNbrLike, 10);
        return isNaN(parsedLike) ? 0 : parsedLike;
    });
    const [userLiked, setUserLiked] = useState(false);
    
    const TimeEcoule = "Il y'a 3 minutes";

    function toggleLike() {
        if (userLiked) {
            setNbrLike(prevNbrLike => prevNbrLike - 1);
        } else {
            setNbrLike(prevNbrLike => prevNbrLike + 1);
        }
        setUserLiked(prevLiked => !prevLiked);
    }

    // Reset nbrLike if initialNbrLike changes
    useEffect(() => {
        const parsedLike = parseInt(initialNbrLike, 10);
        setNbrLike(isNaN(parsedLike) ? 0 : parsedLike);
        setUserLiked(false);
    }, [initialNbrLike]);

    return (
        <div className='DescriptionCard'>
            <div className='IconDesciption'>
                <ul>
                    <li>
                        <button className='LikeButton' onClick={toggleLike}>
                            {userLiked ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
                                </svg>
                            )}
                        </button>
                    </li>

                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
                    </svg>
                </li>               
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                    </svg>
                </li>
                {/* <li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
                    <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z"/>
                    </svg>
                </li> */}
            </ul>
            </div>
            
            <p>{nbrLike} J'aime</p>
            <p>{description}</p>
            <p>Afficher les {nbrComment} commentaires</p>
            <p>Poster {TimeEcoule} </p>
        </div>
    )
}

function CardPost({content}){
    return(
        <div className='CardPost'>
            <EnteteCard key={1} username={"Test"} profilePicture={logoTest} />
            <div>
            <img src={contentPng} alt='Contenu du Post' className='content'/>
            </div>
            <DescriptionCard key={1} nbrLike={11} nbrComment={356} timeStampPost={1688216938} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat tortor sit amet ex auctor aliquet. Donec semper ex mauris, vitae eleifend turpis vestibulum id. Nunc euismod metus vitae odio tincidunt ultricies. Sed sed purus est. Donec efficitur, ante sit amet convallis placerat, ante erat iaculis ante, aliquam posuere mauris quam vel tellus. Quisque vestibulum accumsan luctus. Nunc id purus finibus orci rhoncus malesuada. Nullam varius, quam eu iaculis auctor, magna metus posuere justo, vel ornare sem enim sed sem. Duis venenatis leo nibh."}/>
            
        </div>
    );
}

export default CardPost