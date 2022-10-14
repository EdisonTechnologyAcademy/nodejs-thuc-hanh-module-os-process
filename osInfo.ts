import os from 'os';

const getOsInfo = () => {
  const memoryTotal = os.totalmem();
  const cpus = os.cpus().length;
  const type = os.type();
  const hostname = os.hostname();
  const platform = os.platform();

  console.log("Platform: " + platform);
  console.log("Memory total: " + memoryTotal);
  console.log("Number of CPUs: " + cpus);
  console.log("Hostname: " + hostname);
  console.log("type: " + type);
}

getOsInfo();