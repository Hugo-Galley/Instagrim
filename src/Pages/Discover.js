import '../Styles/Discover.css'
export default function Dicover(){
    return(
      <div className='DiscoveryFeed'>
         <div className='gridStyle'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
          <div key={num} className='itemStyle'>{num}</div>
        ))}
      </div>
      </div>
       
    )
}