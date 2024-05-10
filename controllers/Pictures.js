const prisma = require("../db/prisma");
// const upload = multer({dest:"./uploads"});


const postPictures = async (req,res) => {
const {pictures,authorPictures} = req.body;
    
try {

const picturesPost = await prisma.picture.create({
data:{
pictures,
authorPictures:{connect:{name:authorPictures}}
}
})

res.status(200).json(`${picturesPost.pictures} post with succes`)

} catch (error) {
    res.status(500).json(error); 
    console.log(error); 
    }
}

module.exports = {
postPictures
}

