import React, { useState, useEffect, Suspense } from "react"
import axios from "axios"

// * Styles 
import "./About.sass"

const Instagram = () => {
    const [posts, setPosts] = useState()

    const getPosts = async () => {
        const url = `https://graph.instagram.com/me/media?fields=id,username,media_url,media_type,caption&access_token=IGQVJVdHlDbjctTHhwYlhlWm9yZAHdsMEZAQQ3RIQUlRcW9WWEFaUUJVR3FpbzNrN0F5NzFpVHBmVjVZAZAVFhRG81NURZARWg2TU00dEQ1dHJHNmp6bmRSRmZAKaUxiTmJjZAExMdXIwSl9R`
        const res = await axios.get(url).catch(err => console.log(err))

        setPosts(res.data.data)
    }

    useEffect(() => getPosts(), [])

    return <Suspense fallback={<div />}>
        {posts && <div className="ig-posts">
            <div className="responsive-grid">
                {posts.map((post, i) => <div className="ig-post" key={i}>
                    <img src="../assets/icons/instagram.svg" alt="Instagram" className="ig-logo" />
                    <img src={post.media_url} alt={post.caption} className="ig-post-img" />
                    <h1>{post.caption}</h1>
                </div>)}

            </div>
        </div>}
    </Suspense>
}

export default Instagram

// Secret: a4cc43f6732fafd77ce6e35833114dfe
// Id: 626382451651966
// code: AQAG1nOe9g7DOTazbR8au0qBtxcSQQgUX03KylvZyF1GZJ7ZP4CWUufItjavHA9qKsl5uRId64Glfsg9JMPY0ExJKutdqO4hRqyH8CYD7jOy383FNNINdFtFWUe4D7xPFlR1tzVzVPwWxVj715xPpilBVn1U95q7s3MFnG4oiWVJfKvyxVb31vBIEXwje8BssmevJ-FTO7jSebxdCpF53RCKDU0LXDs2gWYdaEhmNxvNVg

// User id: 17841448058145439
// Access token: IGQVJXdF8yQ2lkTTlzSHc3cS1MWC0yMlc4Mk9sUDYwV2dMelFSQ3h6Mmd2Y3ZASMTZAFRHFnSm81eGRjaWJKaHRzRWxrZAlZAnSE9kd2dJa3RqXy1BR2lzdVJtUkttS2hKTUpVSUlyZAE9lLS1pUVVhMTNHcHZAZARUNfX0tyRTAw

// {
//     "id": "17841448058145439",
//      "username": "dynamisdevelopment"
// }

// token: IGQVJVdHlDbjctTHhwYlhlWm9yZAHdsMEZAQQ3RIQUlRcW9WWEFaUUJVR3FpbzNrN0F5NzFpVHBmVjVZAZAVFhRG81NURZARWg2TU00dEQ1dHJHNmp6bmRSRmZAKaUxiTmJjZAExMdXIwSl9R

// request: https://graph.instagram.com/me/media?fields=id,username,media_url,media_type,caption&access_token=IGQVJVdHlDbjctTHhwYlhlWm9yZAHdsMEZAQQ3RIQUlRcW9WWEFaUUJVR3FpbzNrN0F5NzFpVHBmVjVZAZAVFhRG81NURZARWg2TU00dEQ1dHJHNmp6bmRSRmZAKaUxiTmJjZAExMdXIwSl9R