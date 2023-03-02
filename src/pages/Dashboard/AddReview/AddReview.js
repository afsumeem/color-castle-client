import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const { user } = useAuth()

    const onSubmit = data => {

        axios.post('https://color-castle-server.vercel.app/colorCastleReviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Review Added successfully");
                    reset();
                }
            })
    };
    return (
        <div className="d-flex justify-content-center flex-column">
            {/* add review title */}

            <h3 className="pt-3 text-uppercase text-center">Your Feedback means a Lot!!</h3>

            {/* Add review form */}
            <form className="pt-3 pb-5" onSubmit={handleSubmit(onSubmit)}>

                <input className=" m-2 w-50 px-4 py-2  mx-auto d-block" value={user.displayName} {...register("name", { required: true })} />

                <input className="m-2 w-50 px-4 py-2  mx-auto d-block" placeholder="Image URL"{...register("picture", { required: true })} />

                <input className="m-2 w-50 px-4 py-2  mx-auto d-block" placeholder="Designation"{...register("designation", { required: true })} />

                <input className="m-2 w-50 px-4 py-2  mx-auto d-block" placeholder="Your Address"{...register("address", { required: true })} />

                <input className="m-2 w-50 px-4 py-2 mx-auto d-block" placeholder="Write your review"{...register("desc", { required: true })} />


                <input
                    type="number"
                    placeholder="Rate your experience out of 5"
                    className="m-2 w-50 px-4 py-2 mx-auto d-block"
                    {...register('rating', {
                        max: { value: 5 }
                    })}
                />

                {/* submit button */}
                < input className="m-2 btn text-white w-50 mx-auto d-block" style={{ 'backgroundColor': '#c13f22' }} type="submit" value="Add Review" />

            </form>
        </div>
    );
};

export default AddReview;