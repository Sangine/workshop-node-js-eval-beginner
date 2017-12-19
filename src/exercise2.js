exports.run = function(input) {
        var res = input.split(",");
        var sum = 0;
        for (var i=0; i < res.length; i++) {
            sum += Number(res[i]);
        }
        return sum;
};

