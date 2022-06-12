import { useState, useContext } from "react";
import { addPeriods } from "../utility/utils";
import { TreeContext } from "./TreeContext";

const TreeNode = ({ node, children, level, levelLabel }) => {
  const nodeName = addPeriods(node, level);
  const [newNode, setNewNode] = useState("");
  const { addNode, deleteNode } = useContext(TreeContext);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      newNode && addNode(newNode, levelLabel);
      setNewNode("");
    }
  };

  return (
    <li>
      {levelLabel + " " + nodeName}
      <span className="delete--btn" onClick={() => deleteNode(levelLabel)}>
        ❌
      </span>
      <ul>
        {children &&
          children.map((node, index) => (
            <TreeNode key={node + index} {...node} level={level + 1} />
          ))}
        <li>
          <input
            value={newNode}
            onChange={(e) => setNewNode(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </li>
      </ul>
    </li>
  );
};

export default TreeNode;
