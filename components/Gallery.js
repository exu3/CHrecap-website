export default function Gallery({ image, title, children }) {
  return (
    <div className="flex flex-row w-4/6 border rounded-lg overflow-hidden shadow-xl">
      <div className="w-1/2">
        <img src={image} className="w-full" alt="Hackers at CodeHers Hack" />
      </div>
      <div className="w-1/2 bg-blue p-4">
        <p className="text-2xl font-gosha leading-loose">{title}</p>
        <p className="font-nunito text-xl">{children}</p>
      </div>
    </div>
  );
}
