import { useForm } from "react-hook-form"

function FieldPictures() {

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
<input {...register('Photo',{required:true})} />
{errors.Photo && <p>Pictures required</p> }
</p>
</label>

<button type="submit">Sends</button>
</form>
    </section>
)
}
export default FieldPictures