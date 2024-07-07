import ReelBox from "../Composants/ReelsBox";
import '../Styles/Reels.css'

export default function  Reel(){
    return(
        <div className="FeedReels">
            <ReelBox/>
            <ReelBox/>
            <ReelBox/>
            <ReelBox/>
        </div>

    );
}