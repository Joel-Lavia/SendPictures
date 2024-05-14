const prisma = require("../db/prisma");
// const upload = require("../middlewares/multer");
const { uploadImage,getAssetInfo,createImageTag} = require("../controllers/cloudinary");



const postPictures = async (req,res) => {




const {pictures,authorPictures} = req.body;
    
try {

    const picturesPost = await prisma.picture.create({
        data:{
            pictures,
            authorPictures:{connect:{name:authorPictures}}
        }
    })
    const publicId = await  uploadImage(pictures);
    
        // Get the colors in the image
    const colors = await getAssetInfo(publicId);
    
        // Create an image tag, using two of the colors in a transformation
    const imageTag = await createImageTag(publicId, colors[0][0], colors[1][0]);
    
        // Log the image tag to the console
    console.log(imageTag);

res.status(200).json(`${picturesPost.pictures} post with succes`)

} catch (error) {
    res.status(500).json(error); 
    console.log(error); 
    }
}

module.exports = {
postPictures
}

