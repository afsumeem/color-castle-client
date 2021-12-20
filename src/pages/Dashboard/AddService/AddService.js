import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import FormData from 'form-data'


const fileInput = React.createRef();

const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    // handle submit button 
    const onSubmit = data => {

        let image = fileInput.current.files[0];
        let image2 = fileInput.current.files[0];

        const formData = new FormData();

        for (var key in data) {
            formData.append(key, data[key]);
        }

        formData.append('image', image);
        formData.append('image2', image2);

        axios.post('https://stormy-woodland-90777.herokuapp.com/colorCastleServices', formData, {
            headers: {
                'accept': 'application/json',
                'Accept-Language': 'en-US,en;q=0.8',
                'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            }
        })
            .then(res => {
                if (res.data.insertedId) {
                    alert("Product Added successfully");
                    reset();
                }
            })
    };

    return (
        <div className="product-form-container">

            {/* add brand title */}
            <h2 className=" pt-2 text-dark text-uppercase text-center">Add New Service</h2>
            <div className="d-flex justify-content-center">

                {/* Add brand form */}
                <form className="pb-5" onSubmit={handleSubmit(onSubmit)}>

                    <input className=" m-2 w-50 mx-auto d-block px-4 py-2 opacity-75" placeholder="Brand Name" {...register("name", { required: true })} />


                    {/* img upload */}
                    <input className=" w-50 ps-5 py-2 bg-white opacity-75" name="image" accept='image/*' ref={fileInput} type="file" />

                    <input className=" w-50 py-2 bg-white opacity-75" name="image2" accept='image/*' ref={fileInput} type="file" />



                    <input className=" w-50  mx-auto d-block px-4 py-2 opacity-75" placeholder="Product Description"{...register("desc", { required: true })} />
                    <br />

                    <input className=" w-50  mx-auto d-block px-4 py-2 opacity-75" placeholder="Price"{...register("price", { required: true })} />
                    <br />

                    <input className=" w-50  mx-auto d-block px-4 py-2 opacity-75" placeholder="Time"{...register("time", { required: true })} />
                    <br />

                    <input className=" w-50 px-4  mx-auto d-block py-2 opacity-75" placeholder="Contact no."{...register("phone", { required: true })} />
                    <br />

                    {/* submit button */}
                    < input className="d-block mx-auto  btn btn-primary w-50" type="submit" value="Add Service" />


                    {/* explore all perfume brands button  */}
                    < NavLink to="/service" className=" text-decoration-none d-block mx-auto m-1 btn w-50 btn-outline-primary" >View All Service</NavLink>

                </form>
            </div>
        </div>
    );
};

export default AddService;