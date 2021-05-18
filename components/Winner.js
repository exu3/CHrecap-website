export default function Winner({ trackTitle, projectName, icon }) {
  return (
    <div>
      <img src={icon} alt="Icon" />
      <p>{trackTitle}</p>
      <p>{projectName}</p>
    </div>
  );
}
