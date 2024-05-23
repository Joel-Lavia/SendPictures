import {useState } from "react";
import { useForm } from "react-hook-form"
import axios from "axios";

function FieldPictures() {
    const {
        register,
        handleSubmit,
        setValue,
        formState:{errors}
    } = useForm();

    const [imagePreview, setImagePreview] = useState("");
    // const [url, setUrl] = useState("");

    const viewImage = (e) => {
    const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const url = reader.result;
                setImagePreview(url);
                setValue("pictures",url);
                console.log(`salut ${url}`);
            }

            reader.readAsDataURL(file);
        }
    }
    
    const onSubmit = async (data) => {

    // // const author =  data.u
    // console.log(`salut: ${data}`);
    console.log(data);
    // console.log('salut:', JSON.stringify(data, null, 2));

        try {
            const response  =  await axios.post("http://localhost:4000/PostPictures",data)
           .then(() => {
            console.log(response.data);
           })
        } 
        catch (error) {
        console.log(error); 
        }
    }
    // console.log(`heo${url}`);

return(

<section>
<form onSubmit={handleSubmit(onSubmit)}>
<label>
Name
<p>
<input {...register('authorPictures',{required:true})} />
{errors.authorPictures && <p>le nom est requis</p> }
</p>  
</label>   

<label>
pictures
<p>
<input type="file"  onChange={viewImage}/>
{errors.pictures && <p>file required</p> }
</p>
</label>

<button type="submit">Sends</button>
</form>
<img src= {imagePreview} alt="" width={350} />
</section>
)
}
export default FieldPictures
