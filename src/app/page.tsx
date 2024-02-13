import Image from "next/image";
export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      Hello Next.js!
      <Image
        src="/진주_미모티콘.png"
        alt="진주 이미지"
        width={200}
        height={200}
      />
    </>
  );
}
