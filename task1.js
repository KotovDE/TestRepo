/* Task 1 */

console.log(calc(process.argv[2], process.argv[3], process.argv[4]))

function calc( i, a, b)
{
    if(!isNumeric(a))
        return "Данные не корректны!";

    if( a < 2 )
        return "Данные не корректны!";


    var digit = parseInt(i,a);

    if(digit == NaN)
        return "Данные не корректны!";


    if(!isValid(digit, a, b))
        return "Данные не корректны!";

    b = Number(b);

    return (digit.toString(b)).toLowerCase();

    function isValid(i, b){

        if(!isNumeric(b))
            return false;

        if(i < 0 || i > 10000)
            return false;

        if( b > 36)
            return false;

        return true;
    }

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
}