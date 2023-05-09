import Image from "next/image";

export const XImage = ({ src, alt, ...rest }: any) => {
  return <Image src={src} alt={alt} {...rest} />;
};
