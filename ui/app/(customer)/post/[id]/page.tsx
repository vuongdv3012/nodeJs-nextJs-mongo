export default async function Page({ params }: { params: { id: string } }) {
  return <div>post {params.id}</div>;
}
