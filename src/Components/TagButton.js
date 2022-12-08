import Button from 'react-bootstrap/Button';

function TagButton({saveTag}) {
  let tagArray = [];
  
  const clickTag = (e, tag) => {
    console.log(tagArray);
    // connect back to webapge, check boxinput button
    //how to staty clicked, but be able to unselect 
    if (tag in tagArray){
      //remove tag
      const index = tagArray.indexOf(tag)
      tagArray.remove(index)

    } else {
      tagArray.push(tag);
      saveTag(tagArray);
    }
    
  };

  return (
    <>
      <Button onClick={e => clickTag(e, "classes")}  variant="outline-primary">Classes</Button>{' '}
      <Button onClick={e => clickTag(e, "rent")} variant="outline-info">Housing</Button>{' '}
      <Button onClick={e => clickTag(e, "social")} variant="outline-success">Social</Button>{' '}
      <Button onClick={e => clickTag(e, "food")} variant="outline-warning">Food</Button>{' '}
      <Button onClick={e => clickTag(e, "misc")} variant="outline-danger">Misc</Button>{' '}

    </>
  );
}

export default TagButton;