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

function printPosts(arr){
    posts.forEach(elem =>{
        console.log(elem)
    })
    if(arr)
        console.log(arr[1])
}

async function interaction(){



let arr = await Promise.all([createPost("first title") , updateLastUserActivityTime()])
printPosts(arr)



 arr =await Promise.all([createPost("second title") , updateLastUserActivityTime()])
printPosts(arr)

let del = await deletePost()
printPosts()
    


}

interaction()