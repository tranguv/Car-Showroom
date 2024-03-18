import { CustomFilter, Hero, SearchBar } from "@/components";
import CarCard from "@/components/CarCard";
import { CarProps } from "@/types";
import { fetchCars } from "@/utils";

export default  async function Home() {
  const allCars = await fetchCars();
  console.log(allCars);
  const isDataEmpty = !Array.isArray(allCars) || !allCars || allCars.length < 1;
  console.log(isDataEmpty);
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y
      max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>
            Explore the cars u might like
          </p>
          <div className="home__filters">
            <SearchBar />
            <div className="home__filter-container">
              <CustomFilter title="fuel" options={[]} />
              <CustomFilter title="year" options={[]} />
            </div>
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((cars: CarProps) => <CarCard car={cars}/>)}

            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no result</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
