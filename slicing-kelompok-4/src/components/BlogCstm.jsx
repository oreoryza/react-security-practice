import React from 'react'
const BlogPostCard2 = ({ image, date, title, author, authorImage }) => {
    return (
      <div className="border bg-white border-[#0E1F5133] rounded-lg p-6 w-full hover:shadow-lg transition-shadow duration-300">
        <div className="relative overflow-hidden rounded-lg">
          <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" />
        </div>
        <div className="mt-4">
          <h3 className="text-peachred font-semibold text-xl mb-2">{title}</h3>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <img src={authorImage} alt={author} className="w-8 h-8 rounded-full" />
              <span className="text-sm font-medium text-gray-700">{author}</span>
            </div>
            <span className="text-sm text-gray-500">{date}</span>
          </div>
        </div>
      </div>
    );
  };

const BlogCstm = () => {
    
    const BlogPostsCard2 = [
      {
        image: 'https://www.its.ac.id/wp-content/uploads/2023/04/businessman-showing-changes-report-scaled-1.jpg',
        date: 'May 4th, 2022',
        title: 'The most Popular Business Of the Year',
        author: 'Ranold Jeff.',
        authorImage: 'https://cdn.prod.website-files.com/60a6b551be6130e4e5b19b98/622fa9eaf563130c69675c85_jeff.webp',
      },
      {
        image: 'https://cdn.prod.website-files.com/6100d0111a4ed76bc1b9fd54/61ded9e2811f9930db550b67_shutterstock_1517844719-business%20(1)-p-2000.jpeg',
        date: 'Apr 27th, 2022',
        title: 'The most Popular Business Of the Year',
        author: 'Patricia Anderson',
        authorImage: 'https://m.media-amazon.com/images/S/amzn-author-media-prod/md03as8uvet8d7u33t32t3meod._SY450_CR0%2C0%2C450%2C450_.jpg',
      },
      {
        image: 'https://i0.wp.com/www.oxbridgeacademy.edu.za/blog/wp-content/uploads/2019/02/business-success-1.jpg?resize=1280%2C640&ssl=1',
        date: 'Apr 20th, 2022',
        title: 'The most Popular Business Of the Year',
        author: 'Elaine Luna',
        authorImage: 'https://headway.co/cdn-cgi/image/width=500,quality=100,format=auto,fit=contain/https://assets.headway.co/provider_photos/45041/31fd3a32-049d-11ee-b62e-0a58a9feac02-45041-1686078368866.jpeg',
      },
    ];
    return (
      <div>
        {/* Bottom Section */}
        <div className="bg-offwhite py-10">
          <div className="text-center my-5">
            <h1 className="font-bold text-2xl text-peachred">\ Our Blog \</h1>
            <h2 className="font-bold text-4xl mt-1 text-darkblue">Latest Post</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
            {BlogPostsCard2.map((post, index) => (
              <BlogPostCard2 key={index} image={post.image} date={post.date} title={post.title} author={post.author} authorImage={post.authorImage} />
            ))}
          </div>
        </div>
      </div>
    )
}
  
export default BlogCstm;