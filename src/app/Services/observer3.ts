import { Observer } from "rxjs";

export class Observer3 implements Observer<number> {
    next(data: number) {
        console.log('Observer 3: ', data);

    }
    error(error: string) {
        console.log(error);

    }

    complete() {
        console.log('COMPLETE DONE BY CLASS');

    }
}