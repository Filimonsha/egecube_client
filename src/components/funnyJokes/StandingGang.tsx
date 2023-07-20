import StandingCat from "@/components/funnyJokes/StandingCat";

const StandingGang = () => {
  return (
    <>
      {Array(1, 2, 3).map(() => (
        <StandingCat />
      ))}
    </>
  );
};

export default StandingGang;
