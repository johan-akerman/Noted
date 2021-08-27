import image from "../../images/image_placeholder.png";

export function Image() {
  return (
    <>
      <img className="w-full" src={image} />
      <p className="pt-1 text-gray-500 pb-6">Caption goes here</p>
    </>
  );
}
