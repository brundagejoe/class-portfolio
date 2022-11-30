const Reel: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="w-fit mx-auto">
        <iframe
          width="560"
          height={`${(560 / 16) * 9}`}
          src="https://www.youtube.com/embed/7BD6P891FH0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
export default Reel;
