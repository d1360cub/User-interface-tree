import Tree from './components/Tree';
import treeData from './data/tree';

function App() {
  return (
    <div className='App'>
      <Tree treeData={treeData} />
    </div>
  );
}

export default App;
