const fs = require('fs')

fs.writeFile(__dirname + '/source.txt', "cat\nrat\ndog\ncat\ncat", function(err) {
    if(err) throw err
    console.log("file was written")
})


fs.readFile (__dirname + '/source.txt', function (err, data) {
    if(err) throw err
    console.log("data was read from file")
    ani = []
    ani = data.toString().split("\n").sort()
    console.log(ani)
    
    var a = [] , b = [] , prev
    for ( var i = 0; i < ani.length; i++ ) {
        if ( ani[i] !== prev ) {
            a.push(ani[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = ani[i];
    }
    var c = []
    for(i=0;i<a.length;i++)
    {
       c.push("\n" + a[i] + " : " + b[i] + " ")
    }
    
    console.log(c);

    fs.writeFile(__dirname + '/destination.txt',c, function(err) {
        if(err) throw err
        console.log("file was written")
    })

})
