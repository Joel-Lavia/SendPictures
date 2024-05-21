import { useState } from "react";
import { useForm } from "react-hook-form"

function FieldPictures() {

const [imagePreview, setImagePreview] = useState("");

const viewImage  = (e) => {

const file = e.target.files[0];
if(file){
const reader = new FileReader();
reader.onloadend = () => {
setImagePreview(reader.result);
console.log(reader.result);
}
reader.readAsDataURL(file);
}
}

const {
    register,
    handleSubmit,
    formState:{errors}
} = useForm();
 const onSubmit = (data) => console.log(data);

return(

<section>
<form onSubmit={handleSubmit(onSubmit)}>

<label>
Name
<p>
<input {...register('Name',{required:true})} />
{errors.Name && <p>le nom est requis</p> }
</p>  
</label>   

<label>
pictures
<p>
<input type="file" {...register('Photo',{required:true})} onChange={viewImage} />
{errors.Photo && <p>file required</p> }
</p>
</label>

<button type="submit">Sends</button>
</form>
<img src= {imagePreview} alt="" width={350} />
</section>
)
}
export default FieldPictures