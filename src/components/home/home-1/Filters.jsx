import { BiBriefcase, BiBuildings, BiMap, BiMoney } from "react-icons/bi";
import { property } from "../../../data/dummyData";
import SingleProductCard from "./SingleProductCard";

const Filters = () => {
  return (
    <div className="md:max-max-w-7xl px-4 w-full mx-auto relative -mt-8 sm:-mt-20">
      <div className="flex-col bg-white gap-x-4 flex-center-between gap-y-4 md:gap-y-0 md:flex-row card card-shadow dark:shadow-none">
        <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Location</h1>
            <div className="flex-align-center gap-x-2">
              <BiMap />
              <input
                type="text"
                className="w-full bg-transparent border-0 outline-none"
                placeholder="Enter location of the property"
              />
            </div>
          </div>
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Property Type</h1>
            <div className="flex-align-center gap-x-2">
              <BiBuildings />
              <select
                name=""
                id=""
                className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70">
                <option value="condors">Condors</option>
                <option value="offfice buildings">Offfice Buildings</option>
                <option value="apartments">Apartments</option>
                <option value="mansions">Mansions</option>
                <option value="real estate">Real Estate</option>
                <option value="penthouse">Penthouse</option>
                <option value="living room">Living Room</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">Price range</h1>
            <div className="flex-align-center gap-x-2">
              <BiMoney />
              <select
                name=""
                id=""
                className="w-full bg-transparent border-0 outline-none dark:bg-hover-color-dark opacity-70">
                <option value="$40,000 - $80,000">$40,000 - $80,000</option>
                <option value="$80,000 - $120,000">$80,000 - $120,000</option>
                <option value="$120,000 - $200,000">$120,000 - $200,000</option>
                <option value="$200,000 - $300,000">$200,000 - $300,000</option>
                <option value="$300,000 - $500,000">$300,000 - $500,000</option>
                <option value="$500,000 - $1000,000">
                  $500,000 - $1000,000
                </option>
              </select>
            </div>
          </div>
          <div className="flex-1 w-full p-2 border rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark dark:border-dark-light">
            <h1 className="font-bold">For</h1>
            <div className="flex-align-center gap-x-2">
              <BiBriefcase />
              <select
                name=""
                id=""
                className="w-full bg-transparent border-0 outline-none opacity-70 dark:bg-hover-color-dark">
                <option value="sell">Sell</option>
                <option value="rent">Rent</option>
              </select>
            </div>
          </div>
        </div>
        <button className="w-full btn btn-primary md:w-fit">search</button>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        {property.slice(0, 3).map((featured) => (
          <SingleProductCard key={featured.id} {...featured} />
        ))}
      </div>
    </div>
  );
};

export default Filters;
