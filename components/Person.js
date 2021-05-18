export default function Person({ name, image, role }) {
  return (
    <div className="flex flex-col justify-center">
      <div className="rounded-full w-36 h-36 overflow-hidden mx-auto -mb-4 border-white border-2">
        <img src={image} alt={name} />
      </div>
      <div className="border-blue border-2 rounded-xl bg-white text-center">
        <p className="font-nunito font-bold text-black text-xl -mb-1">{name}</p>
        <p className="font-nunito font-light text-gray-600 text-base">{role}</p>
      </div>
    </div>
  );
}
