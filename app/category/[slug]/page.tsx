export default function Category({ params }: { params: { slug: string } }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>This is the category - {params.slug}</div>
    </div>
  );
}
