export function Image({ imageUrl, caption }) {
  return (
    <>
      <img className="w-full" src={`${imageUrl}`} />
      <p className="pt-1 text-gray-500 pb-6">{caption}</p>
    </>
  );
}
