const Club = (singleClub) => {
    return(<div className="club">
              <h3 > {singleClub.equipa} </h3>
              <h5 className="golos"> {singleClub.golos} </h5>
            </div>)

  }

  export default Club;