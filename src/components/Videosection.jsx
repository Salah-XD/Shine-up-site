const Videosection = () => {
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative">
      <video
        src="https://res.cloudinary.com/dwlukj2fe/video/upload/v1731065583/wr1iujbrmwlusfdxexaw.webm"
        type="video/webm"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-auto object-cover -mt-10 md:h-[80vh]"
        style={{ height: "100vh" }}
        onContextMenu={handleContextMenu}
      />
    </div>
  );
};

export default Videosection;
