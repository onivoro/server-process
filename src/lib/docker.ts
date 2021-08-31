import { execRx } from "./exec-rx";

export class Docker {
  constructor(
    public readonly containerName: string,
    public readonly binaryName: string,
  ) { }

  execRx(args: string[]) {
    return execRx(['docker', 'exec', this.containerName, this.binaryName, ...args].join( ))
  }
}