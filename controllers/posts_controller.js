const Post = require('../models/post')


module.exports.create = async (req, res) => {
    try {
        const post = await Post.create({
            content: req.body.content,
            user: req.user._id
        })
       
    } catch (err) {
        
        console.log('err', err);
    }
    return res.redirect('back');

    // console.log('hello');
    // return;


}
