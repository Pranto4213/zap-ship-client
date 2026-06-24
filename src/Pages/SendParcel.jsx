import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import UseAuth from '../Hooks/UseAuth';

const SandParcel = () => {

    const { register, handleSubmit, control, 
        // formState: { error } 


    } = useForm()



    const {user} =UseAuth()

    const axiosSecure = useAxiosSecure()


   const serviceCenter = useLoaderData()
    const regionDuplicate = serviceCenter.map( c => c.region)

    const regions = [...new Set(regionDuplicate)]
    const senderRegion = useWatch({ control, name:'senderRegion'})
    const receiverRegion = useWatch({ control, name:'receiverRegion'})

    const districtsByRegion = region =>{
        const regionDistricts = serviceCenter.filter (c=> c.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    }
    
    console.log(regions)


    const handleSandParcel = data => {
        console.log(data)

        const isDocument = data.parcelType === 'document';
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;
        const parcelWeight = parseFloat(data.parcelWeight);

        let cost = 0
        if(isDocument){
            cost = isSameDistrict ? 60 : 80
        }
        else{
            if(parcelWeight < 3){
                cost = isSameDistrict ? 110 : 150

            }
            else{
                const minCharge = isSameDistrict ? 110 : 150
                const extraWeight = parcelWeight - 3
                const extraCharge = isSameDistrict ? extraWeight * 40 : extraWeight * 40 + 40
                  cost = minCharge + extraCharge
            }
        }
        console.log('cost', cost);

        Swal.fire({
  title: "Conform the cost?",
  text: `You will be charged ${cost} $ tk !`,
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, take it!"
}).then((result) => {
  if (result.isConfirmed){
    axiosSecure.post('/parcels', data)
    .then(res=> {
        console.log('after saving parcels data', res.data)
    })

  }

    // Swal.fire({
    // title: "Deleted!",
    // text: "Your file has been deleted.",
    // icon: "success"
//   });
});
    }


    return (
        <div className='w-11/12 mx-auto bg-black p-10'>
            <h2 className='text-5xl font-bold'>Send A Parcel</h2>

            <form onSubmit={handleSubmit(handleSandParcel)}>
                {/* parcel type */}
                <div className="mt-12 p-4 space-x-4">
                    <label className="label">
                        <input
                            type="radio"
                            {...register('parcelType')}
                            value="document"
                            className="radio"
                            defaultChecked
                        />
                        Document
                    </label>

                    <label className="label">
                        <input
                            type="radio"
                            {...register('parcelType')}
                            value="non-document"
                            className="radio"
                        />
                        Non-Document
                    </label>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <fieldset className="fieldset">
                        <label className="label w-full">Parcel Name</label>
                        <input type="text" {...register('parcelName')} className="input w-full" placeholder="parcel Name" />

                    </fieldset>
                    <fieldset className="fieldset">
                        <label className="label w-full">Parcel Width (kg)</label>
                        <input type="text" {...register('parcelWeight')} className="input w-full" placeholder="parcel width" />

                    </fieldset>



                </div>

                <div className="flex gap-5">
                    {/* sander details */}
                    <div className="flex-1 mt-6">
                        <h3>Sander Details</h3>
                        <fieldset className="fieldset">o                           <label className="label w-full">Sander Name</label>
                            <input type="text" {...register('sanderName')} defaultValue={user?.displayName} className="input w-full" placeholder="sander name" />

                            <label className="label w-full">Sander Email</label>
                            <input type="text" {...register('sanderEmail')} defaultValue={user?.email} className="input w-full" placeholder="sander e-mail" />



                                    {/* sender region */}


                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Sender Region</legend>
                                <select {...register('senderRegion')} defaultValue="Pick a Region" className="select">
                                    <option disabled={true}>Pick a Region</option> 

                                    {
                                        regions.map((r, i)=> <option key={i} value={r}>{r}</option>)
                                    }
                                    
                                </select>
                                <span className="label">Optional</span>
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Sender District</legend>
                                <select {...register('senderDistrict')} defaultValue="Pick a District" className="select">
                                    <option disabled={true}>Pick a District</option> 

                                    {
                                        districtsByRegion(senderRegion).map((r, i)=> <option key={i} value={r}>{r}</option>)
                                    }
                                    
                                </select>
                                <span className="label">Optional</span>
                            </fieldset>



                            <label className="label w-full">Address </label>
                            <input type="text" {...register('address')} className="mt-4 input w-full" placeholder="Address" />


                            <label className="label w-full">Sander Phone num </label>
                            <input type="text" {...register('phoneNumber')} className="mt-4 input w-full" placeholder="Phone number" />



                            <label className="label w-full">Pickup Instruction</label>
                            <textarea name="text-area" className='mt-4 border h-24' placeholder='Pickup Instruction'></textarea>

                        </fieldset>


                    </div>
                    {/* receiver details */}
                    <div className="flex-1 mt-6">
                        <h3>Receiver Details</h3>
                        <fieldset className="fieldset">

                            <label className="label w-full">Receiver Name</label>
                            <input type="text" {...register('receiverName')} className="input w-full" placeholder="Receiver Name" />


                            <label className="label w-full">Receiver Email</label>
                            <input type="text" {...register('ReceiverEmail')} className="input w-full" placeholder="Receiver e-mail" />


                                
                                    {/* sender region */}


                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Sender Region</legend>
                                <select {...register('receiverRegion')} defaultValue="Pick a Region" className="select">
                                    <option disabled={true}>Pick a Region</option> 

                                    {
                                        regions.map((b, i)=> <option key={i} value={b}>{b}</option>)
                                    }
                                    
                                </select>
                                <span className="label">Optional</span>
                            </fieldset>

                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Receiver District</legend>
                                <select {...register('receiverDistrict')} defaultValue="Pick a District" className="select">
                                    <option disabled={true}>Pick a District</option> 

                                    {
                                        districtsByRegion(receiverRegion).map((d, i)=> <option key={i} value={d}>{d}</option>)
                                    }
                                    
                                </select>
                                <span className="label">Optional</span>
                            </fieldset>



                            <label className="label w-full">Receiver Address</label>
                            <input type="text" {...register('receiverAddress')} className="mt-4 input w-full" placeholder="Receiver Address" />


                            <label className="label w-full">Receiver Contact No</label>
                            <input type="text" {...register('receiverContact')} className="mt-4 input w-full" placeholder="Receiver Contact No" />


  

                            <label className="label w-full">Delivery Instruction</label>
                            <textarea name="text-area" className='mt-4 border h-24' placeholder='Delivery Instruction'></textarea>

                        </fieldset>

                    </div>

                </div>
                <input type="submit" className='btn' value="submit" />
            </form>
        </div>
    );
};

export default SandParcel;