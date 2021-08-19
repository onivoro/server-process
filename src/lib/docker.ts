import { spawnRx } from "./spawn-rx";

export class Docker {
  constructor(
    public readonly containerName: string,
    public readonly binaryName: string,
  ) { }

  command(cmd: string) {
    const cmdLiteral = this.containerName ? `docker exec ${this.containerName} sh -c '${cmd}'` : cmd;
    console.log(cmdLiteral);
    return cmdLiteral;
  }

  commandArray(cmd: string) {
    const cmdLiteral = this.containerName ? `docker exec ${this.containerName} sh -c '${cmd}'` : cmd;
    console.log(cmdLiteral);
    return cmdLiteral;
  }

  spawnRx(args: string[]) {
    return spawnRx('docker', ['exec', this.containerName, this.binaryName, ...args])
  }
}