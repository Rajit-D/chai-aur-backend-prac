import {v2 as cloudinary} from "cloudinary"
import fs from "fs"
        
cloudinary.config({ 
  cloud_name: 'drdbanvwj', 
  api_key: '184527631162257', 
  api_secret: 'SgAenIO-4dTM4wH7I8PRxVz8X0M' 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}



export {uploadOnCloudinary}