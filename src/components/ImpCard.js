import dotGrid from "../assets/dotGrid.png";
import monitor from "../assets/monitor.png";
function impCard(){
    return(
        <div className="relative w-full h-full ml-10 psuedoimage">
          <img src={monitor} className="absolute top-0 h-40 start-0 " />
          <img src={dotGrid} className="absolute w-20 -left-5" />
        </div>
    )
}
export default impCard;