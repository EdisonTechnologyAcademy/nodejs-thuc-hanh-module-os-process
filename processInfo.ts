const getProcessInfo = () => {
  const path = process.cwd();
  const version = process.version;
  const memory = process.memoryUsage();

  console.log("Foder: " + path);
  console.log("Process version: " + version);
  console.log("Memory use: " + memory);
}

getProcessInfo();
