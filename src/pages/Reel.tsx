import { useEffect, useState } from "react";

const Reel: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  //This is not a good solution, but it will keep the user from seeing the iframe before it is loaded
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className="container mt-[-80px] flex place-items-center min-h-screen m-auto">
      <div className="w-fit mx-auto">
        {isLoaded ? (
          <iframe
            width="560"
            height={`${(560 / 16) * 9}`}
            src="https://www.youtube.com/embed/7BD6P891FH0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12 animate-spin stroke-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        )}
      </div>
    </div>
  );
};
export default Reel;
