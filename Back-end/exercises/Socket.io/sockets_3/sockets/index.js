const infos = { likes: 0, stars: 0 };
const posts = {}
module.exports = (io) => io.on('connection', (socket) => {


    socket.on('newPostMessage', ({ textPost }) => {
        const post = {
            id:posts.lenght,
            textPost, 
            info
                : { likes: 0, stars: 0 }
        }
        posts[socket.id] = post;
        const postAdd = posts[socket.id]
        io.emit('postAdd',  postAdd )
    })
    socket.on('responseServerLikes', ({ like }) => {
        posts[socket.id].likes = Number(like) + 1;
        io.emit('likePost', { like  })

    })
    socket.on('responseServerStars', ({ star }) => {
        posts[socket.id].stars = Number(star) + 1;
        io.emit('starPost', { star })
    })
    socket.emit('updateLikes', { like: infos.likes, star: infos.stars })
})