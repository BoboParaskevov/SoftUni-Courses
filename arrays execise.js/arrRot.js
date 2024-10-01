    function arrayRotation(arr, n) {
                let newArr = []
                for (i = 0; i < n; i++) {
                    for (j = 1; j < arr.length; j++) {
                        newArr.push(arr[j])
                    }
                    newArr.push(arr[0])
                    arr = newArr
                    newArr = []
                }
                console.log(arr.join(" "));
            }
    arrayRotation([51, 47, 32, 61, 21], 2)