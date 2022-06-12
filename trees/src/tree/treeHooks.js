import { useCallback, useEffect, useState } from "react";
import { getBin, updateBin } from "../api/treeApi";
import debounce from "lodash.debounce";

import {
  addLevelsToTree,
  alphabetiseTreeData,
  deleteTreeNode,
  updateTreeDataWithNewNode,
} from "../utility/utils";

export const useTree = (initialTreeData) => {
  const [treeData, setTreeData] = useState(addLevelsToTree(initialTreeData));
  const [originalTreeData, setOriginalTreeData] = useState(
    addLevelsToTree(initialTreeData)
  );
  const [alphabetiseState, setAlphabetiseState] = useState(false);

  const fetchTreeData = useCallback(async () => {
    try {
      const currentTreeData = await getBin();
      setTreeData(currentTreeData.record);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const updateTreeData = useCallback(
    debounce(
      async (updatedTreeData) => {
        try {
          await updateBin(updatedTreeData);
        } catch (e) {
          console.log(e);
        }
      },
      1000,
      {}
    ),
    []
  );

  useEffect(() => {
    fetchTreeData();
  }, [fetchTreeData]);

  useEffect(() => {
    updateTreeData(treeData);
  }, [treeData, updateTreeData]);

  const addNode = (nodeName, nodeParentLevelId) => {
    const newNode = { node: nodeName, children: [] };
    const newTreeData = updateTreeDataWithNewNode(
      treeData,
      nodeParentLevelId,
      newNode
    );
    setTreeData(newTreeData);
    setOriginalTreeData(newTreeData);
  };

  const deleteNode = (levelId) => {
    setAlphabetiseState(false);
    const newTreeData = deleteTreeNode(treeData, levelId);
    setTreeData(newTreeData);
    setOriginalTreeData(newTreeData);
  };

  const alphabetiseTree = () => {
    if (alphabetiseState) {
      setTreeData(originalTreeData);
      setAlphabetiseState(false);
      return;
    }
    const alphabetisedTree = alphabetiseTreeData(treeData);
    setTreeData(alphabetisedTree);
    setAlphabetiseState(true);
  };

  return {
    treeData,
    addNode,
    deleteNode,
    alphabetiseTree,
    alphabetiseState,
  };
};
