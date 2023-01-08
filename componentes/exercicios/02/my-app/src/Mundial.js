
import Club from './Club.js';
  
const Mundial = (props) =>
  {
    return (<div className="main">
              <h2>Copa do Mundo da FIFA 2022™ </h2>
              <div className="jogo">
              <Club equipa={props.equipa1} golos={props.golosEquipa1} />
              <Club equipa={props.equipa2} golos={props.golosEquipa2} />
              </div>       
            </div>)
  }

  export default Mundial;