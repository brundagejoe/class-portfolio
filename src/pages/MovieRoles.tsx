import { GradientText } from "../components/UI";
import movieRoles from "../data/movie_roles.json";
import { Movie } from "../types/MovieRoles";

const getOrderedMovieRoles = (): Movie[] => {
  const roleOrder = ["Joe", "Maggie", "Harry", "Charlie", "John", "Jack"];
  const sortedMovieRoles = movieRoles as Movie[];

  sortedMovieRoles.forEach((movie) => {
    // movie.roles.forEach((role) => {
    //   role.character = "TEST";
    // });
    movie.roles.sort(
      (a, b) => roleOrder.indexOf(a.role) - roleOrder.indexOf(b.role)
    );
  });

  return sortedMovieRoles;
};

const MovieRoles = () => {
  const sortedMovieRoles = getOrderedMovieRoles();
  return (
    <div className="container mx-auto px-4 pb-10">
      <div className="w-fit mx-auto font-bold">
        <GradientText className="mb-10" size="5xl">
          Movie Roles
        </GradientText>
        {sortedMovieRoles.map((movieRole) => (
          <div
            key={`${movieRole.title}-${movieRole.subtitle}`}
            className="mb-4"
          >
            <div className="text-center mb-2">
              <div className="text-3xl">{movieRole.title}</div>
              <div className="text-xl">{movieRole.subtitle}</div>
            </div>
            {movieRole.roles.map((role) => (
              <div key={role.character}>
                <div className="flex justify-between">
                  <div>
                    {role.character}
                    {role.note && "*"}
                  </div>
                  <div>{role.role}</div>
                </div>
              </div>
            ))}
            {movieRole.roles.map((role) => (
              <div key={`role-note-${role.character}`}>
                {role.note && (
                  <div className="text-gray-500 dark:text-gray-400 font-semibold text-sm italic">
                    * {role.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieRoles;
