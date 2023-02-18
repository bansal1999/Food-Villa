const Shimmer = () => {
  return (
    <div className="restraurent-list">
      {Array(10)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
      <h1>Shimmer </h1>
    </div>
  );
};

export default Shimmer;
