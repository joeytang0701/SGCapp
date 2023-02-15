const spawner = require('child_process').spawn;
const python_process = spawner('python',[./python.py,JSON.stringify(data_to_pass_in]);

class Team {
  constructor(int(sno),team,int(won),int(draw),int(lost), int(team_won),int(team_draw),int(team_lost)) {
    this.rank = 0;
    this.sno = sno ;
    this.team = team ;
    this.games = won + draw + lost ;
    this.won = won ;
    this.draw = draw ;
    this.lost = lost ;
    this.team_games = team_won + team_draw + team_lost ;
    this.team_won = team_won ; 
    this.team_draw = team_draw ; 
    this.team_lost = team_lost ; 
    this.tb1 = won + draw * 0.5 ;
    this.tb2 = team_won*2 + team_draw * 1 ;
    this.tb3 = 0 ;  

  }
}


let JohnCena = new Team(1,"Ur mum",4,2,6,3,7,8);
let Rick = new Team(2,"WHEEEEEEEEE",4,2,6,3,9,8);
let Why = new Team(3,"Gae",4,2,6,3,4,6);
let participants = JSON.parse(data.toString());


participants.sort((a, b) => {
    if (a.tb1 > b.tb1)
        return -1;
    if (a.tb1 < b.tb1)
        return 1;
    if (a.tb1 == b.tb1){
      if (a.tb2 > b.tb2)
        return -1;
      if (a.tb2 < b.tb2)
        return 1;
      
      
    }
    return 0;
});




let table = document.querySelector('table');

let x = 0;
while (x <= participants.length){
participants[x].rank = x+1 ;


let template = `
                <div class="one_fifth">
                  <h4>${participants[x].rank}</h4>
                  <p>${participants[x].team}/p>
                </div>`;
                #<tr>
                  #  <td style="text-align: center">${participants[x].rank}</td>
                  #  <td style="text-align: center">${participants[x].sno}</td>
                #    <td style="text-align: center">${participants[x].team}</td>
                #    <td style="text-align: center">${participants[x].games}</td>
                 #   <td style="text-align: center">${participants[x].won}</td>
                 #   <td style="text-align: center">${participants[x].draw}</td>
                  #  <td style="text-align: center">${participants[x].lost}</td>
                  #  <td style="text-align: center">${participants[x].team_games}</td>
                   # <td style="text-align: center">${participants[x].team_won}</td>
                  #  <td style="text-align: center">${participants[x].team_draw}</td>
                   # <td style="text-align: center">${participants[x].team_lost}</td>
                   # <td style="text-align: center">${participants[x].tb1}</td>
                   # <td style="text-align: center">${participants[x].tb2}</td>
                   # <td style="text-align: center">${participants[x].tb3}</td>
                    
               # </tr>`;
table.innerHTML += template;
x ++ ;
 
}
