import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  fullname: string,
  email: string,
  number: Number,
  password: string,
};

export default function SignIn() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

//   console.log(watch("name"))

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-4/5 md:w-2/4 m-auto pt-20">
        <h3 className="text-xl text-gray-700 font-mono font-bold mb-5 text-center">Let’s get you started</h3>
      
      <label htmlFor="">Full Name</label>
      <input defaultValue="" {...register("fullname", { required: true })} className="mb-3 h-10 rounded-lg text-gray-950 pl-3 outline-none" />
      {errors.fullname && <span className="text-orange-800 text-xs">This field is required</span>}
      
      <label htmlFor="">Email Address</label>
      <input type="email" {...register("email", { required: true })} className="mb-1 h-10 rounded-lg text-gray-950 pl-3 outline-none" />
      {errors.email && <span className="text-orange-800 text-xs">This field is required</span>}

      <label htmlFor="">Phone Number</label>
      <input type="number" {...register("number", { required: true })} className="mb-1 h-10 rounded-lg text-gray-950 pl-3 outline-none" />
      {errors.number && <span className="text-orange-800 text-xs">This field is required</span>}

      <label htmlFor="">Password</label>
      <input type="password" {...register("password", { required: true })} className="mb-1 h-10 rounded-lg text-gray-950 pl-3 outline-none" />
      {errors.password && <span className="text-orange-800 text-xs">This field is required</span>}
      
      <button type="submit" className="bg-gray-700 h-10 rounded-lg mt-3">Submit</button>
    </form>
  );
}