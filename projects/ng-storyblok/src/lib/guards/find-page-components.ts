
const isCollectionType = (root: any) =>
  (typeof root === 'object' || Array.isArray(root));

export const findPageComponents = (root: any, acc = new Set<string>()): Set<string> => {
  if (!root || !isCollectionType(root)) {
    return acc;
  }

  if (Array.isArray(root)) {
    root.forEach((entry) => findPageComponents(entry, acc));
  }

  if (typeof root === 'object') {
    if (root.component) {
      acc.add(root.component)
    }

    Object
      .values(root)
      .filter((entry) => isCollectionType(entry))
      .forEach((entry) => findPageComponents(entry, acc));

  }

  return acc;

}
