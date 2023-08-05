let posts =[]
let lastActivity  ;
function updateLastUserActivityTime(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            lastActivity = new Date().toLocaleString()
            resolve(lastActivity)
        },1000)
    })
}
function createPost(title){
    // const posts =[]
    return new Promise((resolve, reject)=>{
        posts.push({"title" : title})
        resolve()
    })
}
function deletePost(){
    return new Promise((resolve,reject)=>{
        if(posts.length !== 0){
            posts.pop()
            resolve()
        }else{
            reject(new Error("Array is empty"))
        }
    })
}

Promise.all([createPost("first title") , updateLastUserActivityTime()]).then((data)=>{
    // posts = [...posts,...data[0]]
    posts.forEach(elem =>{
        console.log(elem)
    })
    console.log(data[1])
    return data
}).
then((elem)=>{
    return new Promise((resolve,reject)=>{
        Promise.all([createPost("second title") , updateLastUserActivityTime()]).then((data)=>{
            // posts = [...posts,...data[0]]
            posts.forEach(elem =>{
                console.log(elem)
            })
            console.log(data[1])
            resolve()
        })
    })

})
.then((data)=>{


    return deletePost()
    
})
.then(()=>{
    posts.forEach(elem =>{
        console.log(elem)
    })
})


