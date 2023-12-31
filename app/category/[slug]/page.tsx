const categoryPage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div>This is the Category Page for {params.slug}</div>
      </div>
    </>
  );
};

export default categoryPage;
