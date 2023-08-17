import StandingCat from "@/components/funnyJokes/StandingCat";

const StandingGang = () => {
  return (
    <>
      {Array(1, 2, 3).map((v, i) => (
        <StandingCat key={i} />
      ))}
    </>
  );
};

export default StandingGang;
