    function reverse(n, nums) {
        const result = [];

        for(let i = 0; i < n; i++){
            result[i] = nums[i]
        }
        const reversed = []
        for(let i = result.length; i >= 0; i--){
            reversed[reversed.length] = result[i]
        }
        console.log(reversed.join(" "));
    }
reverse(3, [10, 20, 30, 40, 50] )