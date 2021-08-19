import { spawnRx } from "./spawn-rx";

export class Docker {
  constructor(
    public readonly containerName: string,
    public readonly binaryName: string,
  ) { }

  spawnRx(args: string[]) {
    return spawnRx('docker', ['exec', this.containerName, this.binaryName, ...args])
  }
}