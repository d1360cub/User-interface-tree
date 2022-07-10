const treeData = {
  name: 'root',
  isFolder: true,
  items: [
    {
      name: 'child1',
      isFolder: true,
      items: [
        {
          name: 'grandchild1',
          isFolder: false,
        },
        {
          name: 'grandchild2',
          isFolder: false,
        },
      ],
    },
    {
      name: 'child2',
      isFolder: false,
    },
  ],
};

export default treeData;
