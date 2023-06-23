export const goToHome = (navigate) => {
  navigate("/");
};
export const goToPokedexPage = (navigate) => {
  navigate("/pokedex");
};
export const goToDetailPage = (navigate, name) => {
  navigate(`/pokemondetails/${name}`);
  console.log("navigate", name);
};
