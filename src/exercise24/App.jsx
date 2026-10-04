import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Registration Successful!");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">

      <form onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-[450px] p-7 rounded-lg shadow-lg" >

        <h1 className="text-2xl font-bold mb-6">
          Student Registration
        </h1>

        <label className="block font-semibold mb-2">
          Student Name
        </label>

        <input className="w-full border p-2 rounded mb-1" {...register("name", { required: "Name is required",
            minLength: { value: 2, message: "Name must be at least 2 characters", }, })}
        />

        <p className="text-red-500 text-sm">
          {errors.name?.message}
        </p>


       
        <label className="block font-semibold mt-4 mb-2">
          Email
        </label>

        <input className="w-full border p-2 rounded mb-1" {...register("email", {
            required: "Email is required", })}
        />

        <p className="text-red-500 text-sm">
          {errors.email?.message}
        </p>


       
        <label className="block font-semibold mt-4 mb-2">
          Grade Level
        </label>

        <select className="w-full border p-2 rounded" {...register("grade", {
            required: "Please select a grade", })}
        >
          <option value="">Select Grade</option>
          <option value="Grade 9">Grade 90</option>
          <option value="Grade 10">Grade 88</option>
          <option value="Grade 11">Grade 70</option>
          <option value="Grade 12">Grade 60</option>
        </select>

        <p className="text-red-500 text-sm">
          {errors.grade?.message}
        </p>


    
        <label className="block font-semibold mt-4 mb-2">
          Subjects Interest
        </label>

        <div className="space-y-2">

          <label className="flex gap-2">
            <input type="checkbox" value="Mathematics" {...register("subjects", { required: "Select at least one subject", })}
            />
            Mathematics
          </label>

          <label className="flex gap-2">
            <input type="checkbox" value="Science" {...register("subjects")} />
            Science
          </label>

          <label className="flex gap-2">
            <input type="checkbox" value="English" {...register("subjects")} />
            English
          </label>

        </div>

        <p className="text-red-500 text-sm">
          {errors.subjects?.message}
        </p>


       
        <button type="submit" className="w-full bg-pink-500 text-white py-3 rounded mt-5 hover:bg-pink-600"u >
          Register
        </button>

      </form>
    </div>
  );
}

export default App;