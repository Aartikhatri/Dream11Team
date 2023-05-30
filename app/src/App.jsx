import { Component } from "react";
import './App.css'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      team: [],
      rules: {
        single_bt: true,
        single_bw: true,
        single_wk: true,
        single_al: true
      }
    }

    this.chennai = [
      { name: 'MS Dhoni', type: "WK" },
      { name: 'Rituraj', type: "BT" },
      { name: 'Conway', type: "BT" },
      { name: 'S Dubey', type: "BT" },
      { name: 'A Raidu', type: "BT" },
      { name: 'Jadeja', type: "AL" },
      { name: 'M ALi', type: "AL" },
      { name: 'M Patirana', type: "BW" },
      { name: 'T Deshpande', type: "BW" },
      { name: 'Theekshana', type: "BW" },
      { name: 'D Chahar', type: "BW" }
    ]
    this.gujrat = [
      { name: 'W Saha', type: "WK" },
      { name: 'S Gill', type: "BT" },
      { name: 'D Miller', type: "BT" },
      { name: 'Sai Sudarshan', type: "BT" },
      { name: 'H Pandya', type: "AL" },
      { name: 'V Shankar', type: "AL" },
      { name: 'R Tewatiya', type: "AL" },
      { name: 'Rashid Khan', type: "BW" },
      { name: 'M Shami', type: "BW" },
      { name: 'Mohit Sharma', type: "BW" },
      { name: 'N Ahmad', type: "BW" }
    ]
  }

  checkRules = (team) => {
    //console.log(this.state.team)  
    var single_bt = team.some(ob => ob.type == "BT");
    var single_bw = team.some(ob => ob.type == "BW");
    var single_wk = team.some(ob => ob.type == "WK");
    var single_al = team.some(ob => ob.type == "AL");

    this.setState({ rules: { single_bt, single_bw, single_wk, single_al } })
  }

  togglePlayer = (ob) => {
    var status = this.state.team.includes(ob);
    if (status)
      this.setState({ team: this.state.team.filter(p => p != ob) })
    else {
      if (this.state.team.length < 11)
        this.setState({ team: [...this.state.team, ob] })
    }
  }

  shouldComponentUpdate(props, state) {
    //console.log(state.team.length-this.state.team.length)
    if (state.team.length != this.state.team.length)
      this.checkRules(state.team)
    return true;
  }

  render() {
    return <div className="">
      <h1 className="alert-danger text-center"> Dream 11</h1>

      <div className=" d-flex flex-row mt-3 justify-content-center ">
        <div className="">
          <div className="text-center">
            <img src="chennai.png" height={100} width={100} />
          </div>
          <hr />
          {this.chennai.map((ob, i) => <div className={this.state.team.includes(ob) ? "alert-success" : "" } onClick={() => this.togglePlayer(ob)} style={{ cursor: 'pointer' , display:'flex' }}>
            <img src={ob.type + ".png"} className="img-fluid player-img" />
            &nbsp;&nbsp;&nbsp;
            <p >{ob.name}</p>

          </div>)}
        </div>
        <div className="">
          <div className="text-center">
            <img src="gujrat.png" height={100} width={100} />
          </div>
          <hr />
          {this.gujrat.map(ob => <div className={this.state.team.includes(ob) ? "alert-success" : ""} onClick={() => this.togglePlayer(ob)} style={{ cursor: 'pointer' , display:'flex' }}>
            <img src={ob.type + ".png"} className="player-img" />
            &nbsp;&nbsp;&nbsp;
            <p>{ob.name}</p>
          </div>)}
        </div>
        <div className="">
          <div className="text-center">
            <img src="team.png" height={100} width={100} />
          </div>
          <hr />
          {this.state.team.map(ob => <div style={{display:'flex'}}>
            <img src={ob.type + ".png"} className="player-img" />
            <p>{ob.name}</p>
          </div>)}
        </div>
      </div>

      <h6 className="alert-success text-center">
        {this.state.rules.single_wk ? "" : "One WickerKeeper Remaining !"}
      </h6>
      <h6 className="alert-success text-center">
        {this.state.rules.single_bt ? "" : "One Batsman Remaining !"}
      </h6>
      <h6 className="alert-success text-center">
        {this.state.rules.single_bw ? "" : "One Bowler Remaining !"}
      </h6>
      <h6 className="alert-success text-center">
        {this.state.rules.single_al ? "" : "One All Rounder Remaining !"}
      </h6>

      <h4 className="alert-danger text-center">
        {this.state.team.length == 11 ? "Team is Full" : ""}
      </h4>
    </div>
  }
}