import { callApi } from "./apiMiddleware";

export const updateBin = (treeData) =>
  callApi({
    method: "PUT",
    url: "",
    body: treeData,
  });

export const getBin = () =>
  callApi({
    method: "GET",
    url: "",
  });
