import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();


    const { user } = useAuth()

    const onSubmit = data => {

        axios.post('http://localhost:5000/colorCastleReviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Review Added successfully");
                    reset();
                }
            })
    };
    return (
        <div>

            {/* add review title */}

            <h3 className="pt-3 pb-1 text-uppercase ms-5 ps-5">Your Feedback means a Lot!!</h3>


            <div className="d-flex justify-content-center">

                {/* Add review form */}
                <form className="pt-3 pb-5 mx-auto d-block" onSubmit={handleSubmit(onSubmit)}>

                    <input className=" m-2 w-50 px-4 py-2" value={user.displayName} {...register("name", { required: true })} />

                    <input className="m-2 w-50 px-4 py-2" placeholder="Image URL"{...register("picture", { required: true })} />

                    <input className="m-2 w-50 px-4 py-2" placeholder="Designation"{...register("designation", { required: true })} />
                    <br />

                    <input className="m-2 w-50 px-4 py-2" placeholder="Your Address"{...register("address", { required: true })} />

                    <input className="m-2 w-50 px-4 py-2" placeholder="Write your review"{...register("desc", { required: true })} />
                    <br />

                    <input
                        type="number"
                        placeholder="Rate your experience out of 5"
                        className="m-2 w-50 px-4 py-2"
                        {...register('rating', {
                            max: { value: 5 }
                        })}
                    />

                    {/* submit button */}
                    < input className=" m-3 btn btn-success w-50" type="submit" value="Add Review" />

                </form>
            </div>
        </div >
    );
};

export default AddReview;