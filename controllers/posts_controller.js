const Post = require('../models/post')
const Comment = require('../models/comment');


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
}

module.exports.destroy = async (req,res)=>{
    try{
        //.id means converting the object id into string
        const post = await Post.findById(req.params.id);

        if(post.user==req.user.id){
            await Post.findByIdAndDelete(req.params.id);
            await Comment.deleteMany({ post: req.params.id });
          
        }
        return res.redirect('back');
    } catch (err) {
        //req.flash('error', 'You cant delete this post');
        console.log('err', err);
    }
}
