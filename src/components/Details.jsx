import { useParams } from "react-router-dom";

const Details = () => {
  let { courseName } = useParams();
  return (
    <>
      <div
        className="w-full  flex items-center justify-center h-[20rem] relative bg-center bg-no-repeat bg-cover  "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1716619240251-54a22779ed8a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <h1 className=" text-white text-4xl font-bold">{courseName}</h1>
      </div>
      <div className="py-20 min-h-[calc(100vh-20rem)] px-4 max-w-7xl xl:mx-auto text-xl">
        Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
        cillum sint consectetur cupidatat.Lorem ipsum dolor sit amet, qui minim
        labore adipisicing minim sint cillum sint consectetur cupidatat.Lorem
        ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum
        sint consectetur cupidatat.
      </div>
    </>
  );
};

export default Details;
