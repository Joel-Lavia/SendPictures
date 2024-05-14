const cloudinary = require("../services/cloudinary");

const imagePath = "";

const uploadImage = async (imagePath) => {

const options = {
    use_filename : true,
    unique_filname : true,
    overwrite:true
    };

    try {
       
  const result = await cloudinary.uploader.upload(imagePath, options);
  console.log(result);
  return result.public_id;

    } catch (error) {
    console.error(error);
    }
};


const getAssetInfo = async(publicId) => {

    const options = {
        colors: true,
      };

      try {

        const result = await cloudinary.api.resource(publicId, options);
        console.log(result);
        return result.colors;
        } catch (error) {
        console.error(error);
    }
};

//////////////////////////////////////////////////////////////
// Creates an HTML image tag with a transformation that
// results in a circular thumbnail crop of the image  
// focused on the faces, applying an outline of the  
// first color, and setting a background of the second color.
//////////////////////////////////////////////////////////////

const createImageTag = (publicId, ...colors) => {

    // Set the effect color and background color
    const [effectColor, backgroundColor] = colors;

    // Create an image tag with transformations applied to the src URL
    let imageTag = cloudinary.image(publicId, {
      transformation: [
        { width: 300, height: 250, gravity: 'face', crop: 'thumb' },
        { radius: '10' },
        { effect: 'outline:10', color: effectColor },
        { background: backgroundColor },
      ],
    });

    return imageTag;
};

module.exports = {
    uploadImage,
    getAssetInfo,
    createImageTag
}
