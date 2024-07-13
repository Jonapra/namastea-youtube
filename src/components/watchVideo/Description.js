import React, { useState } from 'react';

function Description({ description }) {
  const [expanded, setExpanded] = useState(false);

  const words = description?.split(' ');
  const shortDescription = words?.slice(0, 20).join(' ');
  const isLongDescription = words?.length > 20;

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div className="mt-2">
      <p>
        {expanded ? description : shortDescription}
        {isLongDescription && !expanded && '...'}
      </p>
      {isLongDescription && (
        <button 
          onClick={toggleExpand} 
          className="text-blue-500 hover:underline focus:outline-none"
        >
          {expanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  );
}

export default Description;