export const addLevelsToTree = (treeData, parentLabel = "") =>
  treeData.map((currentTreeData, index) => {
    const currentNodeLevelId = `${parentLabel ? `${parentLabel}.` : ""}${
      index + 1
    }`;
    return {
      node: currentTreeData.node,
      levelLabel: currentNodeLevelId,
      children: addLevelsToTree(currentTreeData.children, currentNodeLevelId),
    };
  });

export const updateTreeDataWithNewNode = (treeData, levelLabel, newNode) => {
  return treeData.map((currentTreeData) => {
    const mutableCurrentTreeData = { ...currentTreeData };
    if (currentTreeData.levelLabel === levelLabel) {
      const mutableNewNode = { ...newNode };
      mutableNewNode.levelLabel = `${levelLabel ? `${levelLabel}.` : ""}${
        currentTreeData.children.length + 1
      }`;
      mutableCurrentTreeData.children = [
        ...mutableCurrentTreeData.children,
        mutableNewNode,
      ];
    } else {
      mutableCurrentTreeData.children = updateTreeDataWithNewNode(
        mutableCurrentTreeData.children,
        levelLabel,
        newNode
      );
    }
    return mutableCurrentTreeData;
  });
};

export const deleteTreeNode = (treeData, levelLabel) => {
  if (!levelLabel.includes(".")) {
    return treeData.filter(
      (currentTreeData) => currentTreeData.levelLabel !== levelLabel
    );
  }
  const parentLevelIdArray = levelLabel.split(".");
  const parentLevelId = parentLevelIdArray
    .slice(0, parentLevelIdArray.length - 1)
    .join(".");
  return treeData.map((currentTreeData) => {
    const mutableCurrentTreeData = { ...currentTreeData };
    if (mutableCurrentTreeData.levelLabel === parentLevelId) {
      mutableCurrentTreeData.children = mutableCurrentTreeData.children.filter(
        (currentChildrenData) => currentChildrenData.levelLabel !== levelLabel
      );
    } else {
      mutableCurrentTreeData.children = deleteTreeNode(
        mutableCurrentTreeData.children,
        levelLabel
      );
    }
    return mutableCurrentTreeData;
  });
};

export const alphabetiseTreeData = (treeData) => {
  const mutableTreeData = [...treeData];
  mutableTreeData.sort((child1, child2) =>
    child1.node.localeCompare(child2.node)
  );

  return mutableTreeData.map((currentTreeData) => {
    const currentMutableTreeData = { ...currentTreeData };
    currentMutableTreeData.children = alphabetiseTreeData(
      currentMutableTreeData.children
    );
    return currentMutableTreeData;
  });
};

export const addPeriods = (nodeName, level) => {
  const [firstLetter, ...restLettersArray] = nodeName;
  const restLetters = restLettersArray.join("");
  const periodString = [...Array(level)].map((_, index) => ".").join("");

  return `${firstLetter}${periodString}${restLetters}`;
};
