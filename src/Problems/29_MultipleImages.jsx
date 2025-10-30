import React, { useReducer } from "react";

const initialState = {
  currentImageIndex: 0,
};

const imageReducer = (state, action) => {
  switch (action.type) {
    case "PREVIOUS_IMAGE":
      return { currentImageIndex: state.currentImageIndex - 1 };
    case "NEXT_IMAGE":
      return { currentImageIndex: state.currentImageIndex + 1 };
    default:
      return state;
  }
};

const images = [
  "https://imgs.search.brave.com/_SER6JrmlaQUeUy0GWXi1FttMpq4kHs_-wPeFm6Prq4/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L21h/cnZlbGNpbmVtYXRp/Y3VuaXZlcnNlL2lt/YWdlcy84LzhlL0F2/ZW5nZXJzLW1vdmll/LXNjcmVlbmNhcHNf/Y29tLTEyNTc4LnBu/Zy9yZXZpc2lvbi9s/YXRlc3Qvc2NhbGUt/dG8td2lkdGgtZG93/bi8yNTA_Y2I9MjAy/MDA5MTgwNTM5NDc",
  "https://imgs.search.brave.com/4GVoYegr5jfXG2ECd8Iy44O6BC4puqQDTVKrf2lYCho/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYXZl/bmdlcnMtZW5kZ2Ft/ZS1waWN0dXJlcy1h/cmZleGFteTdiYXJn/cngzLmpwZw",
  "https://imgs.search.brave.com/JQm9cesxiS-WdMco795npiLA2Pa5GfG-XViIExKymaQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFoMHhDbTNTUkwu/anBn",
  "https://imgs.search.brave.com/9eXZyINdDEpZG1RTj6iacj5JRg82iWC3MCccZ6Ed2tQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTAw/Njg2MDQ2L3Bob3Rv/L21hcnZlbHMtdWx0/aW1hdGUtc3BpZGVy/LW1hbi13ZWItd2Fy/cmlvcnMtdGhlLWF2/ZW5naW5nLXNwaWRl/ci1tYW4tcGFydC10/d28tc3BpZGVyLW1h/bi1hbmQtaGlzLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1X/elRhRTRoVG5YSTRQ/aHVZREgxSG5Ed2l0/VkpxY1RGNVJOQndY/Y2p1VTQwPQ",
  "https://imgs.search.brave.com/caLpm-Kihu7kgYCGL3IlIgRmIT-bBWjhIx2TOZ79E1w/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzU5Lzc5Lzkw/LzM2MF9GXzQ1OTc5/OTAzNF94S2wxWW85/WFJjbVdtb3dNemZz/YlNRMjBCcTFNZUo3/Si5qcGc",
];

const MultipleImages = () => {
  const [state, dispatch] = useReducer(imageReducer, initialState);

  const currentImage = images[state.currentImageIndex];

  return (
    <div>
      <h1>Multiple Images</h1>

      <div>
        <img src={currentImage} alt="Image" />
      </div>

      <div>
        <button onClick={() => dispatch({ type: "PREVIOUS_IMAGE" })}>
          Previous
        </button>
        <button onClick={() => dispatch({ type: "NEXT_IMAGE" })}>Next</button>
      </div>
    </div>
  );
};

export default MultipleImages;
