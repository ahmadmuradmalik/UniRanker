import Badge from 'react-bootstrap/Badge';
import './Components.css';

function Tag({tag}) {
  return (
    <div>
      <Badge className="badges" bg={tag}>
        o
      </Badge>{' '}

    </div>
  );
}

export default Tag;