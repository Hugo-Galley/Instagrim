import './Storys'
import pp1 from '../items/99678890.jpeg'
import pp2 from '../items/instaLogo.svg'
import pp3 from '../items/instaLogoWhite.svg'
import Story from './Storys'

function BarStory(){
    let listePP = [pp1,pp2,pp3]
    let listeUsername = ['Hugo','Tata','Chef']
    return (
        <div>
            {listeUsername.map((username, i) => (
                <Story key={i} username={username} profilPhoto={listePP[i]} />
            ))}
        </div>
    
    );
}

export default BarStory