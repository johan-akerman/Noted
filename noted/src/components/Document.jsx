import { Image } from "./content/Image";
import { Title } from "./content/Title";
import { Text } from "./content/Text";

export function Document(doc) {
  return (
    <div className="col-span-7 mx-auto w-full h-screen overflow-y-scroll">
      <div className="mx-auto w-9/12 my-32 ">
        <Title />
        <Text />
        <Image />
        <Image />
        <Image />
      </div>
    </div>
  );
}
