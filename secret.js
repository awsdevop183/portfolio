function beer() {
    i=99
    while (i<100) {
      console.log(`${i} bottles of beer on the wall, ${i} bottles of beer.`);
      console.log(`Take on down and pass it around, ${i-1} bottles on the wall.`);
        i=i-1;
    }
    if (i===0) {
        console.log(`No more bottles of beer on the wall, no more bottles of beer.`);
        console.log(`Go to the store and buy some more, 99 bottles of beer on the wall.`)
        i=101
    }
}

beer();