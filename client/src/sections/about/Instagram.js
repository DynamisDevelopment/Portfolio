import React, { useState, useEffect, Suspense, useRef } from 'react'
import axios from 'axios'
import { formatDistance } from 'date-fns'

// * Styles
import './About.sass'

const Instagram = () => {
  const [posts, setPosts] = useState()

  const getPosts = async () => {
    const url = `https://graph.instagram.com/me/media?fields=id,media_url,media_type,caption,timestamp,permalink&access_token=IGQVJVdHlDbjctTHhwYlhlWm9yZAHdsMEZAQQ3RIQUlRcW9WWEFaUUJVR3FpbzNrN0F5NzFpVHBmVjVZAZAVFhRG81NURZARWg2TU00dEQ1dHJHNmp6bmRSRmZAKaUxiTmJjZAExMdXIwSl9R`
    const res = await axios.get(url).catch(err => setPosts([]))

    if (res) {
      let filtered
      if (res && window.innerWidth <= 650) filtered = res.data.data.slice(0, 4)
      else filtered = res.data.data

      setPosts(filtered)
    }
  }

  useEffect(() => getPosts(), [])

  const truncate = text => {
    const words = text.split(' ')

    if (words.length >= 20) {
      words.length = 20
      words.push('...')
    }

    return words.join(' ')
  }

  const videoRef = useRef()

  return (
    <Suspense fallback={<div />}>
      {posts && (
        <React.Fragment>
          <div className="subtitle" style={{ maxWidth: '500px' }}>
            I have recently taken a interest in building VR games, 3D modelling,
            and leather working.
          </div>
          <div className="ig-posts">
            <div className="ig-grid">
              {posts.map((post, i) => (
                <div className="ig-post" key={i}>
                  <div className="ig-data">
                    <img
                      src="../assets/icons/instagram.svg"
                      alt="Instagram"
                      className="ig-logo"
                      onClick={() => videoRef.current.play()}
                    />
                    <h5 className="ig-postdate">
                      {formatDistance(new Date(post.timestamp), new Date(), {
                        addSuffix: true,
                      })}
                    </h5>
                  </div>

                  {post.media_type === 'IMAGE' && (
                    <a href={post.permalink} target="__blanck">
                      <img
                        src={post.media_url}
                        alt={post.caption}
                        className="ig-post-img"
                      />
                    </a>
                  )}
                  {post.media_type === 'VIDEO' && (
                    <Video post={post} videoRef={videoRef} />
                  )}
                  <h3>{truncate(post.caption)}</h3>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      )}
    </Suspense>
  )
}

const Video = ({ post, videoRef }) => {
  const [playing, setPlaying] = useState()

  return (
    <React.Fragment>
      <div className="ig-play">
        {!playing && (
          <img
            src="../assets/icons/play.svg"
            alt="play"
            className="ig-play-icon"
            onClick={() => {
              videoRef.current.play()
              setPlaying(true)
            }}
          />
        )}
      </div>
      <a href={post.permalink} target="__blanck">
        <video
          src={post.media_url}
          title={post.caption}
          className="ig-post-img"
          ref={videoRef}
          onTimeUpdate={vid => {
            if (vid.target.ended) setPlaying(false)
          }}
        ></video>
      </a>
    </React.Fragment>
  )
}
export default Instagram
