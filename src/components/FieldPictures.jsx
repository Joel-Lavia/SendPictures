import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function FieldPictures() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imagePreview, setImagePreview] = useState("");
    const [base64ImageUrl, setBase64ImageUrl] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const url = reader.result;
                setImagePreview(url);
                setBase64ImageUrl(url);
            };
            reader.readAsDataURL(file);
        }
    };
console.log(`hey c'est moi : ${base64ImageUrl}`);
    const onSubmit = async (data) => {
        // Ajout manuel de la valeur base64 aux données du formulaire
        data.pictures = base64ImageUrl;

        console.log(data);

        try {
            const response = await axios.post("http://localhost:4000/PostPictures", data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Name
                    <p>
                        <input {...register('authorPictures', { required: true })} />
                        {errors.authorPictures && <p>Le nom est requis</p>}
                    </p>
                </label>

                <label>
                    Pictures
                    <p>
                        <input
                            type="file"
                            onChange={handleFileChange}
                        />
                        {errors.pictures && <p>File required</p>}
                    </p>
                </label>

                <button type="submit">Send</button>
            </form>
            {imagePreview && <img src={imagePreview} alt="Image preview" width={350} />}
        </section>
    );
}

export default FieldPictures;
