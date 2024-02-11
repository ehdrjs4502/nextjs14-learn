export default function MovieDetail({ params }: { params: { id: string } }) {
  return (
    <div>
      <h4>movie {params.id}</h4>
    </div>
  );
}
