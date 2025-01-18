export default function ByName({ handleTourNameChange, filter }: any) {
  return (
    <>
      <div className="box-collapse scrollFilter">
        <input
          type="text"
          value={filter.tourName}
          onChange={(e) => handleTourNameChange(e.target.value)}
        />
      </div>
    </>
  );
}
