export default function post({ params }: { params: { slug: string } }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>This is the Page Slug - {params.slug}</div>
    </div>
  );
}
