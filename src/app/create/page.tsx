"use client";

//^ import { useRouter } from "next/router"; => next 12버전에서 사용하는 page 라우터 방식에서 사용하는 useRouter";
import { useRouter } from "next/navigation"; //^ => app 라우터에서는 navigation에서 가지고 와야 됨!!!!!

export default function Create() {
  const router = useRouter();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const title = e.target.title.value; // target == form 태그  e.target.title(name) name이 "title"인 엘리먼트
        const body = e.target.body.value;
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, body }),
        };
        fetch(`http://localhost:9999/topics`, options)
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            const lastId = result.id;
            router.push(`/read/${lastId}`); // 라우터를 이용해서 방금 생성한 글로 리디렉션
          });
      }}
    >
      <p>
        <input type="text" name="title" id="" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <input type="submit" value="create" />
    </form>
  );
}
