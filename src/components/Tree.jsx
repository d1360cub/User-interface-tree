import React, { useState } from 'react';

const Tree = ({ treeData }) => {
  const [expand, setExpand] = useState(false);

  return (
    <div>
      <span onClick={() => setExpand(true)}>{treeData.name}</span>
      <div>
        {treeData.items.map((element) => {
          return <span>element.name</span>;
        })}
      </div>
    </div>
  );
};

export default Tree;
