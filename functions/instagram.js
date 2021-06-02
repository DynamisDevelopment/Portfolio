// require("isomorphic-fetch")

// const url = `https://www.instagram.com/graphql/query/?query_hash=42323d64886122307be10013ad2dcc44&variables={"id":"48043513938", "first":12}`

// const getPosts = async () => {
//     const data = await fetch(url).then(res => res.json())
//     console.log(data)
//     return data
// }

// exports.handler = async function (event, context, callback) {
//     const posts = await getPosts()

//     callback(null, {
//         statusCode: 200,
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(posts)
//     })
// }