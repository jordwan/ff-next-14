import PostPageMain from '@/components/PostPageMain';

const postPage = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <PostPageMain />
      <div className="flex items-center justify-center h-screen">
        <div>This is the Post Page - {params.slug}</div>
      </div>
    </>
  );
};

export default postPage;
