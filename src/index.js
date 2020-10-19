module.exports = function toReadable (number) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = 'hundred';
    let res = '';
    if (number < 21) {
        return numbers[number];
    } else if (number < 100) {
        (number % 10 !== 0) ? res = dozens[Math.floor(number / 10) - 2] + " " + numbers[number % 10] : res = dozens[Math.floor(number / 10) - 2];        
        return res;
    } else if (number < 1000) {
       if (number % 10 === 0 && Math.floor((number / 10) % 10) === 0) {
         return numbers[Math.floor(number / 100)] + ' ' + hundred; 
       } else if (Math.floor((number / 10) % 10) === 0) {
           return numbers[Math.floor(number / 100)] + ' ' + hundred + ' ' + numbers[number % 10];
       } else if (Math.floor((number / 10) % 10) === 1) {
            (number % 10 === 0) ? res = numbers[Math.floor(number / 100)] + ' ' + hundred + ' ' + numbers[Math.floor((number / 10) % 10) + 9] : 
                                  res = numbers[Math.floor(number / 100)] + ' ' + hundred + ' ' + numbers[(number % 10) + 10];
            return res;
         } else {
            (number % 10 === 0) ? res = numbers[Math.floor(number / 100)] + ' ' + hundred + ' ' + dozens[Math.floor((number / 10) % 10) -2] :
                                  res = numbers[Math.floor(number / 100)] + ' ' + hundred + ' ' + dozens[Math.floor((number / 10) % 10) -2] + 
                                  ' ' + numbers[number % 10];
            return res;
           }
       }
}
