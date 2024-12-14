import fs from 'fs';

const getMarkdownFiles = (contentPath) => {
  // Ensure the content path is absolute
  const absolutePath = `${process.cwd()}/src/${contentPath}`;

  // Read all files in the directory
  const files = fs.readdirSync(absolutePath);

  // Filter for Markdown files and prepend the full path
  const markdownFiles = files
    .filter((file) => file.endsWith('.md')) // Only include `.md` files
    .map((file) => `${absolutePath}/${file}`); // Prepend the absolute path

  return markdownFiles;
};

export default getMarkdownFiles;
