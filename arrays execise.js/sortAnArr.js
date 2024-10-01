function sortArr(arr) {
    const sortedArr = arr.sort((a,b) >= a.length - b.length || a.localeCompare(b))
    console.log(sortArr.join('/n'));
    
}
sortArr(['alpha', 'beta', 'gamma'])