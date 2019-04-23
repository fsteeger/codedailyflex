
var giphy = require('giphy-api')('wVftK1gDgvu8VSQ9SDiI3BATEMCDUXp2');

export function getGif(){
  giphy.search('workout', function (err, res) {
    alert(res);
});
}


export function generateRandomNumbers(amount,upper_bound){
    var lower_bound = 0,
    
    unique_random_numbers = [];
    
    while (unique_random_numbers.length < amount) {
        var random_number = Math.floor(Math.random()*(upper_bound - lower_bound) + lower_bound);
        if (unique_random_numbers.indexOf(random_number) == -1) { 
            // Yay! new random number
            unique_random_numbers.push( random_number );
        }
    }
    return unique_random_numbers;
  }