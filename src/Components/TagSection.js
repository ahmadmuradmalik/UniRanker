import Tag from './Tag.js';
import './Components.css';

function TagSection({tags}) {
    let tagsArr = [];

    if (tags[0] === true){
        tagsArr.push("primary");
    } if (tags[1] === true){
        tagsArr.push("info");
    } if (tags[2] === true){
        tagsArr.push("success");
    } if (tags[3] === true){
        tagsArr.push("warning");
    } if (tags[4] === true){
        tagsArr.push("danger");

    }

  return (
    <div>
         {tagsArr?.map((tag) => (
              <Tag tag={tag}>
              </Tag>
          ))}
    </div>
  );
}

export default TagSection;