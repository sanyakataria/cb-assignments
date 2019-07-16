function qwerty(arr) {
    var a = [], b = [], prev;

    arr.sort();
    console.log(arr)
    for ( var i = 0; i < arr.length; i++ ) {
        if ( arr[i] !== prev ) {
            a.push(arr[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = arr[i];
    }
    for(var i = 0; i < a.length; i++)
    console.log(a[i] + ":" + b[i]);
    return [a, b];
}

var arr = ["dog","cat","rat","dog"]
qwerty(arr);