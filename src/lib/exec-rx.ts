import { exec, ExecOptions } from "child_process";
import { BaseEncodingOptions } from 'fs';
import { Observable } from "rxjs";

export function execRx(cmd: string, options?: BaseEncodingOptions & ExecOptions, emitStdErr=false): Observable<any> {
    return new Observable((observer) => {
        exec(cmd, options, (err, stdout, stderr) => {
            if (err) {
                observer.error(err);
            } else {
                observer.next(emitStdErr ? stderr.toString() : stdout.toString());
                observer.complete();
            }
        });
    });
}