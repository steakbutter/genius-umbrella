import employeeTracker from "../assets/employeeSQL.png"
import financePlanner from "../assets/finance planner.png"
import portfolioCss from "../assets/MetaLife Week (1).png"
import networkApi from "../assets/networkAPI.png"
import sqlBackEnd from "../assets/sql back end.png"
import websiteGame from "../assets/Cat Quest (1).png"

export default function Portfolio() {
    return (
      <div>
        <a href="https://drive.google.com/file/d/1lW0zfDE50wVJRXyGj9PvnoGBq0t0OpQg/view"><img src={employeeTracker} alt="employee tracker app" /></a>
        <a href="https://symmetrical-couscous-1.onrender.com/"><img src={financePlanner} alt="financial planner app" /></a>
        <a href="https://steakbutter.github.io/Portfolio-Carlos/"><img src={portfolioCss} alt="Portfolio website" /></a>
        <a href="https://drive.google.com/file/d/1yDQYrnYpGTg3IAshQG_b0R6Il2c6zSQX/view"><img src={networkApi} alt="network API app" /></a>
        <a href="https://drive.google.com/file/d/1Dx1T_YYvFaDWK9_7qJ0Z9a3BD4rvtv5S/view"><img src={sqlBackEnd} alt="SQL back end app" /></a>
        <a href="https://steakbutter.github.io/Rubber-Butter/"><img src={websiteGame} alt="Website Game" /></a>

      </div>
    );
  }
  