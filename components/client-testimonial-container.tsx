import type { NextPage } from "next";

const ClientTestimonialContainer: NextPage = () => {
  return (
      <div className="w-full mx-auto mt-16 mb-20 ">
        <div className="w-full mx-auto text-center">
          <h2 className="text-13xl p-0 m-0">
            What our happy client say
          </h2>
          <p className="text-sm p-0 m-0 mt-1 text-[#dfdfdf]">
            Several selected clients, who already believe in our service.
          </p>
        </div>

        <div className="w-full mx-auto mt-14 flex flex-row items-center justify-between gap-4">
          <img className="" alt="" src="/big-client.svg" />

          <div className="">
            <p className="text-5xl">
              Matthew Paul
            </p>
            <div className="">
              <p className="leading-[160%] text-base">
                Perfect, very good job! Thank you for the amazing design and work.
                Really impressed with the high quality and quick turnaround time.
                Highly recommend.
              </p>
              <img className="" alt="" src="/four-dotted.svg" />
            </div>
          </div>

          <img className="" alt="" src="/group-71.svg" />
        </div>
    </div>
  );
};

export default ClientTestimonialContainer;
