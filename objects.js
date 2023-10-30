let myData = [
    {
        id: 1,
        username: "albert",
        password: "qwerty",
        isAdmin:false,
        friends:[],
    },
    {
        id: 2,
        username: "victor",
        password: "qwerty",
        isAdmin:false,
        friends:[1,3],
    },
    {
        id: 3,
        username: "sawe",
        password: "qwerty",
        isAdmin:true,
        friends:[2],
    },
    {
        id: 4,
        username: "eric",
        password: "qwerty",
        isAdmin:true,
        friends:[2,3],
    }
];
let firstPerson = myData[0]
console.log(typeof firstPerson);
console.log(firstPerson.username);

//print names of admins in the data set

for (let index = 0; index < myData.length; index++) {
   if (myData[index].isAdmin) {
    console.log(myData[index].username);
   }
    
}

//get Eric's friends

let eric = myData[3];
console.log(eric.friends);
let ericFriend = eric.friends
ericFriend.forEach( 
    function (f_id) {
        let f_name = myData.find (f=>f.id == f_id).username;
        console.log(f_name);
    }
)