
exports.min = function min (array) {
    if(array == undefined || array == '') {
        return 0;
    } else {
        let sortArray = array.sort(function(a, b) { return a - b; });
        return sortArray[0];
    }

}

exports.max = function max (array) {
    if(array == undefined || array == '') {
        return 0;
    } else {
        let sortArray = array.sort(function(a, b) { return a - b; });
        return sortArray[array.length - 1];
    }
}

exports.avg = function avg (array) {
    if(array == undefined || array == '') {
        return 0;
    } else {
        let result = array.reduce((sum, current) => {
            sum += current
            return sum
        }, 0 )
        return result / array.length;
    }
}

