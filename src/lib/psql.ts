import { Docker } from "./docker";
import { spawnRx } from "./spawn-rx";

const binaryName = 'psql';

export class PSql {
  private container = new Docker(this.containerName, binaryName);
  constructor(public readonly containerName: string) { }

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

  spawnRx(cmd: string, db: string, username: string) {
    const dbOptions = db ? ['-d', db] : [];
    const commonArgs = ['-qtAX', '-U', username, ...dbOptions, '-c', cmd];
    return this.containerName
      ? this.container.spawnRx(commonArgs)
      : spawnRx(binaryName, commonArgs);
  }

}