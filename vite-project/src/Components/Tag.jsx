function Tag({ tags }) {
   return (
      <div className="tag">
         {tags.map((tag, index) => (
            <p key={index}>{tag}</p>
         ))}
      </div>
   );
}

export default Tag;
