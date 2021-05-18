export default function Statistic({ number, description }) {
  return (
    <div className="flex flex-col justify-center text-center">
      <p className="text-5xl font-extrabold font-nunito">{number}</p>
      <p className="text-2xl font-semibold font-nunito">{description}</p>
    </div>
  );
}
