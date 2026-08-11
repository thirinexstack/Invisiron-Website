const uploadsBasePath = "/assets/source/wp-content/uploads";

function assetPath(path: string) {
  return `${uploadsBasePath}/${path.replace(/^\/+/, "")}`;
}

export { assetPath, uploadsBasePath };
