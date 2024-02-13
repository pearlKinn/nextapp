export default async function Read(props: { params: { id: string | number } }) {
  // ㅛㅏ용자와 상호작용하지 않기 때문에 서버 컴포넌트
  const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`);
  const topic = await resp.json();

  return (
    <div className="bg-green-300">
      <h2>{topic.title}</h2>
      parameter: {topic.body}
    </div>
  );
}
