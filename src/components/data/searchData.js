import tutorials from "../data/Tutorial"; // array of tutorials
import blogs from "../blogdata/blogs"; // array of blogs

const searchData = [
  ...tutorials.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    type: "Tutorial",
    icon: item.icon || "/default-icon.png",
    path: `/tutorials/${item.id}`, // ✅ link to individual tutorial page
  })),

  ...blogs.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    type: "Blog",
    icon: item.image || "/default-blog-icon.png",
    path: `/blogs/${item.id}`, // ✅ link to individual blog page
  })),
];

export default searchData;
