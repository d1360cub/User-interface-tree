import React, { useState } from 'react';

const Tree = ({ treeData }) => {
  const [expand, setExpand] = useState(false);

  return treeData.isFolder ? (
    <div>
      <span onClick={() => setExpand(!expand)}>
        {treeData.name} <br />
      </span>
      <div style={{ display: expand ? 'block' : 'none', paddingLeft: 15 }}>
        {treeData.items.map((element) => {
          return <Tree key={element.name} treeData={element} />;
        })}
      </div>
    </div>
  ) : (
    <span>
      {treeData.name} <br />
    </span>
  );
};

export default Tree;
