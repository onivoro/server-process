import { Subject } from 'rxjs';

const stdin = new Subject();
const stdout = new Subject();

export const listen = () => {

    process.stdin.on('data', d => stdin.next(d));
    process.stdin.on('close', () => stdin.complete());

    // process.stdout.on('data', d => stdout.next(d));
    // process.stdout.on('close', () => stdout.complete());
    stdout.asObservable().subscribe((d: string) => process.stdout.write(d));

    return { stdout, stdin };
}
