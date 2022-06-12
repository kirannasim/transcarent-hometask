import TreeNode from "./TreeNode";
import SwitchButton from "../components/switchButton";
import { TreeContext } from "./TreeContext";
import { useTree } from "./treeHooks";
import "./index.css";

const inputTreeData = require("./data.json");

const Tree = () => {
  const { treeData, addNode, deleteNode, alphabetiseState, alphabetiseTree } =
    useTree(inputTreeData);
  return (
    <TreeContext.Provider value={{ treeData, addNode, deleteNode }}>
      <div className="tree">
        <SwitchButton checked={alphabetiseState} onChange={alphabetiseTree} />
        <ul>
          {treeData.map((curData, index) => (
            <TreeNode key={curData + index} {...curData} level={0} />
          ))}
        </ul>
      </div>
    </TreeContext.Provider>
  );
};

export default Tree;
