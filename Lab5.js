//TASK 1


/*
function twoDelayS (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

twoDelayS(2000).then(() => console.log("Success"));
*/


/*
let mss = 2100
let twoDelayF = new Promise((resolve, reject) => {
    
    let error = "error 404";
    let result = "sucess";
if (mss > 2100) {
    resolve(result);
} else {
    reject(error);
}
});

twoDelayF.catch(error => setTimeout(() => console.error(error), mss))
*/

//TASK 2
/*
function calc (a) {
let p = new Promise ((resolve, reject) => {
let a = 1;
if (a == 1) {
    resolve(a)
 } else {
    reject("Invalid Value");
 }

})
}

p
.then((value) => {
    console.log(value * 2 + 3);
    return  1;
})
.then((valuetwo) => console.log(valuetwo + 10 * 3))
.catch((message) => console.error(message));
*/

//TASK 3 % 4

function randInt () {
return new Promise ((Resolve, Reject) => {
    function randInt () {
        return Math.floor(Math.random() * 10) + 1;
    }
    let num = randInt();
    if (num > 5) {
        Resolve("Success");
    } else {
        Reject("Fail") 
    }
});
}
/*
randInt()
.then ((msg) => console.log("This has been a " + msg))
.catch((msg) => console.error("This has been a " + msg));
*/

async function patience() {
    console.log("Blank");
    try {
    const wait = await randInt();
    
    } catch (error) {
        console.error(error);
    }
    console.log("Done waiting");
} 

patience();
