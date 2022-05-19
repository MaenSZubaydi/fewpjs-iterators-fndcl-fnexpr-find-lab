
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ];

function superbowlWin(array){
    if(array.result===W){
        return array.year;
    }
}

const W = record.find(function superbowlWin(array) {
    if(array.result==='W'){
        val = array.year;
        return val;
        ;
    }
},val);


console.log(W);